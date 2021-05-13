import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CoursesList = ({ courses }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {courses.length < 1 ? (
        <div className="flex flex-wrap w-full py-6 mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-small mb-2 text-gray">
            You haven&apos;t joined any course :(
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Consider joining a course
          </p>
        </div>
      ) : (
        courses.map((course) => (
          <Link
            to={`/courses/details/${course.slug}`}
            key={course.slug}
            className="xl:w-1/3 md:w-1/2 p-4"
          >
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                {course.title}
              </h2>
              <p className="leading-relaxed text-base">{course.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
CoursesList.defaultProps = {
  courses: [],
};
export default CoursesList;
