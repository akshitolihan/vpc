import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Video1 = (props) => {
  return (
    <>
      <section id={navbar.josefin} className="">
        <div className="m-2 md:m-10 rounded-lg bg-[#d7e8ff] p-2 z-1 overflow-hidden ">
          <div className="z-1 rounded-lg overflow-hidden"> 
          <LiteYouTubeEmbed
            className="rounded-xl m-2 z-1"
            aspectHeight={9}
            aspectWidth={16}
            id={props.id}
            title={props.title}
          /></div>
        </div>
        <div className="md:m-10 m-2 bg-white shadow-lg p-2">
          <h1 className="m-2 my-4 text-xl font-unde font-[600] max-w-[840px] ">
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
