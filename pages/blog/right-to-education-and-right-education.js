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

const blog4 = () => {
  return (
    <>
      <Head>
        <title>Right to Education and Right Education</title>
      </Head>
      <Navbar Color="#448AFF" />
      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10 border-4 border-[#448AFF]">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <Date date="12 May 2022" />
              <MainHeading heading="Right to Education and Right Education" />
              <Images src="/education.jpg" />
              <Begin />
              <Para
                para="Today we are discussing about the Right to education and the right education. We will be looking at their importance and the impact of these things on the society." />
              <Para para="We have two things here:" />
              <SubHead1
                subhead1="1. One is the Right to Education" />
              <SubHead1
                subhead1="2. Another is the Right Education" />

              <Para
                para="We will be talking about these two things in detail." />

              <Para
                para="The right to Education act 2008 says that every child ranging between 8 and 14 years of age has the right to education and they should be given proper fundamental education and should not be involved in activities like labour work." />
              <SubHead1
                subhead1="But are these people getting free education?" />

              <Para
                para="I feel that the children whose parents can afford the education for free are getting the education in private schools and colleges but people who are not able to afford the fee of the college or the school are not getting the education. They are getting involved in wrongdoing and child trafficking by some greedy people." />
              <Para
                para="People think that their children will waste time in school and instead of that they can go to some labour work and earn some money for the family and their own expenses. It hurts when I see small kids working in the shops and the stationary and the stalls and not getting the education that they need. There are a lot of problems that these poor kids face at a very young age. These kids are used by some people to beg at traffic signals and other places to earn money. " />
              <Para
                para="These children in the future become full-time beggars, chain snatchers, thieves, murderers and lead their life in jail. The lives of their family also get affected due to these things. We have seen many cases where children are used for doing activities like transporting drugs and there are many rackets of these kinds going on in the country." />

              <Para
                para="The fundamental education system of India is very weak and we are not able to provide even basic education to the kids so that they can use it as a tool to come out of their poverty and illiteracy. We see the schools in the villages in very bad condition. The infrastructure in the schools is very poor even after more than 70 Years of independence." />
              <Para
                para="Teachers in primary school are also not properly trained and skilled to guide the students to the right path and show them the right direction. We see some great talents emerging out from these small places but we don‘t focus on working continuously to improve the infrastructure, teaching quality, accessibility, affordability and interest in the education among the kids." />

              <Para
                para="We see the models of the Delhi government in which they have improved the infrastructure of the school by creating a new building. Also, the government has sent the teachers and the principals to get properly trained in foreign nations. The teachers learned from the education system of those foreign countries and implemented those things for the well-being of the students in the government school. The Delhi govt is claiming that after their governance of seven years they are producing better results from the school that the private schools. And the students are getting selected for the top universities like IITs and NITs and foreign universities as well. They are focussing on the overall development of the student and also enhancing the entrepreneurship spirit among the students and the students are also taking it very seriously and coming up with different ideas and implementing them." />

              <Para
                para="So why can‘t we implement these things all over India? I understand that there will be many many challenges that we will face in implementing these changes in the education system. But if we have positive intent and good policies then we can succeed in implementing these things in PAN India." />

              <Para
                para="We can learn from the mistakes that we have made in the past and also study the education systems of top-performing countries like Sweden, Canada and the US." />
              <SubHead1
                subhead1="Apart from the Right to Education, the thing matter is the Right Education." />
              <SubHead1
                subhead1="The question here arises is that “ Are students getting the right education that will help them to become good and successful people in life? ”" />
              <Para
                para="It is a very serious question and we need to find the answer to this question so as to secure the future of our children. Schools and colleges are charging high fees from the parents to admit their children into their institutes and even after paying a large chunk of money students are not able to get a good education. Students are lacking in many basic things and they face problems as they move to the higher study level. Children are also lacking in moral values which is not a good thing for society as moral and ethical values are the things that must be present in every person in order to bring a good society." />

              <Para
                para="Students are not taught as per the new advancement in technology. That is the reason for the large unemployment rate in the country. Graduates are not taught according to the industry requirements and the company wants candidates that are ready to adapt fast and can multitask. In every field, we see large employability issues for the people who do not acquire the education that is required by the companies. Every day there is something new coming in every field and people need to update their skill sets." />

              <Para
                para="There are a lot of things to do but students are lacking the right guidance so that they can work on developing the skill that they love. Colleges teach a lot of subjects to the students but don’t guide them to choose the right career path for them." />

              <Para
                para="There are many online platforms coming up with the courses and the programs for the students so that they can master one skill rather than focusing on multiple things. They charge much less than the colleges charge the students for providing courses. The online platform also provides better quality education as compared to colleges and universities." />

              <Para
                para="The Indian Government is also doing work in the field of skill development of the skills in the individuals to make them able to get employed. The government introduced the PMKVY to skill the Indian Youth but the result of this scheme is not as per expected. Government should work on making it more effective." />

              <Para
                para="People still believe in the degree culture and we need to get over it. The companies are also considering this thing and allowing the people to apply off-campus even without a degree which means that in the coming time the degree culture might go away and the skilled people will be getting employment even without a degree." />

              <Para
                para="I strongly believe that skill development is the most important thing in today‘s time and taking industry-oriented education is the key to getting employed. We should work on the skill development of the individual along with moral and ethical values." />
              <End />
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default blog4;
