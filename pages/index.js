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
import navbar from "../styles/Navbar.module.css";
import Book1 from "../components/Book1";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const index = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Home</title>
        <meta
          name="google-site-verification"
          content="5P3r_-9DRMSS2coMO412nNDmsXRWk3W4zECVmpBexvY"
        />
      </Head>
      <Navbar />
      <Carousel
        img="/home.svg"
        height="500px"
        width="910 px"
        heading="Welcome To Villagepur"
        para="We believe in the continuous growth of a person. We here provide
      some good content to read, quotes that will motivate you, polls
      where you can express your opinion and some learning content."
        one="Blogs"
        two="Quotes"
        three="Books"
      />

      <Heading heading="Our Latest Blogs" refer="/blog" />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {/* <Books
            img="/top-learning-platforms.jpg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/top-online-learning-platforms"
            refer2="/blog/top-online-learning-platforms"
            heading="Top Online Learning Platforms"
            para="In this blog are going to talk about the top online learning platform that are available for the people of different grades. We will be talking about both free and paid platforms that are availabe to us for enriching ourselves..."
          /> */}
          <Books
            img="/internshala.svg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/internshala"
            refer2="/blog/internshala"
            heading="Internshala: Trainings and Internships"
            para="Today we are going to talk about a platform that is very useful for college students. In this blog, we are going to talk about what is Internshala and it can be useful  ..."
          />
          <Books
            img="/upgrad.jpg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/upgrad-courses"
            refer2="/blog/upgrad-courses"
            heading="Online Learning : Courses Offered By upGrad"
            para=" Online education has become an important part of one’s learning
                process. We have evolved so much that we can educate ourselves
                by sitting at home. There are so many platforms that are..."
          />
          <Books
            img="/education.jpg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/right-to-education-and-right-education"
            refer2="/blog/right-to-education-and-right-education"
            heading="Right To Education and Right Education"
            para="There is not any clearcut answer to this question. We can consider the good or the bad things about social media. In this article, we will be having a view on that.Social media has its pros an ..."
          />
        </div>
      </div>

      <div>
        <ins
          className="adsbygoogle flex justify-center"
          data-ad-client="ca-pub-6898963328156558"
          data-ad-slot="2888842434"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        
      </div>

   
      <Heading heading="Our Latest Videos" refer="/learn" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Video
          img="/thumbnail/Wel_to_CP.png"
          height="250px"
          width="500px"
          heading="WELCOME TO CODEPINE"
          para=""
          refer="https://www.youtube.com/embed/ApZL5T5fQuA"
          watch="https://www.youtube.com/embed/ApZL5T5fQuA"
        />
        <Video
          img="/thumbnail/Install_VS_Code_Thumbnail.png"
          height="250px"
          width="500px"
          heading="INSTALLING VS CODE FOR WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/eC0WWw8Chnw"
          watch="https://www.youtube.com/embed/eC0WWw8Chnw"
        />
        <Video
          img="/thumbnail/Vs_Code_for_Python.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR PYTHON"
          para=""
          refer="https://www.youtube.com/embed/YkjPeFRTfGk"
          watch="https://www.youtube.com/embed/YkjPeFRTfGk"
        />
        <Video
          img="/thumbnail/VS_Code_For_Java.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR JAVA"
          para=""
          refer="https://www.youtube.com/embed/I84YeM5lHhM"
          watch="https://www.youtube.com/embed/I84YeM5lHhM"
        />
        <Video
          img="/thumbnail/VS_Code_For_Cpp.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR C++"
          para=""
          refer="https://www.youtube.com/embed/UOYtHPrZheg"
          watch="https://www.youtube.com/embed/UOYtHPrZheg"
        />
        <Video
          img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
          height="250px"
          width="500px"
          heading="UNINSTALLING VS CODE FROM WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/o5ZoQc3Zv4c"
          watch="https://www.youtube.com/embed/o5ZoQc3Zv4c"
        />
      </div>
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
        <Quotes
          img="/avatar.svg"
          height="84px"
          width="84px"
          heading="Someone"
          para="Choose your words wisely while speaking."
        />
      </div>
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

      <Heading heading="Creator" refer="#creator" />

      <div className="flex justify-center pb-4">
        <div className=" shadow-aksh m-2 bg-[#1DE9B6] rounded-3xl p-0  scale-100 transition max-w-3xl sm:m-12 grid">
          <div className="bg-[#ebf9ff]">
            <h1
              className="text-[#2F4858] text-lg text-justify font-normal max-w-[800px] p-6"
              style={{ fontFamily: "Georgia serif" }}
            >
              Hi, This is Akshit Kumar. I am a CSE student at Chandigarh
              University. My passion is to code and design some beautiful and
              life-impacting software. I love writing some beautiful articles
              that are informational as well as helpful.
            </h1>
          </div>
          <div className="flex justify-between rounded-xl p-6">
            <div>
              <h1
                id={navbar.font}
                className="text-[#fff] text-2xl text-justify font-bold"
              >
                Akshit Kumar
              </h1>
              <h1
                id={navbar.font}
                className="text-[#fff] text-2xl text-justify font-bold"
              >
                @akshitvillager
              </h1>
              <h1
                id={navbar.font}
                className="text-[#fff] text-xl text-justify font-normal pr-3"
              >
                Frontend Developer, Designer, and Content Writer
              </h1>
              <h1
                id={navbar.font}
                className="text-[#fff] text-2xl text-justify font-bold"
              >
                <div className="flex text-[#ffffff] text-2xl text-justify font-bold">
                  <a
                    className="p-3 text-xl"
                    href="https://www.linkedin.com/in/akshitvillager/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="p-3 pl-0 text-xl"
                    href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    className="p-3 pl-0 text-xl"
                    href="https://twitter.com/akshitvillager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="p-3 pl-0 text-xl"
                    href="https://www.instagram.com/akshitvillager/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="p-3 pl-0 text-xl"
                    href="https://github.com/akshitvillager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="p-3 pl-0 text-xl"
                    href="https://www.facebook.com/akshitvillager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </h1>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                alt="image"
                className="rounded-full justify-between mr-4"
                src="/A8.jpg"
                height="128px"
                width="128px"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
