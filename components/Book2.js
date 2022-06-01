import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Book2 = (props) => {
  return (
    <>
      {/* <section classNameName="sm:flex justify-center mt-4 shadow-lg rounded-lg sm:max-w-[600px] ">
        <section classNameName="mr-4 flex flex-col w-4/12 justify-center md:w-auto">
          <Image
            alt="image"
            classNameName="rounded-xl flex justify-center"
            src={props.img}
            height={props.height}
            width={props.width}
          />
        </section>
        <section classNameName="ml-4 max-w-[300px] my-10">
          <h1
            id={navbar.font1}
            classNameName="text-black text-lg text-justify font-bold mt-4 relative"
          >
            {props.heading}
          </h1>
          <p
            id={navbar.font1}
            classNameName="text-[#2F4858] text-justify text-md font-normal mt-4 hidden sm:visible"
          >
            {props.para}
          </p>
          <div classNameName="flex justify-center mt-4">
            <Link href={props.refer}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                classNameName="cursor-pointer"
              >
                <button
                  type="button"
                  id={navbar.font}
                  classNameName="text-[#fff] font-extrabold flex justify-center bg-[#1DE9B6] w-auto h-auto px-2 py-1 rounded-t-[50px] rounded-r-[50px]"
                >
                  {props.download}
                </button>
              </a>
            </Link>
          </div>
        </section>
      </section> */}
      <div className="flex justif">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p className="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>
    </>
  );
};

export default Book2;
