import React from "react";
import Image from "next/dist/client/image";
import navbar from "../styles/Navbar.module.css";

const Carousel = (props) => {
  return (
    <>
      <section className="flex justify-evenly shadow-lg ">
        <section className="md:m-20 md:my-8 sm:m-10 sm:my-6 m-4 my-3">
          <h1
            id={navbar.uchen}
            type="button"
            className="text-4xl md:text-5xl font-extrabold text-[#448AFF] leading-[60px] my-10"
          >
            {props.heading}
          </h1>

          <p
            id={navbar.uchen}
            className="text-justify my-6 max-w-4xl w-auto md:w-80 text-xl font-[600] tracking-wider"
          >
            {props.para}
          </p>

          <span
            id={navbar.uchen}
            type="button"
            className="text-2xl text-[#ffffff] bg-[#448AFF] px-2 rounded-t-[50px] rounded-r-[50px] my-8 font-bold"
          >
            {props.one}
          </span>
        </section>
        <div className="hidden md:flex justify-center">
          <div className=" md:flex md:justify-center md:w-full">
            <Image
              alt="home"
              className="block"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </div></div>
      </section>

    </>
  );
};

export default Carousel;
