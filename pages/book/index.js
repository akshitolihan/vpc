import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import Book1 from "../../components/Book1";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
const book = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Book</title>
      </Head>
      <Navbar />
      <Carousel
        img="/book.jpg"
        height="500px"
        width="910 px"
        heading="Welcome To BookPur"
        para="You can download and read the books on the available topics. We will be be bringing to you the best books related to a topic. Books are the key assets for usto enhance our knowledge and personality."
        one="Blogs"
        two="Quotes"
        three="Books"
      />
      <Heading heading="Books" refer="/book" />

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Book1
            img="/html5.png"
            height="400px"
            width="300px"
            download="Download"
            heading="HTML Notes For Professionals"
            para=""
            refer="https://books.goalkicker.com/HTML5Book/"
          />
          <Book1
            img="/css.png"
            height="400px"
            width="300px"
            download="Download"
            heading="CSS Notes For Professionals"
            para=""
            refer="https://books.goalkicker.com/CSSBook/"
          />
          <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-en+4-f-xh+1ff"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="4463995591"
      ></ins>

          <Book1
            img="/js.png"
            height="400px"
            width="300px"
            download="Download"
            heading="JavaScript Notes For Profess"
            para=""
            refer="https://books.goalkicker.com/JavaScriptBook/"
          />
          
        </div>
      </div>
      <ins
        className="adsbygoogle  flex justify-center"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="2888842434"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Footer />
    </>
  );
};

export default book;
