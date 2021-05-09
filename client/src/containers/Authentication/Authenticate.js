import React from 'react';
import Login from './Login';
import Register from './Register';

const index = ({
  match: {params: {role}}
}) => (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">Login</h2>
              <p className="leading-relaxed text-base">Login to your existing account and resume your learning with E-learning.</p>
              <Login role={role}/>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">Register</h2>
              <p className="leading-relaxed text-base">Register your new account now and start learning with E-learning. </p>
              <Register role={role}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );

export default index;
