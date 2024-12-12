import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/AuthSlice";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  //!loding and error handle
  const { loading, error } = useSelector((state) => ({
    ...state.authentication,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formValue = { email: data.email, password: data.password };
    console.log("formvalue", formValue); // এখানে ডাটা সঠিকভাবে আসবে
    dispatch(login({ formValue, navigate, toast }));
  };

  //!error handel
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center mb-[80px]">
        <div className="bg-white p-8 rounded-[20px] shadow-lg w-96 border border-[#D4D4D4]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Login
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please login to your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-500 sm:text-sm py-2 px-2"
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-md border border-gray-500 sm:text-sm py-2 px-2"
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          {/* Login Link */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
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
