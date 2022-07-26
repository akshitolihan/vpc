import React from "react";
import Image from "next/image";
import Link from "next/link";
import navbar from "../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const VideoV = (props) => {
  return (
    <>
      <Link id={navbar.lora} href={props.refer} passHref>
        <section className="max-w-xl w-auto cursor-pointer">
          <span className="flex justify-start shadow-lg rounded-lg hover:shadow-xl m-4 p-4 bg-white">
            <span className="max-w-[300px] flex justify-start p-2">
            <Image
              alt="image"
              className="m-auto rounded-md" 
              src={props.img}
              height={props.height}
              width={props.width}
            /></span>
            <div id={navbar.lora} className="w-auto font-semibold pt-10">
            
              <h1>{props.title}</h1>
            </div>
          </span>
        </section>
      </Link>
    </>
  );
};

export default VideoV;
