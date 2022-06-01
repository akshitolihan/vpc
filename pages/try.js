import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Link from "next/link";
import navbar from "../styles/Navbar.module.css";
import Book2 from "../components/Book2";
import Image from "next/dist/client/image";

const trys = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ trys</title>
        <meta
          name="google-site-verification"
          content="5P3r_-9DRMSS2coMO412nNDmsXRWk3W4zECVmpBexvY"
        />
      </Head>
      <Navbar />
      {/* <Carousel
        img="/trys.jpg"
        height="500px"
        width="910 px"
        heading="Welcome To tryss"
        para="Here we have some of the links of our apps tryss that we have created in our projects. You can download these apps from the given links below. "
        one="Blogs"
        two="Quotes"
        three="Books"
      /> */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
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
      </div>
      </div>
    </>
  );
};

export default trys;
