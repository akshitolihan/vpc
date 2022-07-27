import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import { FaArrowCircleRight, MdMore } from "react-icons/fa";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaArrowAltCircleRight
} from "react-icons/fa";

const Carousel2 = (props) => {
  return (
    <>
      <section className="flex justify-center m-4 my-10 md:m-10 shadow-lg">
        <section>
          <div className="hidden md:flex justify-center">
            <div className=" md:flex md:justify-center md:w-full">
              <Image
                alt="home"
                className="block"
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </div>
          </div>
        </section>
        <section className="md:m-20 md:my-8 sm:m-10 sm:my-6 m-4 my-3">
          {/* <h1
            id={navbar.uchen}
            type="button"
            className="text-4xl md:text-5xl font-extrabold text-[#000000] leading-[60px]"
          >
            {props.num}
          </h1> */}
          <h1
            id={navbar.uchen}
            type="button"
            className="text-4xl md:text-5xl font-extrabold text-[#448AFF] leading-[60px] my-10"
          >
            {props.heading}
          </h1>

          <p
            id={navbar.uchen}
            className="text-justify my-6 max-w-6xl text-xl font-[600]"
          >
            {props.para}
          </p>
          <span
            id={navbar.uchen}
            type="button"
            className="text-2xl cursor-pointer text-[#ffffff] bg-[#448AFF] hover:bg-[#42e798] scale-90 hover:scale-100 ease-in-out duration-1000 px-2 rounded-t-[50px] rounded-r-[50px] my-8 font-bold"
          >
            <Link href={props.refer} passHref>
              <a href="" className="flex justify-center">
                {props.one}<FaArrowCircleRight className="mx-3 my-1" /></a>
            </Link>
          </span>
        </section>
      </section>
    </>
  );
};

export default Carousel2;
