import React from "react";
import Image from "next/image";
import Link from "next/link";
import navbar from "../styles/Navbar.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const VideoS = (props) => {
  return (
    <>
      <Link id={navbar.josefin} href={props.refer} passHref>
        <section className="max-w-xl break1:max-w-md w-auto cursor-pointer">
          <span className="flex shadow-lg rounded-lg hover:shadow-xl my-4 p-2 bg-white">
            <span className="max-w[100px] md:max-w-[200px] break1:max-w-[160px] flex justify-start p-2">
              <Image
                alt="image"
                className="m-auto rounded-md "
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </span>
            <span id={navbar.josefin} className="w-auto font-semibold py-2">
              <h1>{props.title}</h1>
            </span>
          </span>
        </section>
      </Link>
    </>
  );
};

export default VideoS;
