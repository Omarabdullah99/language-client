import axios from 'axios'

// backend url latest working:https://blog-backend-luim.onrender.com
//backend url previous working:https://blog-server-last-test.vercel.app

const API= axios.create({baseURL:"http://localhost:4000"})

//*middleware handle backend and fontend
//token backedne patabo

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("blogprofile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("blogprofile")).token}`
    }
    return req
})


//register and login logic start
export const signUp= (formValue) => API.post("/api/userFinal/signup", formValue) 
export const signIn= (formValue) => API.post("/api/userFinal/signin", formValue) 
//register and login logic end