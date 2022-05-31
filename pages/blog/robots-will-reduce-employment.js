import React from "react";
import Image from "next/dist/client/image";
import navbar from "../../styles/Navbar.module.css";
import Heading2 from "../../components/Heading";
import Head from "next/dist/shared/lib/head";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const blog3 = () => {
  return (
    <>
      <Head>
        <title>Robots will Reduce Human Employment</title>
      </Head>

      <Navbar />

      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#1DE9B6] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10">
          <section className=" m-2 md:m-10   rounded-3xl text-black lg:w-[900px] ">
            <h1
              id={navbar.font}
              className="flex justify-center text-xl font-bold text-[#2F4858] p-0 pt-4 md:p-4"
            >
              05 May 2022
            </h1>
            <h1 className="flex justify-center text-4xl font-bold p-0 pt-4 md:p-4">
              Robots will Reduce Human Employment
            </h1>

            <div className="flex justify-center p-0 pt-4 md:p-4">
              <Image
                alt="image"
                className="rounded-2xl flex justify-center mr-4"
                src="/Robots.jpg"
                height="500px"
                width="800px"
              />
            </div>
            <button
              id={navbar.font2}
              type="button"
              className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
            >
              Akshit Kumar Here
            </button>
            <button
              id={navbar.font2}
              type="button"
              className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
            >
              Let&#39;s Begin
            </button>

            <div className="pt-10" style={{ fontFamily: "Georgia serif" }}>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                Good Evening to Respected juries and my fellow participants, My
                name is Akshit Kumar Today I am going to share my viewpoint
                opposing the motion, Robots will reduce Human Employment.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                Starting off by saying a famous line change is the only
                constant. So, what I mean is that every then and now the world
                is changing rapidly. Robot advancement is a part of that. Robots
                are designed for performing a specific activity so that the
                activity can be done accurately, fast, and to reduce human
                dependency and human errors.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                Now, coming to the jobs of the humans, we mainly have two types
                of jobs, one is skilled and the other is unskilled. As per my
                research and intellect, robots are just going to change the
                types of jobs. The expansion of robots is going to create
                numerous amount of skilled jobs. To support my theory I will
                provide you with a scenario, we have seen many revolutions like
                the industrial, Agri revolutions which revolutionized the whole
                world increased the productivity and quality of the work, and in
                the same way the automation revolution. The jobs in developing
                robots, automated machines, and AI and technology will increase
                rapidly. 10-15 years back we never thought about earning money
                sitting at home by doing things like gaming, content creation,
                being an influencer but all these things are happening. A few
                months back GitHub launched a product named GitHub copilot which
                autocompletes the code or kinda gives suggestions to the
                programmer. A ruckus was created suddenly but now everything is
                normal as people are now able to understand that it is not going
                to take your job as the human brain is behind it and we have
                only developed it.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                If the robots are going to be developed then we can have
                employment in the development of robots, providing services, and
                research and innovation. Robots are managed by humans, so there
                will be a lot of jobs in robots management. In the manufacturing
                and designing of the robots, we will be having a lot of
                employment opportunities. We have an area of concern and that is
                to make humans skilled and adaptive to new things.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                In the end, I just want to say that we should focus on skill
                development rather than worrying about the loss or reduction in
                the jobs of humans. I strongly believe that robots, AI, and
                automation are the future and it is better for us as soon as we
                accept this fact.
              </p>
            </div>
            <button
              id={navbar.font2}
              type="button"
              className="flex justify-start text-3xl no-underline text-[#2F4858] font-extrabold mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto  mb-4"
            >
              Thank you
            </button>
            <button
              id={navbar.font2}
              type="button"
              className="text-3xl no-underline text-[#2F4858] font-extrabold justify-start  mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block mb-4"
            >
              Akshit Kumar rests his words here...
            </button>
          </section>
        </section>
      </section>
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
      <Footer />
    </>
  );
};

export default blog3;
