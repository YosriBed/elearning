import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../slice';
import ListCard from '../../../components/Courses/List';

const index = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(actions.getCourses());
  }, []);

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Courses
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Below is a list of all the courses you have subscribed to. Feel free
            to click on one to continue learning
          </p>
          {user && user.role === 'teacher' && (
            <Link
              to="/courses/new"
              className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
            >
              New Course
            </Link>
          )}
        </div>
        <ListCard courses={courses} />
      </div>
    </section>
  );
};

export default index;
