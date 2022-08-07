import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Course = (props) => {
  return (
    <>
      <div className="flex justify-center max-w-[460px] ">
        <div
          style={{ fontFamily: "Georgia serif" }}
          className="shadow-2xl shadow-top m-2 md:m- bg-white rounded-3xl p-2 text-white  scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl mt-[16px] "
        >
          <Link href={props.refer} scroll={false} passHref>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="image"
                className="rounded-xl"
                src={props.img}
                height={props.height}
                width={props.width}
              />

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
                className="text-center mr-6 no-underline text-[#2F4858] font-extrabold justify-center bg-[#42e798] mt-4 w-auto h-8 rounded-t-[50px]  rounded-r-[50px] align-bottom "
              ></button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
