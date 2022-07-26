import React from "react";
import navbar from "../styles/Navbar.module.css";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
const Footer = (props) => {
  return (
    <>
      <section className="grid justify-center md:flex md:justify-evenly bg-[#ffffff] shadow-aksh rounded-lg mt-12">
        <section className="m-2  justify-center">
          <h1
            id={navbar.font}
            type="button"
            className="text-3xl font-bold m-4 pt-4 py-6 text-center md:text-justify"
          >
            <span>Village</span>
            <span className="text-[#448AFF]">Pur</span>
          </h1>

          <h1
            id={navbar.font}
            className="text-xl font-bold m-4 text-center md:text-justify w-auto tracking-wider"
          >
            We talk informative and needful.
          </h1>
          <h1
            id={navbar.font}
            className="text-xl font-bold m-4 text-center md:text-justify w-auto tracking-wider"
          >
            We talk about India and people in India.
          </h1>
        </section>
        <hr />
        <section className="m-4 pt-4 grid justify-center">
          <Link href="/" passHref>
            <h1
              id={navbar.font}
              className="text-xl font-bold m-2 cursor-pointer text-justify w-auto tracking-wider"
            >
              Home
            </h1></Link>
          <Link href="blog" passHref>
            <h1
              id={navbar.font}
              className="text-xl font-bold m-2 cursor-pointer text-justify w-auto tracking-wider"
            >
              Blog
            </h1></Link>
          <Link href="/videos" passHref>

            <h1
              id={navbar.font}
              className="text-xl font-bold m-2 cursor-pointer text-justify w-auto tracking-wider"
            >
              Videos
            </h1></Link>
          <Link href="/quotes" passHref>

            <h1
              id={navbar.font}
              className="text-xl font-bold m-2 cursor-pointer text-justify w-auto tracking-wider"
            >
              Quotes
            </h1></Link>
          <Link href="/about" passHref>

            <h1
              id={navbar.font}
              className="text-xl font-bold m-2 cursor-pointer text-justify w-auto tracking-wider"
            >
              About
            </h1></Link>
        </section>
        <hr />
        <section>
          <main className="m-4 pt-4">
            <h1
              id={navbar.font}
              className="text-center text-xl font-bold my-4 px-3 md:text-justify w-auto tracking-wider"
            >
              Drop a message!
            </h1>
            <section className="flex justify-center md:flex md:justify-start text-[#000000] ">
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://www.linkedin.com/in/akshitvillager/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://twitter.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://www.instagram.com/akshitvillager/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://github.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="p-3 text-xl hover:text-[#448AFF]"
                href="https://www.facebook.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </section>
            <hr className="md:hidden" />
            <h1
              id={navbar.font}
              className="text-center p-3 pt-8 text-xl font-bold text-[#000000] "
            >
              &copy; Copyrights Reserved @<span>Village</span>
              <span className="text-[#448AFF]">Pur</span>
            </h1>
          </main>
        </section>
      </section>
    </>
  );
};

export default Footer;
