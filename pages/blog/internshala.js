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
const blog6 = () => {
  return (
    <>
      <Head>
        <title>Internshala: Trainings and Internships</title>
      </Head>

      <Navbar Color="#448AFF" bColor = '#ffffff'/>
      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10 border-4 border-[#448AFF]">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <Date date="01 June 2022" />
              <MainHeading heading="Internshala: Trainings and Internships" />
              <Images src="/internshala.svg" />
              <Begin />
              <Para para="Today we are going to talk about a platform that is very useful for college students.  In this blog, we are going to talk about what is Internshala and it can be useful for us." />
              <Card2
                heading="Internshala"
                para="You can visit Internshala with the below given link."
                refer="https://trainings.internshala.com/refer/copy_link/ISRP14152888s"
                name="Join here"
              />

              <Para
                para="Internshala, as clear from the name is a platform at which you can apply for internships. It provides students with three things namely Internships, trainings and Specializations.
              "
              />
              <Para
                para="It provides internships in all domains. So you can get an internship related to your field. People who need interns the internship information on the platform and students can apply for any internship suiting their skill set. It provides you with a verified internship provides so as to protect the students from any fraud and strictly ask students to not pay any fee and report if any internship provider asks for it.
              "
              />
              <Card2
                heading="Apply for Internships"
                para="You can join apply for Internships with the below given link."
                refer="https://internshala.com/internships"
                name="Join here"
              />
              <Para para="Internshala also provides more than 75+ training in different fields from engineering to arts. The training offered by Internshala is very affordable and the concepts are covered in deep. I have also completed training in C/C++ from this platform and it was really enriching. You can get any training for about one and a half thousand." />
              <Card2
                heading="Intenshala Trainings"
                para="You can join Intenshala Trainings with the below given link."
                refer="https://trainings.internshala.com/refer/copy_link/ISRP14152888"
                name="Join here"
              />
              <Para para="Internshala recently launched their skill pass in which they are offering all the 75+ trainings to you. They are giving two offers one is 6-month access for 2650 Rupees and the other is lifetime access for 3650 Rupees." />
              <Card2
                heading="Intenshala Skill Pass"
                para="You can get Skill Pass with the below given link."
                refer="https://trainings.internshala.com/internshala_skill_pass/?payment_init_source=homepage_menu_dropdown"
                name="Get here"
              />
              <Para para="Internshala lately introduced the specialization program in several fields. They are guaranteeing a 10k internship after completing the specialization course. The specialization course is also very affordable. Specializations are offered in Digital Marketing, Data Science, and Human Resource Management. The program fee is about 19,000 rupees for now." />
              <Card2
                heading="Intenshala Specialization Programs"
                para="You can join Specialization Programs with the below given link."
                refer="https://trainings.internshala.com/refer/copy_link/ISRP14152888"
                name="Join here"
              />
              <Para
                para="You can also become a campus ambassador of your college or university for Internshala and can win exciting prizes by creating awareness and promoting their platform with your fellows.
              "
              />

              <Card2
                heading="Intenshala Student Partner"
                para="You can join ISP with the below given link."
                refer="https://isp.internshala.com/?utm_source=ISP30&utm_medium=1819887&utm_campaign=Chandigarh%20University"
                name="Join here"
              />
              <Para
                para="IST Practicals is a series of free online masterclasses delivered by Industry experts. These 45 minutes sessions are all about teaching students important concepts, softwares and tools.
              Every IST Practical is an opportunity to experience practical learning!
              "
              />
              <Card2
                heading="IST Practicals"
                para="You can join IST Practicals with the below given link."
                refer="https://trainings.internshala.com/Ist_practicals/refer/whatsapp/15733753"
                name="Join here"
              />
              <End />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default blog6;
