import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import avater from "../assets/upload_area.svg";
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import { signUp } from "../redux/features/AuthSlice";



const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
  } = useForm();

  const [docImg, setDocImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //!loding and error handle 
  const {loading,error}= useSelector((state)=>({...state.authentication}))
  const dispatch=useDispatch()
  const navigate= useNavigate()

 //!error handel 
  useEffect(()=>{
    error && toast.error(error)
  }, [error])

 

  const onSubmit = (data, e) => {
    e.preventDefault();
  
    if (!docImg) {
      alert("Please upload your picture before submitting.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", docImg);
  
    dispatch(signUp({ formValue: formData, navigate, toast }));
  
    console.log(data);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDocImg(file);
    setValue("docImg", file);
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center mb-[80px]">
        <div className="bg-white p-8 rounded-[20px] shadow-lg w-96 border border-[#D4D4D4]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please sign up to book an appointment
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex items-center gap-3">
              <label htmlFor="doc-img">
                <img
                  className="w-16 bg-gray-100 rounded-full cursor-pointer"
                  src={docImg ? URL.createObjectURL(docImg) : avater}
                  alt=""
                />
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                id="doc-img"
                hidden
              />
              <p>Upload picture</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border border-gray-500 sm:text-sm py-2 px-2"
              />
              {errors?.name && (
                <p className="text-red-500">{errors?.name?.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
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

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
