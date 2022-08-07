import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Heading2 from "../components/Heading2";
import Quotes from "../components/Quotes";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
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
      <Heading2 heading = "Quote of the Day"/>
      <Quote
        img="/gandhiji.png"
        height="450px"
        width="350px"
        refer="/blog"
        name="Mahatma Gandhi Ji"
        quote="Future of India lives in the villages of India."
        bgColor="rgb(216 225 231)"
      />

      {/* <div className="grid md:grid-cols-2">
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Things are declined that are not up to the requirements."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Dedication is the best virtue."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Learn from your failures to achieve success."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Honesty is the best policy."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Communication works for those who work on communication."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Choose your words wisely while speaking."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Be the king of your own kingdom."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Choose your words wisely while speaking."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Think, Decide and Act"
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Become your best friend."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Introspection works as a security check-in life."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Life is the beautiful thing that we have to express that we are alive."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Peace of mind is the most essential thing when making decisions."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Good surrounding makes you a good person."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Don’t think of a goal, just focus on the next step, you get closer to the goal."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Be the change you want to see in society."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Success comes to those who continuously work for their target."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="There is nothing like an overnight success, one needs to work overnight to achieve success."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Sleep adequate, not more not less."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="The view from each floor of a building is different, your view depends on which floor you are standing on."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Don’t judge a book by its cover. Avoid judging others."
        />
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Introspection helps you to become better in your life in all aspects."
        />
      </div> */}
      <Footer />
    </>
  );
};

export default quotes;
