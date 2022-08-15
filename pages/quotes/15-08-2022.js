import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import Heading2 from "../../components/Heading2";
import Quotes from "../../components/Quotes";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import Image from "next/dist/client/image";
const quotes = () => {
  return (
    <>
      <Head>
        <title>Independence has come from the sacrifices of many people, acknowledge it.</title>
      </Head>
      <Navbar />
      
      <Heading2 heading="Thought of the Day" />
      <Quote
        img="/tiranga.png"
        height="300px"
        width="300px"
        refer="/blog/15-18-2022"
        name=""
        quote="Independence has come from the sacrifices of many people, acknowledge it."
        bgColor="#fff"
      />
      <Footer />
    </>
  );
};

export default quotes;
