import React from "react";
import navbar from "../styles/Navbar.module.css";

const Card = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center w-full max-w-[400px] mt-4">
          <div className="m-2 md:m-10  bg-white rounded-2xl p-6 text-white shadow-lg scale-95 hover:scale-100 transition duration-700 ease-in-out mt-4 hover:shadow-2xl">
            <h2
              id={navbar.font}
              className="text-[#2F4858] text-2xl text-justify font-bold pb-6"
            >
              {props.heading}
            </h2>
            <p
              id={navbar.font}
              className="text-black text-xl text-justify pb-6"
            >
              {props.para}
            </p>
            <a
              id={navbar.font}
              href={props.refer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center mr-6 no-underline text-[#2F4858] font-extrabold justify-center bg-[#1DE9B6] mt-4 w-auto h-auto px-2 rounded-t-[50px]  rounded-r-[50px] align-bottom"
            >
              {props.name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
