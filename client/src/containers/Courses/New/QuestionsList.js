import React from 'react';
import PropTypes from 'prop-types';

const QuestionsList = ({
  questions,
  selectQuestion,
  toggle,
  removeQuestion,
}) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div
          key={`${question.title}-${index}`}
          className="flex mb-4 items-center"
        >
          <p>{`Question ${index + 1}`}</p>
          <button
            type="button"
            onClick={() => {
              selectQuestion(question);
              toggle();
            }}
            className="p-2 ml-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          >
            Edit
          </button>
          <button
            onClick={removeQuestion}
            className="p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})),
  selectQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
QuestionsList.defaultProps = {
  questions: [],
};
export default QuestionsList;
