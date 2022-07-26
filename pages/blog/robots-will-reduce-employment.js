import React from "react";
import Images from "../../components/Image";
import Date from "../../components/Date";
import MainHeading from "../../components/MainHeading";
import Para from "../../components/Para";
import End from "../../components/End";
import SubHead1 from "../../components/SubHead1";
import Link_Head from "../../components/Link_Head";
import Head from "next/dist/shared/lib/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Begin from "../../components/Begin";
import Card from "../../components/Card";
const blog2 = () => {
  return (
    <>
      <Head>
        <title>Robots will Reduce Human Employment</title>
      </Head>

      <Navbar Color="#448AFF" />

      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10 border-4 border-[#448AFF]">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <Date date="8 May 2022" />
              <MainHeading heading="Robots will Reduce Human Employment" />
              <Images src="/Robots.jpg" />
              <Begin />
              <Para
                para="Good Evening to Respected juries and my fellow participants, My name is Akshit Kumar Today I am going to share my viewpoint opposing the motion, Robots will reduce Human Employment." />
              <Para para="Starting off by saying a famous line change is the only constant. So, what I mean is that every then and now the world is changing rapidly. Robot advancement is a part of that. Robots are designed for performing a specific activity so that the activity can be done accurately, fast, and to reduce human dependency and human errors." />

              <Para
                para="Now, coming to the jobs of the humans, we mainly have two types of jobs, one is skilled and the other is unskilled. As per my research and intellect, robots are just going to change the types of jobs. The expansion of robots is going to create numerous amount of skilled jobs." />
              <Para
                para="To support my theory I will provide you with a scenario, we have seen many revolutions like the industrial, Agri revolutions which revolutionized the whole world increased the productivity and quality of the work, and in the same way the automation revolution. The jobs in developing robots, automated machines, and AI and technology will increase rapidly." />

              <Para
                para="10-15 years back we never thought about earning money sitting at home by doing things like gaming, content creation, being an influencer but all these things are happening." />
              <Para
                para="A few months back GitHub launched a product named GitHub copilot which autocompletes the code or kinda gives suggestions to the programmer. A ruckus was created suddenly but now everything is normal as people are now able to understand that it is not going to take your job as the human brain is behind it and we have only developed it." />

              <Para
                para="If the robots are going to be developed then we can have employment in the development of robots, providing services, and research and innovation. Robots are managed by humans, so there will be a lot of jobs in robots management. " />

              <Para
                para="In the manufacturing and designing of the robots, we will be having a lot of employment opportunities. We have an area of concern and that is to make humans skilled and adaptive to new things." />

              <Para
                para="In the end, I just want to say that we should focus on skill development rather than worrying about the loss or reduction in the jobs of humans. I strongly believe that robots, AI, and automation are the future and it is better for us as soon as we accept this fact." />
              <End />
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default blog2;
