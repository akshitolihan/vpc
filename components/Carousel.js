import React from "react";
import Image from "next/dist/client/image";
import navbar from "../styles/Navbar.module.css";

const Carousel = (props) => {
  return (
    <>
      <section className="inline-flex ">
        <section className="flex justify-center items-center  ">
          <div className="pt-4 justify-center hidden md:block md:w-full ">
            <Image
              className="origin-top-left animate-waving- hidden lg:block lg:w-1/2 rounded-lg rounded-r-xl  justify-center -rotate-3"
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
      </section>
    </>
  );
};

export default Carousel;
