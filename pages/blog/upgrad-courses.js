import React from "react";
import Head from "next/dist/shared/lib/head";
import Course from "../../components/Course";
import Image from "next/dist/client/image";
import navbar from "../../styles/Navbar.module.css";
import Heading2 from "../../components/Heading";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const blog5 = () => {
  return (
    <>
      <Head>
        <title>Top Upgrad Courses</title>
      </Head>

      <Navbar />

      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#F8F9FA] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10">
          <section className=" m-2 md:m-10   rounded-3xl text-black lg:w-[900px] ">
            <h1
              id={navbar.font}
              className="flex justify-center text-xl font-bold text-[#2F4858] p-0 pt-4 md:p-4"
            >
              13 May 2022
            </h1>
            <h1 className="flex justify-center text-4xl font-bold p-0 pt-4 md:p-4">
              Online Learning : Courses Offered By upGrad
            </h1>

            <div className="flex justify-center p-0 pt-4 md:p-4">
              <Image
                alt="image"
                className="rounded-2xl flex justify-center mr-4"
                src="/upgrad.jpg"
                height="500px"
                width="800px"
              />
            </div>
            <button
              id={navbar.font}
              type="button"
              className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
            >
              Akshit Kumar Here
            </button>
            <button
              id={navbar.font}
              type="button"
              className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
            >
              Let&#39;s Begin
            </button>

            <div className="pt-10" style={{ fontFamily: "Georgia serif" }}>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                Online education has become an important part of one’s learning
                process. We have evolved so much that we can educate ourselves
                by sitting at home. There are so many platforms that are
                available for us to take education and upskill ourselves so that
                we can be able to adapt to the new technology. If continuously
                upskill ourselves then it will be easier for anybody to be
                fitter for the jobs.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                Every then and now we are witnessing new things in the world and
                these are the thing that is going to be the future. Coronavirus
                has changed the way of education we perceive. Everything was
                locked in the covid times and all the educational institutions
                were also closed which led to the growth of many online
                educational platforms. Today we are going to discuss one such
                organization.
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
                upGrad is an online learning platform that is providing a good
                quality of education to working professionals who want to
                upskill and don’t want to leave jobs and it can collide with
                college timings. So any working person can register for any
                course they want to pursue as per their interest. It is a very
                important platform for people who want to change their
                profession. upGrad covers 360-degree support for any course you
                choose to pursue. upGrad is also providing programs to
                undergraduate students from top universities around the globe.
                Students who were not able to take admissions in the
                universities which they wanted to pursue due to any reason can
                now enrol themselves in the course to learn from the top
                universities.
              </p>
              <p className="flex justify-start text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
                The universities which are providing courses on upGrad:
              </p>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                1. University of Arizona
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                2. Deakin University
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                3. IIT Madras
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                4. Indian Institute of Management, Kozhikode
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                5. Duke Corporate Education
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                6. Caltech
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                7. Purdue University
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                8. Liverpool John Moores University
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                9. Swiss Schools of Business Management
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                10. IIIT Bangalore
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                11. University of Maryland
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                12. Birla Institute of Management Technology
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                13. and many others.
              </h1>
              <p className="flex justify-start text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
                The upGrad offers numerous courses in different fields from the
                experts in the fields and the top universities. <br />
                <br />
                What are the categories in which upGrad offers courses?
              </p>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                1. MBA
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                2. Data Science
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                3. Doctorate
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                4. Software and Tech
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                5. Marketing
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                6. Management
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                7. AI/ML
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                8. Law
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                9. Business Analytics
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                10. Study Abroad
              </h1>
              <h1 className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14">
                11. Job Guaranteed
              </h1>
              <div className=" flex justify-center">
                <div className="max-w-lg shadow-2xl shadow-top m-2 md:m-10  bg-white rounded-3xl p-6 text-white  scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl mt-[16px]">
                  <h1
                    id={navbar.font}
                    type="button"
                    className="text-center max-w-[300px] text-3xl no-underline text-[#ffffff] cursor-text font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
                  >
                    If you want to enroll, use Our Code for discount.
                  </h1>
                  <h1
                    id={navbar.font3}
                    type="button"
                    className="text-center max-w-[120px] text-xl no-underline cursor-text text-[#000000] font-extrabold justify-center mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
                  >
                    X7arUU
                  </h1>
                </div>
              </div>
              <a
                href="https://www.upgrad.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  id={navbar.font}
                  type="button"
                  className="text-center max-w-[350px] text-3xl no-underline text-[#ffffff] cursor-pointer font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
                >
                  Checkout courses here
                </h1>
              </a>
              <br />
            </div>
          </section>
        </section>
      </section>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Data Science courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/data-science.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/data-science-masters-degree-iiitb?ref=X7arUU"
            heading="Master of Science in Data Science | Master of Science"
            para="Liverpool John Moores University"
          />
          <Course
            img="/data-science.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/data-science-pgd-iiitb?ref=X7arUU"
            heading="Executive PG Programme in Data Science | Executive PG Programme"
            para="IIIT Bangalore"
          />
          <Course
            img="/data-science.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/data-science-professional-certificate-bdm-iimk/?ref=X7arUU"
            heading="Professional Certificate Program in Data Science for Business Decision Making | Professional Certification"
            para="IIM Kozhikode"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the MBA courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/mba.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/mba-liverpool-business-school?ref=X7arUU"
            heading="Master of Business Administration (MBA) Liverpool Business School | MBA"
            para="Liverpool John Moores University"
          />
          <Course
            img="/mba.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/executive-mba-ssbm/?ref=X7arUU"
            heading="Executive MBA | MBA"
            para=" SSBM Geneva"
          />
          <Course
            img="/mba.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/mba-business-analytics-nmims?ref=X7arUU"
            heading="MBA (Executive) with Specialisation in Business Analytics | MBA"
            para="NMIMS Global CE"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Doctorate courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/phd.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/doctor-of-business-administration-ssbm?ref=X7arUU"
            heading="Doctor of Business Administration | Swiss School of Business Management | Doctorate"
            para="SSBM Geneva"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Software and Technology courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/software.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/software-engineering-mcs-ljmu/?ref=X7arUU"
            heading="Master of Science in Computer Science | Master's Degree"
            para="Liverpool John Moores University"
          />
          <Course
            img="/software.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/full-stack-developer-course-pgd-iiitb/?ref=X7arUU"
            heading="Executive PGP in Software Development - Full Stack | Executive PG Programme"
            para="IIIT Bangalore"
          />
          <Course
            img="/software.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/full-stack-development-bootcamp/?ref=X7arUU"
            heading="Full Stack Development Bootcamp | Bootcamp"
            para="upGrad"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Management courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/management.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/leadership-and-management-certificate-program-wharton?ref=X7arUU"
            heading="Leadership and Management in New Age Business | Certification"
            para="University of Pennsylvania"
          />
          <Course
            img="/management.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/product-management?ref=X7arUU"
            heading="Product Management Certification Program | Certification"
            para="Duke Corporate Education"
          />
          <Course
            img="/management.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/human-resource-management-epgp-liba?ref=X7arUU"
            heading="Executive PG Programme in Human Resource Management | Executive PG Programme"
            para="Loyola Institute of Business Administration"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Business Analytics courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/analytics.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/master-certificate-business-analytics-msu?ref=X7arUU"
            heading="Global Master Certificate - Business Analytics | Global Master Certificate"
            para="Michigan State University"
          />
          <Course
            img="/analytics.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/business-analytics-epgp-liba/?ref=X7arUU"
            heading="Executive PG Programme in Business Analytics | Executive PG Programme"
            para="Loyola Institute of Business Administration"
          />
          <Course
            img="/analytics.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/business-analytics-certification/?ref=X7arUU"
            heading="Business Analytics Certification Program | Certification"
            para="upGrad"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Law courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/law.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/law-llm-intellectual-property-technology-law-jgls?ref=X7arUU"
            heading="LL.M. in Intellectual Property & Technology Law | LL.M."
            para="Jindal Global Law School (JGLS)"
          />
          <Course
            img="/law.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/law-llm-corporate-and-finance-jgu/?ref=X7arUU"
            heading="LL.M. in Corporate & Financial Law | LL.M. in Corporate & Financial Law (Degree)"
            para="Jindal Global Law School (JGLS)"
          />
          <Course
            img="/law.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/law-llm-dispute-resolution-jgls?ref=X7arUU"
            heading="LL.M. in Dispute Resolution | LL.M."
            para="Jindal Global Law School (JGLS)"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Marketing courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/marketing.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/digital-marketing-and-communication-pgc-mica?ref=X7arUU"
            heading="Advanced Certificate in Digital Marketing and Communication | MICA, upGrad | Advanced Certificate"
            para="MICA and upGrad"
          />
          <Course
            img="/marketing.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/edp-in-digital-marketing-from-xlri/?ref=X7arUU"
            heading="Executive Development Program In Digital Marketing"
            para="Xavier School of Management"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the AI/ML courses offered by upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/ai.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/machine-learning-ms-ljmu-iitm/?ref=X7arUU"
            heading="MS in Machine Learning & AI | Master of Science"
            para="IIT Madras and Liverpool John Moores University"
          />
          <Course
            img="/ai.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/masters-in-ml-ai-ljmu-iiitb/?ref=X7arUU"
            heading="MS in Machine Learning & AI | Master of Science"
            para="IIIT Bangalore"
          />
          <Course
            img="/ai.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/machine-learning-ai-pgd-iiitb/?ref=X7arUU"
            heading="Executive PG Programme in Machine Learning & AI | Executive PG Programme"
            para="IIIT Bangalore"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        How to study abroad with upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/abroad.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/study-abroad-mba-in-iu-germany?ref=X7arUU"
            heading="Master of Business Administration (90 ECTS) | Master's Degree"
            para="International University of applied Sciences"
          />
          <Course
            img="/abroad.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/mba-60-ects-iu-germany?ref=X7arUU"
            heading="Master of Business Administration (60 ECTS) | Master's Degree"
            para="International University of applied Sciences"
          />
          <Course
            img="/abroad.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.comin/ms-data-science-iu-germany?ref=X7arUU"
            heading="Master in Data Science (120 ECTS) | Master's Degree"
            para="International University of applied Sciences"
          />
        </div>
      </div>
      <h1 className="flex justify-center text-justify text-2xl font-bold text-[#191919] p-0 pt-16 pb-8 md:p-4 px-3 md:px-14">
        What are the Job Guaranteed courses of upGrad?
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Course
            img="/job.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/management-pgp-imt/?ref=X7arUU"
            heading="PG Program in Management | PG Program"
            para=" IMT Ghaziabad"
          />
          <Course
            img="/job.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/full-stack-development-bootcamp/?ref=X7arUU"
            heading="Full Stack Development Bootcamp | PG Certification"
            para="upGrad"
          />
          <Course
            img="/job.jpg"
            height="250px"
            width="400px"
            download="Check out here"
            refer="https://www.upgrad.com/mba-business-analytics-nmims?ref=X7arUU"
            heading="PG Certification in Software Engineering | PG Certification"
            para="upGrad"
          />
        </div>
      </div>
      <button
        id={navbar.font}
        type="button"
        className="flex justify-center text-3xl no-underline text-[#2F4858] font-extrabold mt-16 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto  mb-4 "
      >
        Thank you
      </button>
      <button
        id={navbar.font}
        type="button"
        className="text-3xl no-underline text-[#2F4858] font-extrabold justify-start  mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block mb-4"
      >
        Akshit Kumar rests his words here...
      </button>
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

export default blog5;
