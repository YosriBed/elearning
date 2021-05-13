import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHead,
  ModalTitle,
} from '@afc-org/react-tailwind';
import { useFormik } from 'formik';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import { questionSchema } from './validation';

const QuestionModal = ({
  isOpen,
  toggle,
  addQuestion,
  editQuestion,
  question,
}) => {
  const [questionType, setQuestionType] = useState();
  const [choices, setChoices] = useState([]);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    enableReinitialize: true,
    validationSchema: questionSchema,
    initialValues: {
      title: question && question.title ? question.title : '',
      content: question && question.content ? question.content : '',
      questionType:
        question && question.questionType ? question.questionType : '',
      expectedAnswer:
        question && question.expectedAnswer ? question.expectedAnswer : '',
    },
    onSubmit: (values) => {
      if (questionType === 'MCQ') {
        values.choices = choices;
      }
      if (question) {
        editQuestion({ ...values, id: question.id });
      } else {
        addQuestion({ ...values, id: nanoid() });
      }
      toggle();
    },
  });
  return (
    <Modal show={isOpen}>
      <ModalDialog>
        <ModalContent>
          <ModalHead>
            <ModalTitle>Question modal</ModalTitle>
            <button
              type="button"
              onClick={toggle}
              className="float-right text-2xl font-bold text-black leading-none bg-transparent border-0 opacity-50 p-4 -mr-4 -mt-4 -mb-4 ml-auto cursor-pointer"
            >
              <span aria-hidden="true">×</span>
            </button>
          </ModalHead>
          <ModalBody className="bg-gray-700">
            <div className="text-gray-400 bg-gray-700 px-2">
              <div className="max-w-md mx-auto text-gray-400 bg-gray-700 rounded-lg overflow-hidden md:max-w-lg">
                <div className="md:flex">
                  <div className="w-full px-4 py-6 text-center">
                    <div className="mb-2">
                      <span className="text-sm">Question Title</span>
                      {errors.title && touched.title && (
                        <span className="text-sm text-red-400">
                          {' '}
                          {errors.title}
                        </span>
                      )}
                      <input
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                        type="text"
                        className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="mb-2">
                      <span className="text-sm">Question content</span>
                      {errors.content && touched.content && (
                        <span className="text-sm text-red-400">
                          {' '}
                          {errors.content}
                        </span>
                      )}
                      <textarea
                        type="text"
                        name="content"
                        id="content"
                        value={values.content}
                        onChange={handleChange}
                        className="h-24 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"
                      ></textarea>
                    </div>

                    <div className="mb-2">
                      <span>Type</span>
                      {errors.questionType && touched.questionType && (
                        <span className="text-sm text-red-400">
                          {' '}
                          {errors.questionType}
                        </span>
                      )}
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="type"
                            value="MCQ"
                            onChange={(e) => {
                              handleChange(e);
                              setQuestionType(e.target.value);
                            }}
                          />
                          <span className="ml-2">Multiple choice</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            className="form-radio"
                            name="type"
                            value="Input"
                            onChange={(e) => {
                              handleChange(e);
                              setQuestionType(e.target.value);
                            }}
                          />
                          <span className="ml-2">Input</span>
                        </label>
                      </div>
                    </div>
                    {questionType === 'MCQ' && (
                      <div className="mb-2">
                        <TagsInput
                          value={choices}
                          onChange={setChoices}
                          onlyUnique
                        />
                      </div>
                    )}
                    <div className="mb-2">
                      <span className="text-sm">Expected Answer</span>
                      {errors.expectedAnswer && touched.expectedAnswer && (
                        <span className="text-sm text-red-400">
                          {' '}
                          {errors.expectedAnswer}
                        </span>
                      )}
                      <input
                        type="text"
                        id="expectedAnswer"
                        name="expectedAnswer"
                        value={values.expectedAnswer}
                        onChange={handleChange}
                        className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="pink" onClick={handleSubmit}>
              Save changes
            </Button>
            <Button color="gray" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalDialog>
    </Modal>
  );
};
QuestionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired,
  editQuestion: PropTypes.func.isRequired,
  question: PropTypes.object,
};
QuestionModal.defaultProps = {
  question: {},
};
export default QuestionModal;
