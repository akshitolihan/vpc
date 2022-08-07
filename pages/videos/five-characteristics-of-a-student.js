import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Video1 from "../../components/Video1";
import VideoS from "../../components/VideoS";
import navbar from "../../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const video1 = () => {
  return (
    <>
      <Navbar vColor="#448AFF" />
      <section className="grid grid-cols-1 break1:flex break1:justify-around bg-[#FAFAFA]">
        <section>
          <Video1
            title="Installation of R and R Studio | How to install R | How to install R
Studio | Data Science in R Lang "
            id="FWDhVBkcTqo"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in rerum neque sequi assumenda quos doloremque? Itaque officia quasi totam ut voluptatum ea molestiae sequi in nobis? Voluptates, aliquam ipsum?"
            height="100px"
            width="200px"
          />
        </section>
        <section>
          <h1
            id={navbar.josefin}
            className="m-4 my-10 text-2xl text-center font-bold"
          >
            {" "}
            More Videos{" "}
          </h1>

          <VideoS
            title="Installation of R and R Studio | How to install R | How to install R
Studio | Data Science in R Lang "
            id="FWDhVBkcTqo"
            img="/blog-pana.svg"
            height="300px"
            width="500px"
            refer="/videos//five-characteristics-of-a-student"
          />
          <VideoS
            title="Installation of R and R Studio | How to install R | How to install R
Studio | Data Science in R Lang "
            id="FWDhVBkcTqo"
            img="/blog-pana.svg"
            height="300px"
            width="500px"
            refer="/videos//five-characteristics-of-a-student"
          />
          <VideoS
            title="Installation of R and R Studio | How to install R | How to install R
Studio | Data Science in R Lang "
            id="FWDhVBkcTqo"
            img="/blog-pana.svg"
            height="300px"
            width="500px"
            refer="/videos//five-characteristics-of-a-student"
          />
          <VideoS
            title="Installation of R and R Studio | How to install R | How to install R
Studio | Data Science in R Lang "
            id="FWDhVBkcTqo"
            img="/blog-pana.svg"
            height="300px"
            width="500px"
            refer="/videos//five-characteristics-of-a-student"
          />
        </section>
      </section>

      {/* <section className="grid grid-cols-1 break1:flex break1:justify-around bg-[#FAFAFA]">
        <section className="">
          <div className="md:w-  m-10 rounded-md">
            <LiteYouTubeEmbed
              className="rounded-xl"
              aspectHeight={9}
              aspectWidth={16}
              id={"FWDhVBkcTqo"}
              title={
                "Installation of R and R Studio | How to install R | How to install R Studio | Data Science in R Lang"
              }
            />
          </div>
          <div className="m-10 bg-white shadow-lg p-2">
            <h1 className="m-10 text-xl font-[500] max-w-[720px] ">
              Installation of R and R Studio | How to install R | How to install
              R Studio | Data Science in R Lang
            </h1>
            <p className="m-10 text-lg font-normal max-w-[720px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in
              rerum neque sequi assumenda quos doloremque? Itaque officia quasi
              totam ut voluptatum ea molestiae sequi in nobis? Voluptates,
              aliquam ipsum?
            </p>
          </div>
        </section>
        <section className="max-w-xl w-auto">
          <h1 className="text-center m-10 font-bold">More Videos</h1>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
          <span className="flex justify-center shadow-lg m-4 p-4 bg-white">
            <Image
              alt="image"
              className="m-auto rounded-md"
              src="/blog-pana.svg"
              height="100px"
              width="200px"
            />
            <span>
              <h1>
                Installation of R and R Studio | How to install R | How to
                install R Studio | Data Science in R Lang
              </h1>
            </span>
          </span>
        </section>
      </section> */}
      <Footer />
    </>
  );
};

export default video1;
