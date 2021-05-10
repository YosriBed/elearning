import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slice';

const index = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    console.log(courses);
    useEffect(()=>{
        dispatch(actions.getCourses());
    },[]);

    return (
        <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">My courses</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Below is a list of all the courses you have subscribed to. Feel free to click on one to continue learning</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        </div>
      </section>
    );
};

export default index;