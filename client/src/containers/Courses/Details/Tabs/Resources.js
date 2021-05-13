import React from 'react';
import PropTypes from 'prop-types';
import { FileIcon, defaultStyles } from 'react-file-icon';

const Resources = ({ course }) => {
  return (
    <div className="container px-5 py-6 mx-auto">
      <div className="flex flex-wrap -m-4 ">
        {course.resources.map((resource) => (
          <a
            key={resource._id}
            target="_blank"
            href={`${
              process.env.REACT_APP_API_SERVER || 'http://localhost:8080'
            }/api/courses/resources/${resource._id}`}
            className="lg:w-1/4 md:w-1/2 md:items-center p-4 w-full"
            rel="noreferrer"
          >
            <div className="block relative h-48 rounded overflow-hidden ">
              <FileIcon
                extension={resource.mimetype.split('/').pop()}
                {...defaultStyles.docx}
              />
            </div>
            <div className="mt-4">
              <h2 className="text-white title-font text-lg font-medium">
                {resource.filename.substring(14)}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
Resources.propTypes = {
  course: PropTypes.shape({
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        filename: PropTypes.string,
        mimetype: PropTypes.string,
      })
    ),
  }).isRequired,
};
export default Resources;
