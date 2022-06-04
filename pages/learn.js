import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Video from "../components/Video";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
const learn = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Learn</title>
      </Head>
      <Navbar />
      <Carousel
        img="/learn.jpg"
        height="500px"
        width="910 px"
        heading="Learn With Us"
        para="Learning is an important part of everyones life and it should be quality education. You can learn with us about the different fields of computer science. It can enrich your knowledge. Keep learning..."
        one="Blogs"
        two="Quotes"
        three="Books"
      />
      <Heading heading="Videos" refer="/learn" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Video
          img="/thumbnail/Wel_to_CP.png"
          height="250px"
          width="500px"
          heading="WELCOME TO CODEPINE"
          para=""
          refer="https://www.youtube.com/embed/ApZL5T5fQuA"
          watch="https://www.youtube.com/embed/ApZL5T5fQuA"
        />
        <Video
          img="/thumbnail/Install_VS_Code_Thumbnail.png"
          height="250px"
          width="500px"
          heading="INSTALLING VS CODE FOR WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/eC0WWw8Chnw"
          watch="https://www.youtube.com/embed/eC0WWw8Chnw"
        />
        <Video
          img="/thumbnail/Vs_Code_for_Python.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR PYTHON"
          para=""
          refer="https://www.youtube.com/embed/YkjPeFRTfGk"
          watch="https://www.youtube.com/embed/YkjPeFRTfGk"
        />
        <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-en+4-f-xh+1ff"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="4463995591"
      ></ins>

        <Video
          img="/thumbnail/VS_Code_For_Java.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR JAVA"
          para=""
          refer="https://www.youtube.com/embed/I84YeM5lHhM"
          watch="https://www.youtube.com/embed/I84YeM5lHhM"
        />
        <Video
          img="/thumbnail/VS_Code_For_Cpp.png"
          height="250px"
          width="500px"
          heading="VS CODE FOR C++"
          para=""
          refer="https://www.youtube.com/embed/UOYtHPrZheg"
          watch="https://www.youtube.com/embed/UOYtHPrZheg"
        />
        <Video
          img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
          height="250px"
          width="500px"
          heading="UNINSTALLING VS CODE FROM WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/o5ZoQc3Zv4c"
          watch="https://www.youtube.com/embed/o5ZoQc3Zv4c"
        />
              <ins
        className="adsbygoogle  flex justify-center"
        data-ad-format="fluid"
        data-ad-layout-key="-6m+cm+h-9i+l9"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="6707015556"
      ></ins>

        <Video
          img="/thumbnail/R.png"
          height="250px"
          width="500px"
          heading="INSTALLING R IN WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/FWDhVBkcTqo"
          watch="https://www.youtube.com/embed/FWDhVBkcTqo"
        />
        <Video
          img="/thumbnail/Pycharm.png"
          height="250px"
          width="500px"
          heading="INSTALLING PYCHARM FOR WINDOWS"
          para=""
          refer="https://www.youtube.com/embed/FWDhVBkcTqo"
          watch="https://www.youtube.com/embed/FWDhVBkcTqo"
        />
        <Video
          img="/thumbnail/Node_js.png"
          height="250px"
          width="500px"
          heading="NODE JS INSTALL "
          para=""
          refer="https://www.youtube.com/embed/uJKUnkCB7Qg"
          watch="https://www.youtube.com/embed/uJKUnkCB7Qg"
        />
      </div>
      <ins
        className="adsbygoogle  flex justify-center"
        data-ad-client="ca-pub-6898963328156558"
        data-ad-slot="2888842434"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Footer/>

    </>
  );
};

export default learn;
