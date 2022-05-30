import React from "react";
import Head from "next/head";
import { FaApple, BiHome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from "next/dist/client/image";
import Code from "../components/Code";
import Books from "../components/Books";
import Video from "../components/Video";
import Heading from "../components/Heading";
import Quotes from "../components/Quotes";
import navbar from "../styles/Navbar.module.css";
import Book1 from "../components/Book1";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Me = () => {
  return (
    <>
      <Head>
        <title>Me ~ Akshit Kumar</title>
      </Head>
      <article className="bg-gradient-to-r from-[#7485FF] to-[#FFC107] hover:bg-gradient-to-l">
        <section className="md:flex md:justify-center pt-20">
          <section className="hidden md:flex justify-center">
            <section className="pr-20">
              <h1
                id={navbar.font2}
                className=" text-center text-3xl font-bold mt-8 text-white"
              >
                Me
              </h1>
              <h1
                id={navbar.font2}
                className="text-center text-3xl font-bold mt-2"
              >
                Akshit Kumar
              </h1>
              <h1
                id={navbar.font2}
                className="text-center text-3xl mt-12 font-extrabold text-white"
              >
                I am a
              </h1>
              <div className="grid grid-cols-2">
                <button
                  id={navbar.font2}
                  type="button"
                  className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
                >
                  Web Developer
                </button>
                <button
                  id={navbar.font2}
                  type="button"
                  className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
                >
                  Web Designer
                </button>
                <button
                  id={navbar.font2}
                  type="button"
                  className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
                >
                  Content Writer
                </button>
                <button
                  id={navbar.font2}
                  type="button"
                  className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
                >
                  Villagepur Owner
                </button>
              </div>
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
          <section className="flex justify-center px-20 md:hidden  ">
            <Image
              src="/A8.jpg"
              width={180 + "px"}
              height={190 + "px"}
              alt="Akshit Kumar"
              className="fill-white cursor-pointer -skew-x-3 rounded-full"
            />
          </section>
          <section className="px-20 md:hidden">
            <h1
              id={navbar.font2}
              className=" text-center text-3xl font-bold mt-8 text-white"
            >
              Me
            </h1>
            <h1
              id={navbar.font2}
              className="text-center text-3xl font-bold mt-2"
            >
              Akshit Kumar
            </h1>
            <h1
              id={navbar.font2}
              className="text-center text-3xl font-extrabold mt-12 text-white "
            >
              I am a
            </h1>

            <button
              id={navbar.font2}
              type="button"
              className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
            >
              Web Developer
            </button>
            <button
              id={navbar.font2}
              type="button"
              className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
            >
              Web Designer
            </button>
            <button
              id={navbar.font2}
              type="button"
              className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
            >
              Content Writer
            </button>
            <button
              id={navbar.font2}
              type="button"
              className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
            >
              Villagepur Owner
            </button>
          </section>
        </section>
        <h1
          id={navbar.font2}
          className="text-center no-underline text-white font-bold flex justify-center mt-20 w-auto h-auto text-3xl rounded-t-[50px]  rounded-r-[50px] cursor-text"
        >
          My Social Media
        </h1>
        <div className="flex justify-center">
          <div className="shadow-md m-2 md:m-10  bg-white rounded-2xl p-6 text-black  scale-95 hover:scale-100 transition duration-700 ease-in-out mt-4 hover:shadow-lg w-auto">
            <div className="text-black grid grid-cols-2 md:flex">
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://www.linkedin.com/in/akshitvillager/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://twitter.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://www.instagram.com/akshitvillager/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://github.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="m-8 pl-0 text-xl text-center"
                href="https://www.facebook.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Me;

{
  /* <button
        id={navbar.font2}
        type="button"
        className=" mt-8 px-2 bg-gradient-to-r from-[#448AFF] to-[#FF6E40] hover:bg-gradient-to-l  text-3xl no-underline text-white font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className=" mt-8 px-2 bg-gradient-to-r from-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l  text-3xl no-underline text-white font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className=" mt-8 px-2 bg-gradient-to-r from-[#7485FF] to-[#E96590] hover:bg-gradient-to-l  text-3xl no-underline text-white font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button>
      <button
        id={navbar.font2}
        type="button"
        className=" mt-8 px-2 bg-gradient-to-r from-[#7485FF] to-[#FFC107] hover:bg-gradient-to-l  text-3xl no-underline text-white font-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
      >
        Akshit Kumar
      </button> */
}
<button
  id={navbar.font2}
  type="button"
  className=" mt-8 px-2 bg-white  text-3xl no-underline text-whitet-extrabold justify-center w-auto rounded-lg scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl m-auto block"
>
  Web Developer
</button>;
