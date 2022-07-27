import React from "react";
import navbar from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import Head from "next/head";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaHtml5,
  FaCss3,
  FaPython,
  FaLink,
} from "react-icons/fa";
import { SiCplusplus, SiAdobexd, SiAdobepremierepro } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FiLink } from "react-icons/fi";

const akki = () => {
  return (
    <>
      <Head>
        <title>I am Akshit Kumar !</title>
      </Head>
      {/* Big Screens  */}
      <section
        id={navbar.edu}
        className="break2:flex justify-between mx-10 mt-16 break1:flex break1:justify-around hidden"
      >
        {/* photoframe */}
        <section className="flex justify-start mt-4">
          <section className="bg-[#82B1FF] rounded-2xl px-4 pt-16 pb-12 break2:fixed ">
            <Image
              style={{
                backgroundImage: `url("background1.jpg")`,
                width: "80%",
                height: "50%",
              }}
              src="/Akshit_T.png"
              width={300 + "px"}
              height={350 + "px"}
              alt="Akshit Kumar"
              className="rounded-2xl m-0 p-0"
            />
            <h1
              id={navbar.edu}
              className="text-white font-bold text-3xl text-center tracking-wider pt-4"
            >
              @akshitvillager
            </h1>
            <div className="mt-4 ml-16 w-20 h-4 rounded-lg bg-white"></div>
          </section>
        </section>

        {/* textframe */}
        <section>
          <section className="my-8">
            <h1 className="font-bold text-3xl tracking-wide">Hi! I am, </h1>
            <h1 className="text-[#82B1FF] text-[80px] font-bold">
              Akshit Kumar
            </h1>
          </section>
          <section className="my-8">
            <h1 className="font-bold text-3xl tracking-wide my-4">I know, </h1>
            <li className="text-[#82B1FF]  text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Programming
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Web Development
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Graphic Design
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Content Writing
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Video Editing
            </li>
          </section>
          <section className="my-8">
            <h1 className="font-bold text-3xl tracking-wide my-6">
              Technologies Learned,
            </h1>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">C++</li>
              <span className="text-[60px]">
                <SiCplusplus />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Python</li>
              <span className="text-[60px]">
                <FaPython />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">HTML</li>
              <span className="text-[60px]">
                <FaHtml5 />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">CSS 3</li>
              <span className="text-[60px]">
                <FaCss3 />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">JavaScript</li>
              <span className="text-[60px]">
                <DiJavascript />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Premiere Pro</li>
              <span className="text-[60px]">
                <SiAdobepremierepro />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Adobe XD</li>
              <span className="text-[60px]">
                <SiAdobexd />
              </span>
            </span>
          </section>

          {/* My Work  */}
          <section>
            <h1 className="font-bold text-3xl tracking-wide my-8">
              My Work - 😄
            </h1>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Created Villagepur</li>
              <span className="text-[40px]">
                <a
                  href="https://villagepur.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLink />
                </a>
              </span>
            </span>
          </section>

          <section>
            <h1 className="font-bold text-3xl tracking-wide my-8">
              My Social Media,
            </h1>
            <div className="text-[#82B1FF] grid grid-cols-3">
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.linkedin.com/in/akshitvillager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://twitter.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.instagram.com/akshitvillager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://github.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.facebook.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </span>
            </div>
          </section>
          <h1 className="font-bold text-3xl tracking-wide my-8">
            Keep Smiling 😂
          </h1>
          <span className="flex justify-between scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
            <h1 className="text-[30px]">
              Thank You ! <br />
              🙏
            </h1>
          </span>
        </section>
      </section>

      {/* Small Screens  */}

      <section
        id={navbar.edu}
        className="grid justify-center break2:hidden m-2"
      >
        {/* textframwe */}
        <section>
          <section className="my-8">
            <h1 className="font-bold text-2xl tracking-wide">Hi! I am, </h1>
            <h1 className="text-[#82B1FF] text-[40px] font-bold">
              Akshit Kumar
            </h1>
          </section>

          {/* photoframe */}
          <section className="flex justify-center mt-4 ">
            <section className="bg-[#82B1FF] rounded-2xl px-4 pt-16 pb-12">
              <Image
                style={{
                  backgroundImage: `url("background1.jpg")`,
                  width: "80%",
                  height: "50%",
                }}
                src="/Akshit_T.png"
                width={300 + "px"}
                height={350 + "px"}
                alt="Akshit Kumar"
                className="rounded-2xl m-0 p-0"
              />
              <h1
                id={navbar.edu}
                className="text-white font-bold text-3xl text-center tracking-wider pt-4"
              >
                akshitvillager
                <div className="mt-4 ml-16 w-20 h-3 rounded-lg bg-white"></div>
              </h1>
            </section>
          </section>
          <section className="my-8">
            <h1 className="font-bold text-2xl tracking-wide my-4">I know, </h1>
            <li className="text-[#82B1FF]  text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Programming
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Web Development
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Graphic Design
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Content Writing
            </li>

            <li className="text-[#82B1FF] text-[30px] my-4 scale-90 hover:scale-100 ease-in-out duration-1000 hover:text-[#42e798] font-bold">
              Video Editing
            </li>
          </section>
          <section className="my-8">
            <h1 className="font-bold text-3xl tracking-wide my-6">
              Technologies Learned,
            </h1>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">C++</li>
              <span className="text-[60px]">
                <SiCplusplus />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Python</li>
              <span className="text-[60px]">
                <FaPython />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">HTML</li>
              <span className="text-[60px]">
                <FaHtml5 />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">CSS 3</li>
              <span className="text-[60px]">
                <FaCss3 />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">JavaScript</li>
              <span className="text-[60px]">
                <DiJavascript />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Premiere Pro</li>
              <span className="text-[60px]">
                <SiAdobepremierepro />
              </span>
            </span>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Adobe XD</li>
              <span className="text-[60px]">
                <SiAdobexd />
              </span>
            </span>
          </section>
          {/* My Work  */}
          <section>
            <h1 className="font-bold text-3xl tracking-wide my-8">
              My Work - 😄
            </h1>
            <span className="flex justify-between scale-90 hover:scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
              <li className="text-[30px]">Created Villagepur</li>
              <span className="text-[40px]">
                <a
                  href="https://villagepur.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLink />
                </a>
              </span>
            </span>
          </section>
          <section>
            <h1 className="font-bold text-3xl tracking-wide my-8">
              My Social Media,
            </h1>
            <div className="text-[#82B1FF] grid grid-cols-3">
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.linkedin.com/in/akshitvillager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://twitter.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.instagram.com/akshitvillager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://github.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="text-2xl duration-1000 text-[#82B1FF] my-4 hover:text-[#42e798] scale-95 hover:scale-100 ease-in-out">
                <a
                  className=""
                  href="https://www.facebook.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </span>
            </div>
          </section>
          <h1 className="font-bold text-3xl tracking-wide my-8">
            Keep Smiling 😂
          </h1>
          <span className="flex justify-between scale-100 ease-in-out duration-1000 tracking-wide my-6 text-[#82B1FF] font-bold hover:text-[#42e798] ">
            <h1 className="text-[30px]">
              Thank You ! <br />
              🙏
            </h1>
          </span>
        </section>
      </section>
    </>
  );
};

export default akki;
