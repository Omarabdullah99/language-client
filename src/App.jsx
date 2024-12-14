import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Lessons from "./components/Home/Lessons";
import Tutorials from "./components/Home/Tutorials";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/AuthSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedUser from "./protectedRoute/ProtectedUser";
const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/login", "/register"];
  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(
    location.pathname
  );

  //!register/login korar por refresh korle oita chole jay. ai problem solve korar jonno
  const user = JSON.parse(localStorage.getItem("blogprofile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  // console.log("app",user)

  return (
    <div className="w-[80%] m-auto">
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedUser>
              <Home />
            </ProtectedUser>
          }
        />
        <Route
          path="/lessons"
          element={
            <ProtectedUser>
              <Lessons />
            </ProtectedUser>
          }
        />
        <Route
          path="/tutorials"
          element={
            <ProtectedUser>
              <Tutorials />
            </ProtectedUser>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default App;
