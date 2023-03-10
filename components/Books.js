import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Books = (props) => {
  return (
    <>
      <div className="flex justify-center max-w-[460px] ">
        <div className="shadow-2xl shadow-top m-2 md:m-10 bg-white rounded-3xl p-6 text-white  scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl mt-[16px] ">
          <Link href={props.refer1} scroll={false}>
            <a className="cursor-pointer">
              <Image
                alt="image"
                className="rounded-xl"
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </a>
          </Link>

          <h1
            id={1}
            className="text-black text-xl text-justify font-bold pt-5 relative "
          >
            {props.heading}
          </h1>
          <p
            id={1}
            className="text-[#2F4858] text-justify text-lg font-normal pt-4"
          >
            {props.para}
          </p>

          <button
            type="button"
            id={navbar.josefin}
            className="text-center mr-6 no-underline text-[#fff] font-extrabold justify-center bg-[#1DE9B6] mt-4 w-auto h-auto px-1 rounded-t-[50px]  rounded-r-[50px] align-bottom "
          >
            <Link href={props.refer2}>{props.download}</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;
