import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import Video from "../../components/Video";
import Heading2 from "../../components/Heading2";
import Footer from "../../components/Footer";
import VideoV from "../../components/VideoV";
const learn = () => {
  return (
    <>
      <Head>
        <title>Villagepur ~ Videos</title>
      </Head>
      <Navbar />
      <Carousel
        img="/webinar-pana.svg"
        height="450px"
        width="910px"
        heading="Learn With Us"
        para="Beware and Keep Watching..."
        one="Watch"
      />
          <Heading2 heading="Videos" />
      <div className="flex justify-around">
        <div className="grid md:grid-cols-2 justify-items-stretch">
          <VideoV
            img="/thumbnail/R.png"
            height="250px"
            width="500px"
            title="Install R and R Studio on Windows"
            id="FWDhVBkcTqo"
            refer="/videos/r-and-r-studio-installation"
          />
          <VideoV
            img="/thumbnail/Node_js.png"
            height="250px"
            width="500px"
            title="Installing Node.js on Windows"
            id="uJKUnkCB7Qg"
            refer="/videos/node-js-installation"
          />
          <VideoV
            img="/thumbnail/Pycharm.png"
            height="250px"
            width="500px"
            title="Installing Pycharm for Windows"
            id="FWDhVBkcTqo"
            refer="/videos/installation-of-pycharm"
          />
          <VideoV
            img="/thumbnail/Install_VS_Code_Thumbnail.png"
            height="250px"
            width="500px"
            title="Installing VS Code for Windows"
            id="eC0WWw8Chnw"
            refer="/videos/vs-code-installation"
          />
          <VideoV
            img="/thumbnail/Vs_Code_for_Python.png"
            height="250px"
            width="500px"
            title="VS Code for Python"
            id="YkjPeFRTfGk"
            refer="/videos/vs-code-for-python"
          />
          <VideoV
            img="/thumbnail/VS_Code_For_Java.png"
            height="250px"
            width="500px"
            title="VS Code for Java"
            id="I84YeM5lHhM"
            refer="/videos/vs-code-for-java"
          />
          <VideoV
            img="/thumbnail/VS_Code_For_Cpp.png"
            height="250px"
            width="500px"
            title="VS Code C++"
            id="UOYtHPrZheg"
            refer="/videos/vs-code-for-cpp"
          />
          <VideoV
            img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
            height="250px"
            width="500px"
            title="Uninstalling Vs Code for Windows"
            id="o5ZoQc3Zv4c"
            refer="/videos/vs-code-uninstall"
          />

          <VideoV
            img="/thumbnail/Wel_to_CP.png"
            height="250px"
            width="500px"
            title="Welcome to Codepine"
            id="ApZL5T5fQuA"
            refer="/videos/welcome-to-villagepur"
          />
        </div>{" "}
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Video
          img="/thumbnail/R.png"
          height="250px"
          width="500px"
          heading="Install R and R Studio on Windows"
          para=""
          refer="https://www.youtube.com/embed/FWDhVBkcTqo"
          watch="https://www.youtube.com/embed/FWDhVBkcTqo"
        />
        <Video
          img="/thumbnail/Node_js.png"
          height="250px"
          width="500px"
          heading="Installing Node.js on Windows"
          para=""
          refer="https://www.youtube.com/embed/uJKUnkCB7Qg"
          watch="https://www.youtube.com/embed/uJKUnkCB7Qg"
        />
        <Video
          img="/thumbnail/Pycharm.png"
          height="250px"
          width="500px"
          heading="Installing Pycharm for Windows"
          para=""
          refer="https://www.youtube.com/embed/FWDhVBkcTqo"
          watch="https://www.youtube.com/embed/FWDhVBkcTqo"
        />
        <Video
          img="/thumbnail/Install_VS_Code_Thumbnail.png"
          height="250px"
          width="500px"
          heading="Installing VS Code for Windows"
          para=""
          refer="https://www.youtube.com/embed/eC0WWw8Chnw"
          watch="https://www.youtube.com/embed/eC0WWw8Chnw"
        />
        <Video
          img="/thumbnail/Vs_Code_for_Python.png"
          height="250px"
          width="500px"
          heading="VS Code for Python"
          para=""
          refer="https://www.youtube.com/embed/YkjPeFRTfGk"
          watch="https://www.youtube.com/embed/YkjPeFRTfGk"
        />
        <Video
          img="/thumbnail/VS_Code_For_Java.png"
          height="250px"
          width="500px"
          heading="VS Code for Java"
          para=""
          refer="https://www.youtube.com/embed/I84YeM5lHhM"
          watch="https://www.youtube.com/embed/I84YeM5lHhM"
        />
        <Video
          img="/thumbnail/VS_Code_For_Cpp.png"
          height="250px"
          width="500px"
          heading="VS Code C++"
          para=""
          refer="https://www.youtube.com/embed/UOYtHPrZheg"
          watch="https://www.youtube.com/embed/UOYtHPrZheg"
        />
        <Video
          img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
          height="250px"
          width="500px"
          heading="Uninstalling Vs Code for Windows"
          para=""
          refer="https://www.youtube.com/embed/o5ZoQc3Zv4c"
          watch="https://www.youtube.com/embed/o5ZoQc3Zv4c"
        />

        <Video
          img="/thumbnail/Wel_to_CP.png"
          height="250px"
          width="500px"
          heading="Welcome to Codepine"
          para=""
          refer="https://www.youtube.com/embed/ApZL5T5fQuA"
          watch="https://www.youtube.com/embed/ApZL5T5fQuA"
        />
      </div> */}

      <Footer />
    </>
  );
};

export default learn;
