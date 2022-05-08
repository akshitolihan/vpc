import React from "react";
import Image from "next/dist/client/image";
import navbar from "../styles/Navbar.module.css";

const Blog = (props) => {
  return (
    <>
      <section className="flex justify-center flex-wrap md:flex-nowrap">
      <section className="w-auto flex justify-center">
        <section className="shadow-lg shadow-top m- md:m-12 lg:m-12  bg-[#] rounded-3xl text-black scale-95 transition duration-700 ease-in-out hover:shadow-3xl lg:w-[1000px]">
  
          <h1 id={navbar.font} className="flex justify-center text-xl font-bold text-[#2F4858] p-4">
          {props.date}
          </h1>
          <h1 className="flex justify-center text-4xl font-bold p-4">
            {" "}
            {props.heading}{" "}
          </h1>
          <div className="flex justify-center p-4">
            <Image
              className="rounded-2xl flex justify-center mr-4"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </div> 
          <button
                id={navbar.font2}
                type="button"
                className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
              `Akshit Kumar Here
              </button>
              <button
                id={navbar.font2}
                type="button"
                className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                Let&#39;s Begin
              </button>
          {/* <h1
            id={navbar.font}
            className="flex justify-center text-3xl font-semibold text-[#00C853] p-4"
          >
            {" "}
            Akshit Kumar Here{" "}
          </h1> */}
          {/* <h1
            id={navbar.font}
            className="flex justify-center text-3xl font-semibold text-[#00C853] "
          >
            Let's Begin
          </h1 > */}
          <div className="">
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para1}
          </p>
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para2}
          </p>
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para3}
          </p>
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para4}
          </p>
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para5}
          </p>
          <p
            id={navbar.font3}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para6}
          </p>
          <p
            id={navbar.font}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para7}
          </p>
          <p
            id={navbar.font}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para8}

          </p>
          <p
            id={navbar.font}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para9}
          </p>
          <p
            id={navbar.font}
            className="flex justify-center text-justify text-xl font-normal text-[#191919] p-10 "
          >
            {props.para10}
          </p>
          </div>
        </section>
        </section>
      </section>
    </>
  );
};

export default Blog;
