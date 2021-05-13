import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import QuestionModal from './QuestionModal';
import QuestionsList from './QuestionsList';
import { CourseSchema } from './validation';
import { actions } from '../../../slice';

const index = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState();
  const [modal, setModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, selectQuestion] = useState(null);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      title: '',
      description: '',
      visibility: '',
    },
    validationSchema: CourseSchema,
    onSubmit: (values) => {
      values.questions = questions;
      values.resources = files;
      dispatch(actions.createCourse({ body: values }));
    },
  });

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };
  const editQuestion = (question) => {
    questions[questions.findIndex((q) => q.id === question.id)] = question;
  };
  const removeQuestion = (question) => {
    questions.splice(
      questions.findIndex((q) => q.id === question.id),
      1
    );
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-400 bg-gray-900 px-2">
      <div className="max-w-md mx-auto text-gray-400 bg-gray-900 rounded-lg overflow-hidden md:max-w-lg">
        <h1 className="py-4 sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-white">
          Create a new course
        </h1>
        <div className="md:flex">
          <div className="w-full px-4 py-6 text-center">
            <div className="mb-2">
              <span className="text-sm">Course Title</span>
              {errors.title && touched.title && (
                <span className="text-sm text-red-400"> {errors.title}</span>
              )}
              <input
                id="title"
                onChange={handleChange}
                value={values.title}
                type="text"
                className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-2">
              <span className="text-sm">Description</span>
              {errors.description && touched.description && (
                <span className="text-sm text-red-400">
                  {' '}
                  {errors.description}
                </span>
              )}
              <textarea
                id="description"
                onChange={handleChange}
                value={values.description}
                type="text"
                className="h-48 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"
              ></textarea>
            </div>

            <div className="mb-2">
              <span>Resources</span>
              <div className="relative border-dotted h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <i className="fa fa-folder-open fa-3x text-blue-700"></i>
                    <span className="block text-gray-400 font-normal">
                      Attach you files here
                    </span>
                  </div>
                </div>
                <input
                  type="file"
                  className="h-full w-full opacity-0"
                  name="resources"
                  id="resources"
                  onChange={(e) => {
                    setFiles(e.target.files);
                  }}
                  multiple
                />
              </div>
            </div>

            <div className="mb-2">
              <span>Questions</span>
              <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                  <div className="mb-4">
                    <div className="flex  items-center justify-center">
                      <button
                        type="button"
                        className="ml-1 h-10 w-32 bg-green-600 rounded text-white hover:bg-green-800"
                        onClick={() => {
                          toggleModal();
                          selectQuestion();
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <QuestionsList
                    questions={questions}
                    selectQuestion={selectQuestion}
                    toggle={toggleModal}
                    removeQuestion={removeQuestion}
                  />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <span>Visibility</span>
              {errors.visibility && touched.visibility && (
                <span className="text-sm text-red-400">
                  {' '}
                  {errors.visibility}
                </span>
              )}
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="visibility"
                    value="Private"
                    onChange={handleChange}
                  />
                  <span className="ml-2">Private</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="visibility"
                    value="Public"
                    onChange={handleChange}
                  />
                  <span className="ml-2">Public</span>
                </label>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-400">
                You will be able to edit this information later
              </span>
            </div>
            <div className="mt-3 text-right">
              <Link to="/courses">Cancel</Link>
              <button
                type="submit"
                className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <QuestionModal
        isOpen={modal}
        toggle={toggleModal}
        addQuestion={addQuestion}
        editQuestion={editQuestion}
        selectQuestion={selectQuestion}
        question={selectedQuestion ?? null}
      />
    </form>
  );
};

export default index;
