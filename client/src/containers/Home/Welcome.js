import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
              <Link to="/auth/student">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/820x340"
            />
            </Link>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-white font-medium title-font mb-2">
                Student
              </h2>
              <p className="leading-relaxed">
                Continue as a Student
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Link to="/auth/teacher">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x460"
                />
                </Link>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Teacher
                  </h2>
                  <p className="leading-relaxed">
                    Continue as a teacher
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Link to="/auth/admin">

                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x420"
                />
                  </Link>

                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Administrator
                  </h2>
                  <p className="leading-relaxed">
                    Continue as Administrator
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );

export default Homepage;
