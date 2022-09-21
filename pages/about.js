import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import MainHeading from "../components/MainHeading";
import Text from "../components/Text";
import navbar from "../styles/Navbar.module.css";

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
      <section className="flex justify-center my-16">
        <section className="shadow-lg max-w-2xl rounded-lg hover:shadow-xl p-2">
          <Text color="#000000" text="Hi, This is Akshit Kumar and co." />
          <Text
            color="#448AFF"
            text="We talk about things that are related to common people."
          />
          <Text color="#000000" text="To know more, Stay in touch." />
        </section>
      </section>

      <h1
        id={navbar.josefin}
        className="text-center text-4xl p-6 font-extrabold"
      >
        We Social
      </h1>
      <div className="flex justify-evenly">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <Card
            bgColor="#"
            img="/telegram.svg"
            height="64px"
            width="64px"
            heading="Join"
            para="This is Akshit Kumar. Join our telegram group. Link Below."
            refer="https://t.me/thevillagepur"
            name="Join"
          />
          <Card
            bgColor="#"
            img="/facebook.svg"
            height="64px"
            width="64px"
            heading="Follow"
            para="This is Akshit Kumar. Follow our facebook page and connect with us."
            refer="https://www.facebook.com/villagepur/"
            name="Follow"
          />
          <Card
            bgColor="#"
            img="/instagram.svg"
            height="64px"
            width="64px"
            heading="Follow"
            para="This is Akshit Kumar. Follow our page and connect with us. "
            refer="https://www.instagram.com/thevillagepur"
            name="Follow"
          />
          <Card
            bgColor="#"
            img="/youtube.svg"
            height="64px"
            width="64px"
            heading="Subscribe"
            para="This is Akshit Kumar. Subscribe our channel. "
            refer="https://www.youtube.com/channel/UCB-MIYje3UgID2KNvWSl-Eg"
            name="Subscribe"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
