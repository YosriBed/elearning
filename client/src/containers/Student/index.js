import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoursesList from '../../components/Courses/List';
import { actions } from '../../slice';

const index = () => {
  const dispatch = useDispatch();
  const homepage = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(actions.getHomepage());
  }, []);

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            My courses
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Below is a list of all the courses you have subscribed to. Feel free
            to click on one to continue learning
          </p>
        </div>
        {homepage && homepage.studentCourses && (
          <CoursesList courses={homepage.studentCourses} />
        )}
      </div>
    </section>
  );
};

export default index;
