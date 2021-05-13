import React from 'react';
const ListCard = () => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
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
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waist co, subway tile poke
          farm.
        </p>
      </div>
    </div>
  );
};

export default ListCard;
