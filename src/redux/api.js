import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("blogprofile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("blogprofile")).token}`;
  }
  return req;
});

//register and login logic start
export const signUp= (formValue) => API.post("/api/userFinal/signup", formValue) 
export const signIn= (formValue) => API.post("/api/userFinal/login", formValue) 

//register and login logic end