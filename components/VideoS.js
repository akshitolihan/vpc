import React from "react";
import Image from "next/image";
import Link from "next/link";
import navbar from "../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const VideoS = (props) => {
  return (
    <>
      <Link id={navbar.lora} href={props.refer} passHref>
        <section className="max-w-xl w-auto cursor-pointer">
          <span className="flex justify- shadow-lg rounded-lg hover:shadow-xl m-4 p-4 bg-white">
            <span className="max-w-[200px] flex justify-start p-2">
            <Image
              alt="image"
              className="m-auto rounded-md "
              src={props.img}
              height={props.height}
              width={props.width}
            /></span>
            <span id={navbar.lora} className="w-auto font-semibold">
            
              <h1>{props.title}</h1>
            </span>
          </span>
        </section>
      </Link>
    </>
  );
};

export default VideoS;
