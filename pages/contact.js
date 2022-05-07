import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
const contact = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Contact</title>
      </Head>
      <Navbar />
      <Carousel
      img="/contact.jpg" 
      height="500px" 
      width="910 px" 
      heading="Connect With Us"
      para="If you have anything to say, anything to suggest yhen you can connect with us using the given media. We will revert back to you as soon as possible. Support us if you like our work. Stay Connected... "
      one="Blogs"
      two="Quotes"
      three="Books"
      />
      <Heading heading="Connect with Us" refer="/contact" /> 
      <div className="flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
      <Card
        heading="Connect on Telegram"
        para="This is Akshit Kumar. Join our telegram group. Link Below."
        refer="https://t.me/thevillagepur"
        name="Join"
      />
      <Card
        heading="Connect on Facebook"
        para="This is Akshit Kumar. Follow our facebook page and connect with us."
        refer="https://www.facebook.com/villagepur/"
        name="Follow"
      />
      <Card
        heading="Connect on Instagram"
        para="This is Akshit Kumar. Follow our page and connect with us. "
        refer="https://www.instagram.com/thevillagepur"
        name="Follow"
      />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default contact;
