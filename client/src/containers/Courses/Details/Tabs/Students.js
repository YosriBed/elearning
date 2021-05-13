import React from 'react';
import PropTypes from 'prop-types';

const Students = ({ course }) => {
  return (
    <div className="container px-5 py-2 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Students registered
        </h1>
      </div>
      <div className="flex flex-wrap -m-2">
        {course.students
          .map((item) => item.user)
          .map((student) => (
            <div key={student._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {student.name}
                  </h2>
                  <p className="text-gray-600">Product Manager</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Students.propTypes = {
  course: PropTypes.shape({
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
export default Students;
