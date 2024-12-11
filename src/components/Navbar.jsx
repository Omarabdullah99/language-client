import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import menuIcon from '../assets/menu_icon.svg'
import crossIcon from '../assets/cross_icon.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <Link to="/">
        <img
          className="w-12 h-auto md:w-20 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-4">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/lessons">
          <li className="py-4">Lessons</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/tutorials">
          <li className="py-4">Tutorials</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
           <Link >
           <button>
             Logout
           </button>
         </Link>
        ) : (
          <Link to={"/login"}>
            {""}
            <button className="bg-primary rounded-[47px] text-white text-[12px] md:text-[16px] font-bold p-[12px] md:p-[16px] flex justify-center items-center cursor-pointer">
              Create Account
            </button>
          </Link>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-5 block md:hidden"
          src={menuIcon}
          alt=""
        />
        {/* mobile menu start */}
        <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-20" src={logo} alt="" />
            <img
            className="w-7"
              onClick={() => setShowMenu(false)}
              src={crossIcon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
           <Link to='/' onClick={()=>setShowMenu(false)}><li>Home</li></Link> 
           <Link to='/lessons' onClick={()=>setShowMenu(false)}><li>Lessons</li></Link> 
           <Link to='/tutorials' onClick={()=>setShowMenu(false)}><li>Tutorials</li></Link> 
          </ul>
        </div>
        {/* mobile menu end */}
      </div>
    </div>
  );
};

export default Navbar;
