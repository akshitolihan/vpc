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
        para="This page doesn't exist. Please route to home."
        one="Page"
        two="Not"
        three="Found"
      />
      {/* <Link href="/">
        <a className="cursor-pointer">
          <Image
            className="rounded-xl"
            src="/404.svg"
            height="500px"
            width="500px"
          />
        </a>
      </Link> */}
      {/* <div className="m-12 bg-white rounded-3xl p-6 text-black  scale-100 transition mt-[150px] ">
        <div className="flex justify-center ">
          <div className="grid  ">
            <h1
              id={navbar.font3}
              className="p-4 text-2xl font-bold text-center"
            >
              404 Error
            </h1>
            <h1
              id={navbar.font3}
              className="p-4 text-2xl font-bold  text-center"
            >
              Page not Found
            </h1>
            <h1
              id={navbar.font3}
              className="p-4 text-2xl font-bold  text-center"
            >
              Go to Home
            </h1>
            <h1
              id={navbar.font3}
              className="p-4 text-2xl font-bold flex justify-center text-center"
            >
              <Link href="/">
                <BiHome className="cursor-pointer" size={100} color="#" />
              </Link>
            </h1>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Page;
