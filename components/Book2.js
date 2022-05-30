import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Book2 = (props) => {
  return (
    <>
      <section className="sm:flex justify-center mt-4 shadow-lg rounded-lg sm:max-w-[600px] ">
        <section className="mr-4 flex justify-center w-auto">
          <Image
            alt="image"
            className="rounded-xl"
            src={props.img}
            height={props.height}
            width={props.width}
          />
        </section>
        <section className="ml-4 max-w-[300px] my-10">
          <h1
            id={navbar.font1}
            className="text-black text-lg text-justify font-bold mt-4 relative"
          >
            {props.heading}
          </h1>
          <p
            id={navbar.font1}
            className="text-[#2F4858] text-justify text-md font-normal mt-4 hidden sm:visible"
          >
            {props.para}
          </p>
          <div className="flex justify-center mt-4">
            <Link href={props.refer}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                  <button
                  type="button"
                  id={navbar.font2}
                  className="text-[#fff] font-extrabold flex justify-center bg-[#1DE9B6] w-auto h-auto px-2 py-1 rounded-t-[50px] rounded-r-[50px]"
                >
                  {props.download}
                </button>
              </a>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Book2;
