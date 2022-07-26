import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Text from "../components/Text";
const contact = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Contact</title>
      </Head>
      <Navbar />
      <Carousel
        img="/Contact-us-cuate.svg"
        height="450px"
        width="910px"
        heading="Know Us"
        para="Stay informed, Stay Connected... "
        one="Contact"
      />
      <Heading heading="About Us" refer="/about" />
      <section className="flex justify-center ">
        <section className="shadow-lg bg-[#448AFF] max-w-2xl rounded-lg hover:shadow-xl p-2">
      <Text color="#ffffff" text = "Hi, This is Akshit Kumar."/>
      <Text color="#ffffff" text = "We talk about different things."/>
      <Text color="#ffffff" text = "We talk about people, and thigs related to them."/>
      <Text color="#ffffff" text = "We talk about India."/>
      <Text color="#ffffff" text = "To know more, Stay in touch."/>
      </section></section>
      <Heading heading="We Social" refer="/about" />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Card
            bgColor="#448AFF"
            img="/telegram.svg"
            height="128px"
            width="128px"
            heading="Connect on Telegram"
            para="This is Akshit Kumar. Join our telegram group. Link Below."
            refer="https://t.me/thevillagepur"
            name="Join"
          />
          <Card
            bgColor="#448AFF"
            img="/facebook.svg"
            height="128px"
            width="128px"
            heading="Connect on Facebook"
            para="This is Akshit Kumar. Follow our facebook page and connect with us."
            refer="https://www.facebook.com/villagepur/"
            name="Follow"
          />
          <Card
            bgColor="#448AFF"
            img="/instagram.svg"
            height="128px"
            width="128px"
            heading="Connect on Instagram"
            para="This is Akshit Kumar. Follow our page and connect with us. "
            refer="https://www.instagram.com/thevillagepur"
            name="Follow"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
