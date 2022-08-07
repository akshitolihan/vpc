import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Video = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="shadow-2xl shadow-top m-2 md:m-10  bg-white rounded-3xl p-6 text-white hover:shadow-3xl scale-100 hover:scale-110 ease-in-out duration-[2000ms] mt-[16px]">
          <a
            href={props.refer}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              alt="image"
              className="m-auto rounded-md"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </a>
          <h1
            id={navbar.josefin}
            className="text-[#000000] text-xl text-justify font-extrabold pt-5 block"
            // style={{ fontFamily: "Georgia serif" }}
          >
            {props.heading}
          </h1>
          <a
            href={props.watch}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <button
              type="button"
              id={navbar.josefin}
              className="text-center mr-6 no-underline text-[#fff] font-extrabold flex justify-center bg-[#448AFF] mt-4 w-auto h-auto px-1  rounded-t-[50px]  rounded-r-[50px] "
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
