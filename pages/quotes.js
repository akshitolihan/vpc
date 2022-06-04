import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import Quotes from "../components/Quotes";
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
        img="/quotes.jpg"
        height="500px"
        width="910 px"
        heading="Welcome To Quotes"
        para="Keeping ourselves motivated is one the need of the time. We need to be energetic and the enthusiastic all the time. Here you can read the quote that can give you motivation."
        one="Blogs"
        two="Quotes"
        three="Books"
      />
      <Heading heading="Quotes" refer="/quotes" />

      <div className="grid md:grid-cols-2">
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
        <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-en+4-f-xh+1ff"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="4463995591"
      ></ins>

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
              <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-6m+cm+h-9i+l9"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="6707015556"
      ></ins>

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
              <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-6m+cm+h-9i+l9"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="6707015556"
      ></ins>

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
        <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-en+4-f-xh+1ff"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="4463995591"
      ></ins>

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

export default quotes;
