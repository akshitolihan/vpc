import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Link from "next/link";
import navbar from "../styles/Navbar.module.css";
import Book2 from "../components/Book2";
const apk = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ APK</title>
        <meta
          name="google-site-verification"
          content="5P3r_-9DRMSS2coMO412nNDmsXRWk3W4zECVmpBexvY"
        />
      </Head>
      <Navbar />
      {/* <Carousel
        img="/apk.jpg"
        height="500px"
        width="910 px"
        heading="Welcome To APKs"
        para="Here we have some of the links of our apps APKs that we have created in our projects. You can download these apps from the given links below. "
        one="Blogs"
        two="Quotes"
        three="Books"
      />
      <Heading heading="Connect Chat APK" refer="/apk" />
      <div className="flex justify-center">
      <Link href="/cc.apk" passHref>
        <button
          id={navbar.font}
          type="button"
          className="text-center mr-6 no-underline text-[#2F4858] font-semibold justify-center bg-[#42e798] mt-4 w-auto h-10 rounded-t-[50px]  rounded-r-[50px]"
        >
          Connect Chat
        </button>
      </Link>
      </div> */}
      <Book2
            img="/js.png"
            height="300px"
            width="220px"
            download="Download"
            heading="JavaScript Notes For Professionals"
            para="Hi, This is Akshit Kumar. I am a CSE student at Chandigarh
            University.Hi, This is Akshit Kumar. I am a CSE student at Chandigarh
            University. "
            refer="https://books.goalkicker.com/JavaScriptBook/"
          />
    </>
  );
};

export default apk;
