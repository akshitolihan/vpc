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
const blog1 = () => {
  return (
    <>
      <Head>
        <title>Role of Society in protecting children online</title>
      </Head>

      <Navbar Color="#448AFF" />

      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-lg my-10 border-4 border-[#448AFF]">
          <section className="shadow-top m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <Date date="5 May 2022" />
              <MainHeading heading="Role of Society in protecting children Online" />
              <Images src="/people.jpg" />
              <Begin />
              <Para
                para="Society has a great role in protecting children online. This protection might be related to many things. If the children are given the facility of the internet at a young age it might be unfruitful for the children’s future. Here, Society can play a very important role by educating the children about the use of the internet in a positive way and for good use. " />
              <Para
                para="Society to a great extent is responsible for how the children perceive a thing and what they learn from society. If society is progressive and positive about the internet then the children will also be able to learn the good things from the internet. We should have an open-mindedness in society about the use of the internet for the children and open discussions should happen in the society for the proper discussion of the society." />

              <Para
                para="Protection does not mean that children should not be allowed to use the internet or they can’t go online at all. Protection here means that society should think about how to avoid our children from getting indulged in wrong activities. The fear of society should not stop children to be online but this fear should become a responsibility for society and parents to keep a check on their children if they doing something wrong on the internet." />

              <Para
                para="Children should be given any app or device like a mobile, tablet, etc. in a protected mode so that they can only see the information or the content related to them.Many apps and devices are specially designed for kids and many are providing control in the hands of parents so that they can allow their children to view only selected content for kids. " />
              <Para
                para="Here we can see that the app companies are fulfilling their role in their responsibility as a part of this society. We can see the protected modes in-app like YouTUbe, Hotstar, etc. where age-relevant content is available for the kids." />
              <Para
                para="Society should not have a taboo about the internet and fulfil their roles with good responsibility. We know that, on the internet, there is too much inappropriate content is available which can ruin the lives of children if they get indulged in that. " />
              <Para
                para="Here, should ensure that this type of content should be removed from the internet. Here, comes the great role of the government as it is the democratic system and the government is part of this society so it should ban inappropriate content like porn and do something that becomes inaccessible to children. " />
              <Para
                para="Government should penalize the doers of these types of things. We all are humans and we humans only are doing wrong for our kids and creating this inappropriate content. I suggest here that society should give good moral values and ethics to their children so that we can build a better society." />
              <End />
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default blog1;
