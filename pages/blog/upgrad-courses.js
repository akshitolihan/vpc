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
import Card2 from "../../components/Card2";
import Card from "../../components/Card";
import Course from "../../components/Course";

const blog5 = () => {
  return (
    <>
      <Head>
        <title>Online Learning : Courses Offered By upGrad</title>
      </Head>

      <Navbar Color="#448AFF" />
      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10 border-4 border-[#448AFF]">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <Date date="15 May 2022" />
              <MainHeading heading="Online Learning : Courses Offered By upGrad" />
              <Images src="/upgrad.jpg" />
              <Begin />
              <Para para="Online education has become an important part of one’s learning process. We have evolved so much that we can educate ourselves by sitting at home. There are so many platforms that are available for us to take education and upskill ourselves so that we can be able to adapt to the new technology. If we continuously upskill ourselves then it will be easier for anybody to be fitter for the jobs." />

              <Para para="Every then and now we are witnessing new things in the world and these are the things that are going to be the future. Coronavirus has changed the way of education we perceive. Everything was locked in the covid times and all the educational institutions were also closed which led to the growth of many online educational platforms. Today we are going to discuss one such organization." />

              <Para para="upGrad is an online learning platform that is providing a good quality of education to working professionals who want to upskill and don’t want to leave jobs and it can collide with college timings. So any working person can register for any course they want to pursue as per their interest.  " />

              <Para para="It is a very important platform for people who want to change their profession. upGrad covers 360-degree support for any course you choose to pursue. upGrad is also providing programs to undergraduate students from top universities around the globe." />
              <Para para="Students who were not able to take admissions in the universities which they wanted to pursue due to any reason can now enroll themselves in the course to learn from the top universities." />

              <SubHead1 subhead1="The universities which are providing courses on upGrad:" />
              <SubHead2 subhead2="1. University of Arizona" />
              <SubHead2 subhead2="2. Deakin University" />
              <SubHead2 subhead2="3. IIT Madras" />
              <SubHead2 subhead2="4. Indian Institute of Management, Kozhikode" />
              <SubHead2 subhead2="5. Duke Corporate Education" />
              <SubHead2 subhead2="6. Caltech" />
              <SubHead2 subhead2="7. Purdue University" />
              <SubHead2 subhead2="8. Liverpool John Moores University" />
              <SubHead2 subhead2="9. Swiss Schools of Business Management" />
              <SubHead2 subhead2="10. IIIT Bangalore" />
              <SubHead2 subhead2="11. University of Maryland" />
              <SubHead2 subhead2="12. Birla Institute of Management Technology" />
              <SubHead2 subhead2="13. and many others." />
              <SubHead1 subhead1="The upGrad offers numerous courses in different fields from the experts in the fields and the top universities." />
              <SubHead1 subhead1="What are the categories in which upGrad offers courses?" />
              <SubHead2 subhead2="1. MBA" />
              <SubHead2 subhead2="2. Data Science" />
              <SubHead2 subhead2="3. Doctorate" />
              <SubHead2 subhead2="4. Software and Tech" />
              <SubHead2 subhead2="5. Marketing" />
              <SubHead2 subhead2="6. Management" />
              <SubHead2 subhead2="7. AI/ML" />
              <SubHead2 subhead2="8. Law" />
              <SubHead2 subhead2="9. Business Analytics" />
              <SubHead2 subhead2="10. Study Abroad" />
              <SubHead2 subhead2="11. Job Guaranteed" />
              <Card2
                className="tracking-widest"
                font="Georgia serif"
                style={{ fontFamily: "Georgia serif" }}
                heading="Enroll using our code to get discount."
                para=""
                refer="https://www.upgrad.com/?ref=X7arUU/"
                name="X7arUU"
              />
              <SubHead1 subhead1="What are the Data Science courses offered by upGrad?" />


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

              <SubHead1 subhead1="What are the MBA courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Doctorate courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Software and Technology courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Management courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Business Analytics courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Law courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the Marketing courses offered by upGrad?" />


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
              <SubHead1 subhead1="What are the AI/ML courses offered by upGrad?" />


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

              <SubHead1 subhead1="How to study abroad with upGrad?" />


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


              <SubHead1 subhead1="What are the Job Guaranteed courses of upGrad?" />


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
              <End />
            </section>
          </section>
        </section>
      </section>

    </>
  );
};

export default blog5;
