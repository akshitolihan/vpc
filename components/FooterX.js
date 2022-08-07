import React, { useState } from "react";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterX = () => {
  return (
    <>
      <footer
        id={navbar.josefin}
        className="p-2 rounded-t-2xl shadow-aksh flex justify-center w-full"
      >
        <div className="md:grid md:grid-cols-2">
          <h1 className="text-center p-2 text-2xl font-bold text-[#000000] ">
            &copy; Copyrights Reserved @<span>Village</span>
            <span className="text-[#448AFF]">Pur</span>
          </h1>
          <div className="flex justify-center text-[#000000] ">
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterX;
