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
            img="/top-learning-platforms.jpg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/top-online-learning-platforms"
            refer2="/blog/top-online-learning-platforms"
            heading="Top Online Learning Platforms"
            para="In this blog, we will target college students and talk about Top Online Learning Platforms and their resources that can benefit any student. This will be useful for anyone who wants to learn deeply ..."
          />
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
            para="Starting off by saying a famous line change is the only
            constant. So, what I mean is that every then and now the world
            is changing rapidly. Robot advancement is a part of that ..."
          />
          <Books
            img="/people.jpg"
            height="250px"
            width="400px"
            download="Read More"
            refer1="/blog/role-of-society-protecting-online"
            refer2="/blog/role-of-society-protecting-online"
            heading="Role of Society Protecting Online"
            para="Society has a great role in protecting children online. This
            protection might be related to many things. If the children are
            given the facility of the internet at a young age it might be
            unfruitful for the children’s future..."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blog;
