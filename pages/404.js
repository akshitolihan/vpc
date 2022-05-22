import next from "next";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { BiHome, BiDownArrowAlt } from "react-icons/bi";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import Carousel from "../components/Carousel";

const Page = () => {
  return (
    <>

      <Head>
        <title>Villagepur ~ 404 Error</title>
      </Head>
      <Navbar />
      <Carousel
        img="/404.svg"
        height="500px"
        width="910 px"
        heading="404 Error"
        para="This page doesn't exist. Please route to home. You might have enter a wriong url in the webspage. "
        one="Page"
        two="Not"
        three="Found"
      />
    </>
  );
};

export default Page;
