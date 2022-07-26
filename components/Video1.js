import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Video1 = (props) => {
  return (
    <>

            
        <section id={navbar.lora}  className="">
          <div  className="md:w-  m-10 rounded-md">
            <LiteYouTubeEmbed
              className="rounded-xl"
              aspectHeight={9}
              aspectWidth={16}
              id={props.id}
              title={props.title}
            />
          </div>
          <div className="m-10 bg-white shadow-lg p-2">
            <h1 className="m-2 my-4 text-xl font-[600] max-w-[720px] ">
              {props.title}
            </h1>
            {/* <p className="m-2 text-base font-normal max-w-[720px] ">
              {props.description}
            </p> */}
          </div>
        </section>
    </>
  );
};

export default Video1;
