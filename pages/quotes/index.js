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
        <title>Villagepur ~ Quotes</title>
      </Head>
      <Navbar />
      <Carousel
        img="/comfort-zone.svg"
        height="450px"
        width="910px"
        heading="Welcome To Quotes"
        para="Stay motivated, Stay energetic..."
        one="Quotes"
      />
      <Heading2 heading="Quote of the Day" />
      <Quote
        img="/gandhiji.png"
        height="450px"
        width="350px"
        refer="/blog"
        name="Mahatma Gandhi Ji"
        quote="Future of India lives in the villages of India."
        bgColor="rgb(216 225 231)"
      />
      <Footer />
    </>
  );
};

export default quotes;
