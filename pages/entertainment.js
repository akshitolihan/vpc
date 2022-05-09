import React from "react";
import Head from "next/head";
import { FaApple, BiHome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from "next/dist/client/image";
import Footer from "../components/Footer";
import Code from "../components/Code";
import Books from "../components/Books";
import Video from "../components/Video";
import Heading from "../components/Heading";
import Quotes from "../components/Quotes";
import Blog from "../components/Blog";
import navbar from "../styles/Navbar.module.css";
import Book1 from "../components/Book1";
import Link from "next/link";
import Card2 from "../components/Card2";
const entertainment = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Entertainment</title>
      </Head>
      <Navbar />
      <Carousel
        img="/entertain.jpg"
        height="500px"
        width="910 px"
        heading="Entertain"
        para="Entertainment is a way to refresh our body and mind simultaneously. It is even more refreshing if you enjoy with your close friends and family. Keep yourself updated with the information of the movies and sports."
        one="Movies"
        two="Web Series"
        three="Sports"
      />
      <Heading heading="Entertain Yourself Here" refer="/entertainment" />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Card2
            heading="Movies"
            para="Information about all the new upcoming movies here."
            refer="/entertainment"
            name="Know More"
          />
          <Card2
            heading="Web Series"
            para="Information about all the new web series."
            refer="/entertainment"
            name="Know More"
          />
          <Card2
            heading="Sports"
            para="Get the updates of all the sports events happening here."
            refer="/entertainment"
            name="Know More"
          />
        </div>
      </div>
      <Heading heading="Latest Movies" refer="/entertainment" />

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Book1
            img="/jersey.jpg"
            height="400px"
            width="300px"
            download="Book Here"
            heading="Jersey"
            para=""
            refer="https://in.bookmyshow.com/explore/home"
          />
          <Book1
            img="/jersey.jpg"
            height="400px"
            width="300px"
            download="Book Here"
            heading="Jersey"
            para=""
            refer="https://in.bookmyshow.com/explore/home"
          />
          <Book1
            img="/jersey.jpg"
            height="400px"
            width="300px"
            download="Book Here"
            heading="Jersey"
            para=""
            refer="https://in.bookmyshow.com/explore/home"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default entertainment;
