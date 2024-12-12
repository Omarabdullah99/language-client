import axios from 'axios'


const API= axios.create({baseURL:"http://localhost:4000"})

//*middleware handle backend and fontend
//token backedne patabo

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem("blogprofile");
    if (profile) {
      req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
    }
    return req;
  });


//register and login logic start
export const signUp= (formValue) => API.post("/api/userFinal/signup", formValue) 
export const signIn= (formValue) => API.post("/api/userFinal/login", formValue) 
//register and login logic end