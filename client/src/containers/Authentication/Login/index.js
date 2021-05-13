import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../../slice';

const index = ({ role }) => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(actions.login({ body: { ...values, role } }));
    },
  });

  return (
    <div className="bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            wtx-context="D26D5D5C-EDD1-440A-B3C1-FC18617B439F"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Password
          </label>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="password"
            name="password"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            wtx-context="D26D5D5C-EDD1-440A-B3C1-FC18617B439F"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default index;
