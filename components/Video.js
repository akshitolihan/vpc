import React from "react";
import Image from "next/dist/client/image";
import Link from "next/Link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Video = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="shadow-2xl shadow-top m-2 md:m-10  bg-white rounded-3xl p-6 text-white  scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl mt-[16px]">
          <a href={props.refer}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              className="m-auto rounded-md"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </a>
          <div className="flex justify-center">
            <button
              type="button"
              id={navbar.font2}
              className="text-center mr-6 no-underline text-white font-extrabold flex justify-center bg-[#2F4858] mt-4 w-auto h-auto rounded-t-[50px]  rounded-r-[50px] "
            >
              Latest By Akshit Kumar
              {/* {props.download} */}
            </button>
          </div>
          <h1
            id={navbar.font1}
            className="text-black text-xl text-justify font-bold pt-5 block"
          >
            {props.heading}
          </h1>
          <a href={props.watch} target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
          <button
            type="button" id={navbar.font}
            className="text-center mr-6 no-underline text-[#2F4858] font-extrabold flex justify-center bg-[#42e798] mt-4 w-auto h-auto rounded-t-[50px]  rounded-r-[50px] "
          >
            Watch for Free
          </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Video;
