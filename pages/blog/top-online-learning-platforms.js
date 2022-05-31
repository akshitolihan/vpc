import React from "react";
import Images from "../../components/Image";
import Date from "../../components/Date";
import MainHeading from "../../components/MainHeading";
import Para from "../../components/Para";
import End from "../../components/End";
import SubHead1 from "../../components/SubHead1";
import SubHead2 from "../../components/SubHead2";
import Head from "next/dist/shared/lib/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Begin from "../../components/Begin";
const blog6 = () => {
  return (
    <>
      <Head>
        <title>Top Online Learning Platforms</title>
      </Head>

      <Navbar />
      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#F8F9FA] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <Date date="31 May 2022" />
            <MainHeading heading="Top Online Learning Platforms" />
            <Images src="/top-learning-platforms.jpg" />
            <Begin />
            <Para
              para="Today we are discussing about the Right to education and the
                right education. We will be looking at their importance and the
                impact of these things on the society."
            />
            
            <End />
          </section>
        </section>
      </section>
    </>
  );
};

export default blog6;
