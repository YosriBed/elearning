import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Details, Questions, Resources, Students } from './Tabs';
import { actions } from '../../../slice';
const index = ({
  match: {
    params: { slug },
  },
}) => {
  const dispatch = useDispatch();
  const [activeTab, changeTab] = useState(1);
  const course = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(actions.getCourse({ slug }));
  }, []);
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <nav className="flex flex-col sm:flex-row flex flex-row space-x-20">
            <button
              className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                activeTab === 1 &&
                'text-blue-500 border-b-2 font-medium border-blue-500'
              }`}
              onClick={() => {
                changeTab(1);
              }}
            >
              Details
            </button>
            <button
              className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                activeTab === 2 &&
                'text-blue-500 border-b-2 font-medium border-blue-500'
              }`}
              onClick={() => {
                changeTab(2);
              }}
            >
              Questions
            </button>
            <button
              className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                activeTab === 3 &&
                'text-blue-500 border-b-2 font-medium border-blue-500'
              }`}
              onClick={() => {
                changeTab(3);
              }}
            >
              Resources
            </button>
            <button
              className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                activeTab === 4 &&
                'text-blue-500 border-b-2 font-medium border-blue-500'
              }`}
              onClick={() => {
                changeTab(4);
              }}
            >
              Students
            </button>
          </nav>
        </div>
      </div>
      {activeTab === 1 ? (
        <Details course={course} />
      ) : activeTab === 2 ? (
        <Questions course={course} />
      ) : activeTab === 3 ? (
        <Resources course={course} />
      ) : (
        <Students course={course} />
      )}
    </section>
  );
};

export default index;
