import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='min-h-screen'>
    <div className="flex items-center justify-center mb-[80px]">
      <div className="bg-white p-8 rounded-[20px] shadow-lg w-96 border  border-[#D4D4D4]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please sign up to book appointment
        </p>
        <form>
         
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border  border-gray-500 sm:text-sm py-2 px-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border  border-gray-500 sm:text-sm py-2 px-2"
            />
          </div>
        
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create account
            </button>
          </div>
        </form>
        {/* Login Link */}
        <p className="mt-4 text-sm text-gray-600 text-center">
        Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
