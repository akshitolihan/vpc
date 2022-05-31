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

const blog2 = () => {
  return (
    <>
      <Head>
        <title>Role of Society in protecting children online</title>
      </Head>

      <Navbar />

      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#F8F9FA] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10">
          <section className="m-0 md:m-10 rounded-3xl text-black lg:w-[900px] ">
            <h1
              id={navbar.font}
              className="flex justify-center text-xl font-bold text-[#2F4858] p-0 md:p-4 pt-4"
            >
              05 May 2022
            </h1>
            <h1 className="flex justify-center text-4xl font-bold p-0 md:p-4 pt-4">
              Role of Society in protecting children online
            </h1>

            <div className="flex justify-center p-0 md:p-4 pt-4">
              <Image
                alt="image"
                className="rounded-2xl flex justify-center mr-4"
                src="/people.jpg"
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
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 md:p-4 pt-4 px-3 md:px-14">
                Society has a great role in protecting children online. This
                protection might be related to many things. If the children are
                given the facility of the internet at a young age it might be
                unfruitful for the children’s future. Here, Society can play a
                very important role by educating the children about the use of
                the internet in a positive way and for good use. Society to a
                great extent is responsible for how the children perceive a
                thing and what they learn from society. If society is
                progressive and positive about the internet then the children
                will also be able to learn the good things from the internet. We
                should have an open-mindedness in society about the use of the
                internet for the children and open discussions should happen in
                the society for the proper discussion of the society.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 md:p-4 pt-4 px-3 md:px-14">
                Protection does not mean that children should not be allowed to
                use the internet or they can’t go online at all. Protection here
                means that society should think about how to avoid our children
                from getting indulged in wrong activities. The fear of society
                should not stop children to be online but this fear should
                become a responsibility for society and parents to keep a check
                on their children if they doing something wrong on the internet.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 md:p-4 pt-4 px-3 md:px-14">
                Children should be given any app or device like a mobile,
                tablet, etc. in a protected mode so that they can only see the
                information or the content related to them.Many apps and devices
                are specially designed for kids and many are providing control
                in the hands of parents so that they can allow their children to
                view only selected content for kids. Here we can see that the
                app companies are fulfilling their role in their responsibility
                as a part of this society. We can see the protected modes in-app
                like YouTUbe, Hotstar, etc. where age-relevant content is
                available for the kids.
              </p>
              <p className="flex justify-start text-justify text-2xl font-normal text-[#191919] p-0 md:p-4 pt-4 px-3 md:px-14">
                Society should not have a taboo about the internet and fulfil
                their roles with good responsibility. We know that, on the
                internet, there is too much inappropriate content is available
                which can ruin the lives of children if they get indulged in
                that. Here, should ensure that this type of content should be
                removed from the internet. Here, comes the great role of the
                government as it is the democratic system and the government is
                part of this society so it should ban inappropriate content like
                porn and do something that becomes inaccessible to children.
                Government should penalize the doers of these types of things.
                We all are humans and we humans only are doing wrong for our
                kids and creating this inappropriate content. I suggest here
                that society should give good moral values and ethics to their
                children so that we can build a better society.
              </p>
            </div>
            <button
              id={navbar.font}
              type="button"
              className="text-3xl no-underline text-[#2F4858] font-extrabold justify-center mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block mb-4"
            >
              Thank you
            </button>
            <button
              id={navbar.font}
              type="button"
              className="text-3xl no-underline text-[#2F4858] font-extrabold justify-center  mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block mb-4"
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

export default blog2;
