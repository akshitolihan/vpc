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

const Footer = () => {
  return (
    <>
      <footer
        id={navbar.font}
        className="bg-[#42e798] text-3xl p-2 rounded-t-2xl shadow-top flex justify-center w-full"
      >
        <div className="md:grid md:grid-cols-2">
        <h1 className="text-center p-3 text-xl font-bold text-[#ffffff] ">
          &copy; Copyrights Reserved @Villagepur
        </h1>

        {/* 
            <h1 className="text-center p-3 text-xl font-bold text-[#2F4858]">
             ~ Our Social Media ~
            </h1> */}
        <div className="flex justify-center text-white">
        <a
            className="p-3 text-xl"
            href="https://www.linkedin.com/in/akshitvillager/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="p-3 text-xl"
            href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            className="p-3 text-xl"
            href="https://twitter.com/akshitvillager"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="p-3 text-xl"
            href="https://www.instagram.com/akshitvillager/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="p-3 text-xl"
            href="https://github.com/akshitvillager"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="p-3 text-xl"
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

export default Footer;
