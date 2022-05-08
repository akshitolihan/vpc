import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Quotes = (props) => {
  return (
    <>
      <div className="flex justify-center w-auto ">
        <div className="shadow-2xl w-full shadow-top bg-[#] rounded-3xl text-white scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl leading-relaxed m-2 md:m-10">
          <div>
            <p
              className="text-[#ffffff] bg-[#91A5FF] font-serif hover:bg-gradient-to-l text-justify rounded-t-2xl rounded-b-3xl text-xl font-normal pt-4 p-6" 
            >
             &#8220;{props.para}&#8221;
            </p>
          </div>
          <div className="flex justify-between bg-[#] rounded-xl p-6">
            <h1
              id={navbar.font1}
              className="text-black text-xl text-justify font-bold p-6"
            >
              {props.heading}
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                className="rounded-full justify-between mr-4"
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </a>
          </div>
          {/* <button
              type="button" id={navbar.font}
              className="text-center mr-6 no-underline text-[#2F4858] font-extrabold justify-center bg-[#42e798] mt-4 w-auto h-8 rounded-t-[50px]  rounded-r-[50px] align-bottom "
            >
              {props.download}
            </button> */}
        </div>
      </div>
      {/* <section className="inline-flex">
        <section className="flex justify-center items-center ">
          <div className="pt-4 justify-center hidden md:block md:w-full">
            <Image
              className="lg:block lg:w-1/2 rounded-full  justify-center"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </div>
          <div>
            <button
              id={navbar.font}
              type="button"
              className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block animate-translate"
            >
              {props.heading} 
            </button>

            <p className="m-auto p-10 w-auto md:w-auto lg:w-auto justify-center text-justify">
            {props.para}
              
            </p>
            <div className="grid md:grid-cols-3 justify-center">
              <button
                id={navbar.font2}
                type="button"
                className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#2F4858] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                {props.one}
              </button>
              <button
                id={navbar.font2}
                type="button"
                className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#2F4858] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                {props.two}
              </button>
              <button
                id={navbar.font2}
                type="button"
                className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#2F4858] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                {props.three}
              </button>
            </div>
          </div>
        </section>
      </section> */}
    </>
  );
};

export default Quotes;
