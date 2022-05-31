import React from "react";
import Image from "next/dist/client/image";
import navbar from "../styles/Navbar.module.css";

const Carousel = (props) => {
  return (
    <>
      <section className="inline-flex ">
        <section className="flex justify-center items-center  ">
          <div className="pt-2 justify-center animate-waving-hand hidden md:block md:w-full rounded-2xl -skew-x-6 shadow-xl">
            <Image
              alt="home"
              className="origin-top-left hidden lg:block lg:w-1/2 rounded-lg justify-center "
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </div>
          <div>
            <button
              id={navbar.font}
              type="button"
              className="text-4xl no-underline font-extrabold justify-center bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF]  text-transparent bg-clip-text hover:bg-gradient-to-l   mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block "
            >
              {props.heading}
            </button>

            <p className="m-auto p-10 w-auto md:w-auto lg:w-auto justify-center text-justify">
              {props.para}
            </p>
            <div className="grid md:grid-cols-3 justify-center">
              <button
                id={navbar.font}
                type="button"
                className="text-xl no-underline text-[#ffffff] font-extrabold justify-center bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l py-1 px-2 mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                {props.one}
              </button>
              <button
                id={navbar.font}
                type="button"
                className="text-xl no-underline text-[#ffffff] font-extrabold justify-center bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l py-1 px-2 mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
              >
                {props.two}
              </button>
              <button
                id={navbar.font}
                type="button"
                className="text-xl no-underline text-[#ffffff] font-extrabold justify-center bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l py-1 px-2 mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
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
