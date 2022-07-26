import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import BlogCard from "../../components/BlogCard";
import Books from "../../components/Books";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import BlogCardR from "../../components/BlogCardR";

const blog = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Blog</title>
      </Head>
      <Navbar />
      <Carousel
        img="/blog-pana.svg"
        height="450px"
        width="910px"
        heading="Welcome To Blogs"
        para="Keep Reading, Keep Knowing."
        one="Blogs"
      />
      <Heading heading="Blogs Here" refer="/blog" />

        <div className="my-4">
          {/* <Books

            img="/top-learning-platforms.jpg"
            height="400px"
            width="500px"
            download="Read More"
            refer1="/blog/top-online-learning-platforms"
            refer2="/blog/top-online-learning-platforms"

            heading="Top Online Learning Platforms"
            para="In this blog, we will target college students and talk about Top Online Learning Platforms and their resources that can benefit any student. This will be useful for anyone who wants to learn deeply ..."
          /> */}
          <BlogCard
            date="9 June 2022"
            img="/top-learning-platforms.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/top-online-learning-platforms"
            heading="Top Online Learning Platforms"
            para="In this blog, we will target college students and talk about Top Online Learning Platforms and their resources that can benefit any student. This will be useful for anyone who wants to learn deeply ..."
          />
          <BlogCardR
            date="1 June 2022"
            img="/internshala.svg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/internshala"
            heading="Internshala: Trainings and Internships"
            para="Today we are going to talk about a platform that is very useful for college students. In this blog, we are going to talk about what is Internshala and it can be useful  ..."
          />
          <BlogCard
            date="15 May 2022"
            img="/upgrad.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/upgrad-courses"
            heading="Online Learning : Courses Offered By upGrad"
            para=" Online education has become an important part of one’s learning
                process. We have evolved so much that we can educate ourselves
                by sitting at home. There are so ..."
          />
          <BlogCardR
            date="12 May 2022"
            img="/education.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/right-to-education-and-right-education"
            heading="Right To Education and Right Education"
            para="There is not any clearcut answer to this question. We can consider the good or the bad things about social media. In this article, we will be having a view on that.Social media ..."
          />
          <BlogCard
            date="10 May 2022"
            img="/Social_media.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/social-media-good-or-bad"
            heading="Social Media, Good or Bad?"
            para="There is not any clearcut answer to this question. We can consider the good or the bad things about social media. In this article, we will be having a view on that.Social media has its pros and cons as other things have. It ..."
          />
          <BlogCardR
            date="8 May 2022"
            img="/Robots.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/robots-will-reduce-employment"
            heading="Robots Will Reduce Human Employment"
            para="Starting off by saying a famous line change is the only
            constant. So, what I mean is that every then and now the world
            is changing rapidly. Robot advancement is a part ..."
          />
          <BlogCard
            date="5 May 2022"
            img="/people.jpg"
            height="400px"
            width="500px"
            one="Read More"
            refer="/blog/role-of-society-protecting-online"
            heading="Role of Society Protecting Online"
            para="Society has a great role in protecting children online. This
            protection might be related to many things. If the children are
            given the facility of the internet at a young age it might be
            unfruitful for the children’s future..."
          />
      </div>
      <Footer />
    </>
  );
};

export default blog;
