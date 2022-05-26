import React, { useState } from "react";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FaWineBottle, FaApple, FaAngleUp } from "react-icons/fa";

const Me = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Head>
    <title>Me ~ Akshit Kumar</title>
  </Head>
      <section className="md:flex md:justify-center mt-20">
        <section className="hidden md:flex justify-center">
        <section className="pr-20">
          <h1 className=" text-center text-3xl font-bold mt-8 text-blue-500">
            Me
          </h1>
          <h1 className="text-center text-3xl font-bold mt-2">Akshit Kumar</h1>
          <h1 className="text-center text-3xl font-normal mt-12">I am</h1>

          <button
            id={navbar.font2}
            type="button"
            className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
          >
            Web Developer
          </button>
          <button
            id={navbar.font2}
            type="button"
            className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
          >
            Web Designer
          </button>
          <button
            id={navbar.font2}
            type="button"
            className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
          >
            Content Writer
          </button>
          <button
            id={navbar.font2}
            type="button"
            className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
          >
            Villagepur Owner
          </button>
        </section>
        </section>
        <section className="hidden md:flex justify-center ml-20 rounded-2xl -skew-x-6 shadow-xl">
         
          <Image
            src="/A8.jpg"
            width={360 + "px"}
            height={400 + "px"}
            alt="Akshit Kumar"
            className="fill-white cursor-pointer rounded-2xl hover:shadow-aksh"
          />
        
        </section>
      </section>
      <section className="grid grid-cols-1">
      <section className="flex justify-center px-20 md:hidden">
          <Image
            src="/A8.jpg"
            width={360 + "px"}
            height={400 + "px"}
            alt="Akshit Kumar"
            className="fill-white cursor-pointer rounded-full"
          />
        </section>
      <section className="px-20 md:hidden">
        <h1 className=" text-center text-3xl font-bold mt-8 text-blue-500">
          Me
        </h1>
        <h1 className="text-center text-3xl font-bold mt-2">Akshit Kumar</h1>
        <h1 className="text-center text-3xl font-normal mt-12">I am</h1>

        <button
          id={navbar.font2}
          type="button"
          className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
        >
          Web Developer
        </button>
        <button
          id={navbar.font2}
          type="button"
          className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
        >
          Web Designer
        </button>
        <button
          id={navbar.font2}
          type="button"
          className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
        >
          Content Writer
        </button>
        <button
          id={navbar.font2}
          type="button"
          className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#6483DE] to-[#BA68C8] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
        >
          Villagepur Owner
        </button>
      </section>
      </section>
    </>
  );
};

export default Me;

{
  /* <button
        id={navbar.font2}
        type="button"
        className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#448AFF] to-[#FF6E40] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#7485FF] to-[#E96590] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className="shadow-lg mt-8 px-2 bg-gradient-to-r from-[#7485FF] to-[#FFC107] hover:bg-gradient-to-l  text-3xl no-underline text-[#ffffff] font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button> */
}
