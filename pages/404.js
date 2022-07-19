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
        para="This page doesn't exist. Please route to home. You might have enter a wrong URL in the browser. "
        one="Page"
        two="Not"
        three="Found"
      />
      <ins
        className="adsbygoogle  flex justify-center"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="9071107405"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default Page;
