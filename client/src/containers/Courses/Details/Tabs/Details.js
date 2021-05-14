import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../slice';

const Details = ({ course }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const joinCourse = () => {
    dispatch(actions.joinCourse({ slug: course.slug }));
  };
  return (
    <div className="container mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-white text-lg">
                {course?.teacher?.name}
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
              <p className="text-base text-gray-400">{course?.title}</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">{course.description}</p>
            {user.role === 'student' ? (
              course.students &&
              course.students
                .map((item) => item.user)
                .findIndex(
                  (user) => user.id.toString() === user.id.toString()
                ) ? (
                <div className="text-purple-400 inline-flex items-center px-2 py-8">
                  <button
                    type="button"
                    className="ml-1 h-10 w-32 bg-green-600 rounded text-white hover:bg-green-800"
                    onClick={joinCourse}
                  >
                    Join
                  </button>
                </div>
              ) : (
                <div className="text-green-400 inline-flex items-center px-2 py-8">
                  You have already Joined
                </div>
              )
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    teacher: PropTypes.shape({
      name: PropTypes.string,
    }),
    students: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.arrayOf(
          PropTypes.shape({
            _id: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
};

export default Details;
