import React from "react";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-footer gap-10  mb-5">
        {/* first */}
        <div>
          <img
            className="w-20 cursor-pointer mb-[40px]"
            src={logo}
            alt=""
          />
          <p className=" text-[#4B5563] font-[400]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* second */}
        <div>
          <h1 className="text-[22px] text-[#4B5563] font-[600] mb-[40px]">
            COMPANY
          </h1>
          <ul>
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Privacy policy</li>
          </ul>
        </div>
        {/* third */}
        <div>
          <h1 className="text-[22px] text-[#4B5563] font-[600] mb-[40px]">
            GET IN TOUCH
          </h1>
          <p className="text-[#4B5563] mb-2">+880 1624108866</p>
          <p>omarabdullah917303@gmail.com</p>
        </div>
      </div>

      <p className="p-5 text-center border-t-2 border-t-[#BDBDBD]-300">Copyright ©OmarAbdullah - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
