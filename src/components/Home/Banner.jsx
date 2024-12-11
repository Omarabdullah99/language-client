import React from "react";
import banner from "../../assets/banner.png";
import group from "../../assets/group_profiles.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 bg-primary p-10 rounded banner mb-[80px]">
      {/* Left Content */}
      <div className="content w-full lg:w-[60%]">
        <h1 className="text-[20px] md:text-[30px] 2xl:text-[50px] leading-[40px]  2xl:leading-[80px] text-white font-bold">
          Learn Japanese <br /> with expert instructors
        </h1>
        <div className="my-5 flex flex-col xl:flex-row gap-3 items-start xl:items-center">
          <img className="w-[130px]" src={group} alt="Profiles" />
          <p className="text-white ">
            Explore our carefully designed courses and start your journey,{" "}
            <br />
            to mastering Japanese effortlessly.
          </p>
        </div>
    
      </div>

      {/* Right Image */}
      <div className=" w-full lg:w-[40%] relative bottom-[-40px]">
        <img className=" w-100 h-auto " src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
