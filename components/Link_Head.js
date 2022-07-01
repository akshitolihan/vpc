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

const Link_Head = (props) => {
  return (
    <>
      <section
        id={navbar.georgia}
        className="flex justify- text-[26px] font-bold p-0 py-4 "
      >
        <Link href={props.link} passHref>
          <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            {props.Link_Head}
          </a>
        </Link>
      </section>
    </>
  );
};

export default Link_Head;
