import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import Books from "../../components/Books";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
const blog = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Blog</title>
      </Head>
      <Navbar />
      <Carousel
        img="/blog.svg"
        height="500px"
        width="910 px"
        heading="Welcome To Blogs"
        para="You can read the blogs on the latest topics and topics that are important to you. We are bringing to you some good articles on different topics daily. Read our blogs and give your valuable feedback as well."
        one="Blogs"
        two="Quotes"
        three="Books"
      />
      <Heading heading="Blogs Here" refer="/blog" />
      <div className="flex justify-center">

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
      <Books
          img="/education.jpg"
          height="250px"
          width="400px"
          download="Read More"
          refer1="/blog/right-to-education-and-right-education"
          refer2="/blog/right-to-education-and-right-education"
          heading="Right To Education and Right Education"
          para="There is not any clearcut answer to this question. We can consider the good or the bad things about social media. In this article, we will be having a view on that.Social media has its pros and cons as other things have. It In the past 10 years..."
        />
        <Books
          img="/Social_media.jpg"
          height="250px"
          width="400px"
          download="Read More"
          refer1="/blog/social-media-good-or-bad"
          refer2="/blog/social-media-good-or-bad"
          heading="Social Media, Good or Bad?"
          para="There is not any clearcut answer to this question. We can consider the good or the bad things about social media. In this article, we will be having a view on that.Social media has its pros and cons as other things have. It In the past 10 years..."
        />
        <Books
          img="/Robots.jpg"
          height="250px"
          width="400px"
          download="Read More"
          refer1="/blog/robots-will-reduce-employment"
          refer2="/blog/robots-will-reduce-employment"
          heading="Robots Will Reduce Human Employment"
          para="Good Evening to Respected juries and my fellow participants, My
          name is Akshit Kumar Today I am going to share my viewpoint
          opposing the motion, Robots will reduce Human Employment. Starting off by saying a famous line, change..."
        />
        <Books
          img="/people.jpg"
          height="250px"
          width="400px"
          download="Read More"
          refer1="/blog/role-of-society-protecting-online"
          refer2="/blog/role-of-society-protecting-online"
          heading="Role of Society Protecting Online"
          para="Society has a great role in protecting children online. This protection might be related to many things. If the children are given the facility of the internet at a young age it might be unfruitful for the ..."
        />
        </div>
      </div>
      <Footer/>
</>
  );
};

export default blog;
