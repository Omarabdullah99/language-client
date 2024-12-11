import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Lessons from "./components/Home/Lessons";
import Tutorials from "./components/Home/Tutorials";
const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/lessons" element={<Lessons />}/>
        <Route path="/tutorials" element={<Tutorials />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
