import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Video1 from "../../components/Video1";
import VideoS from "../../components/VideoS";
import navbar from "../../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const video3 = () => {
  return (
    <>
      <Head>
        <title>Installation of Pycharm on Windows</title>
      </Head>
      <Navbar vColor="#448AFF" />
      <section className="grid grid-cols-1 break1:flex break1:justify-around bg-[#FAFAFA]">
        <section className="bg-whit ">
          <Video1
            title="Pycharm Installation for Windows || Python Programming || Best IDE for Python || Coding with Pycharm"
            id="irNss8-_ZLM"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in rerum neque sequi assumenda quos doloremque? Itaque officia quasi totam ut voluptatum ea molestiae sequi in nobis? Voluptates, aliquam ipsum?"
          />
        </section>
        <section className="grid justify-center">
          <h1
            id={navbar.josefin}
            className="m-4 my-10 text-2xl text-center font-bold"
          >
            {" "}
            More Videos{" "}
          </h1>

          <VideoS
            img="/thumbnail/R.png"
            height="250px"
            width="500px"
            title="Install R and R Studio on Windows"
            id="FWDhVBkcTqo"
            refer="/videos/r-and-r-studio-installation"
          />
          <VideoS
            img="/thumbnail/Node_js.png"
            height="250px"
            width="500px"
            title="Installing Node.js on Windows"
            id="uJKUnkCB7Qg"
            refer="/videos/node-js-installation"
          />
          <VideoS
            img="/thumbnail/Pycharm.png"
            height="250px"
            width="500px"
            title="Installing Pycharm for Windows"
            id="FWDhVBkcTqo"
            refer="/videos/installation-of-pycharm"
          />
          <VideoS
            img="/thumbnail/Install_VS_Code_Thumbnail.png"
            height="250px"
            width="500px"
            title="Installing VS Code for Windows"
            id="eC0WWw8Chnw"
            refer="/videos/vs-code-installation"
          />
          <VideoS
            img="/thumbnail/Vs_Code_for_Python.png"
            height="250px"
            width="500px"
            title="VS Code for Python"
            id="YkjPeFRTfGk"
            refer="/videos/vs-code-for-python"
          />
          <VideoS
            img="/thumbnail/VS_Code_For_Java.png"
            height="250px"
            width="500px"
            title="VS Code for Java"
            id="I84YeM5lHhM"
            refer="/videos/vs-code-for-java"
          />
          <VideoS
            img="/thumbnail/VS_Code_For_Cpp.png"
            height="250px"
            width="500px"
            title="VS Code C++"
            id="UOYtHPrZheg"
            refer="/videos/vs-code-for-cpp"
          />
          <VideoS
            img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
            height="250px"
            width="500px"
            title="Uninstalling Vs Code for Windows"
            id="o5ZoQc3Zv4c"
            refer="/videos/vs-code-uninstall"
          />

          <VideoS
            img="/thumbnail/Wel_to_CP.png"
            height="250px"
            width="500px"
            title="Welcome to Codepine"
            id="ApZL5T5fQuA"
            refer="/videos/welcome-to-villagepur"
          />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default video3;

{
  /* <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <VideoS
          img="/thumbnail/R.png"
          height="250px"
          width="500px"
          title="Install R and R Studio on Windows"
          id="FWDhVBkcTqo"
          refer = "/videos/r-and-r-studio-installation"
        />
        <VideoS
          img="/thumbnail/Node_js.png"
          height="250px"
          width="500px"
          title="Installing Node.js on Windows"
          id="uJKUnkCB7Qg"
          refer = "/videos/node-js-installation"
        />
        <VideoS
          img="/thumbnail/Pycharm.png"
          height="250px"
          width="500px"
          title="Installing Pycharm for Windows"
          id="FWDhVBkcTqo"
          refer = "/videos/installation-of-pycharm"
        />
        <VideoS
          img="/thumbnail/Install_VS_Code_Thumbnail.png"
          height="250px"
          width="500px"
          title="Installing VS Code for Windows"
          id="eC0WWw8Chnw"
          refer = "/videos/vs-code-installation"
        />
        <VideoS
          img="/thumbnail/Vs_Code_for_Python.png"
          height="250px"
          width="500px"
          title="VS Code for Python"
          id="YkjPeFRTfGk"
          refer = "/videos/vs-code-for-python"
        />
        <VideoS
          img="/thumbnail/VS_Code_For_Java.png"
          height="250px"
          width="500px"
          title="VS Code for Java"
          id="I84YeM5lHhM"
          refer = "/videos/vs-code-for-java"
        />
        <VideoS
          img="/thumbnail/VS_Code_For_Cpp.png"
          height="250px"
          width="500px"
          title="VS Code C++"
          id="UOYtHPrZheg"
          refer = "/videos/vs-code-for-cpp"
        />
        <VideoS
          img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
          height="250px"
          width="500px"
          title="Uninstalling Vs Code for Windows"
          id="o5ZoQc3Zv4c"
          refer = "/videos/vs-code-uninstall"
        />

        <VideoS
          img="/thumbnail/Wel_to_CP.png"
          height="250px"
          width="500px"
          title="Welcome to Codepine"
          id="ApZL5T5fQuA"
          refer = "/videos/welcome-to-villagepur"
        />
      </div> */
}
