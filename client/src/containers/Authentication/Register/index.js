import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../../slice';
import { registerSchema } from './validation';

const index = ({ role }) => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      delete values.confirmPassword;
      dispatch(actions.register({ body: { ...values, role } }));
    },
  });
  console.log(touched);
  console.log(errors);

  return (
    <div className="bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          {errors.name && touched.name && (
            <span className="text-sm text-red-400"> {errors.name}</span>
          )}
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          {errors.email && touched.email && (
            <span className="text-sm text-red-400"> {errors.email}</span>
          )}
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Password
          </label>
          {errors.password && touched.password && (
            <span className="text-sm text-red-400"> {errors.password}</span>
          )}
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            name="password"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Confirm your password
          </label>
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="text-sm text-red-400">
              {' '}
              {errors.confirmPassword}
            </span>
          )}
          <input
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={values.confirmPassword}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >
          Start{' '}
          {role === 'teacher'
            ? 'Teaching'
            : role === 'student'
            ? 'Learning'
            : role === 'admin'
            ? 'Managing'
            : 'Now'}
        </button>
      </form>
    </div>
  );
};

export default index;
