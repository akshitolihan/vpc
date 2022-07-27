import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from "next/dist/client/image";
import Footer from "../components/Footer";
import Carousel2 from "../components/Carousel2";
import Heading from "../components/Heading";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

const index = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Home</title>
      </Head>
      <Navbar />
      {/* <BlogCard
        img="/top-learning-platforms.jpg"
        height="400px"
        width="500px"
        date="22 July 2022"
        heading="This is Akshit."
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias, cum eveniet rem quos "
            one="Read More"
            refer="/blog"
      /> */}
      <Carousel
        img="/microsites-pana.svg"
        height="450px"
        width="910px"
        heading="Welcome To Villagepur"
        para="We believe in the continuous growth..."
        one="Informative"
      />
      <Heading refer="" heading="What we have ? " />
      <Carousel2
        img="/post-pana.svg"
        height="300px"
        width="300px"
        num="1."
        heading="We have blogs to read."
        para="Keep Reading, Keep Knowing."
        one="Blogs"
        refer="/blog"
      />

      <Carousel2
        img="/dictionary-rafiki.svg"
        height="300px"
        width="300px"
        num="2."
        heading="We have videos to watch."
        para="Beware and Keep Watching..."
        one="Videos"
        refer="/videos"
      />

      <Carousel2
        img="/comfort-zone.svg"
        height="300px"
        width="300px"
        num="3."
        heading="We have quotes to motivate."
        para="Stay motivated, Stay energetic..."
        one="Quotes"
        refer="/quotes"
      />
      <Carousel2
        img="/Contact-us-cuate.svg"
        height="300px"
        width="300px"
        num="4."
        heading="Know about us more here."
        para="Stay informed, Stay Connected..."
        one="Know Us"
        refer="/about"
      />
      <Carousel2
        img="/more-rafiki.svg"
        height="300px"
        width="300px"
        num="5."
        heading="A lot coming your way."
        para=""
        one="Home"
        refer=""
      />

      <Heading heading="Creator" refer="/akshitkumar" />
      {/* photoframe */}
      <article className="md:flex md:justify-center grid justify-center my-4">
        <section className="flex justify-start mt-4 px-10">
          <section className="bg-[#82B1FF] rounded-2xl px-4 pt-16 pb-12 break2: ">
            <Image
              style={{
                backgroundImage: `url("background1.jpg")`,
                width: "80%",
                height: "50%",
              }}
              src="/Akshit_T.png"
              width={300 + "px"}
              height={350 + "px"}
              alt="Akshit Kumar"
              className="rounded-2xl m-0 p-0"
            />
            <h1
              id={navbar.uchen}
              className="text-white font-bold text-3xl text-center tracking-wider pt-4"
            >
              @akshitvillager
            </h1>
            <div className="mt-4 ml-16 w-20 h-4 rounded-lg bg-white"></div>
          </section>
        </section>
        <section id={navbar.uchen} className="my-8 mx-20 md:mt-48 ">
          <h1 className="font-bold text-3xl tracking-wide">Hi! I am, </h1>
          <h1 className="text-[#82B1FF] text-4xl font-bold">Akshit Kumar</h1>
          <h1 className="font-bold text-3xl tracking-wide mt-20">
            More info here:
          </h1>
          <h1 className="text-2xl cursor-pointer text-[#ffffff] bg-[#82B1FF] hover:scale-110 ease-in-out duration-1000 hover:bg-[#42e798] rounded-t-[50px] rounded-r-[50px] mt-8 font-bold w-24 text-center">
            <Link href="/akshitkumar">akshitA</Link>
          </h1>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default index;
