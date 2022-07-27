import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";

const BlogCardR = (props) => {
  return (
    <>
      <section className="flex justify-end ">
        <Link href={props.refer} passHref>
          <section className="flex cursor-pointer shadow-lg hover:shadow-2xl rounded-xl p-4 max-w-[400px] md:max-w-[900px] m-4">
            <section>
              <div className="hidden md:flex justify-center">
                <div className="w-auto md:flex md:justify-center md:w-full">
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
            <section className="mx-4">
              <div className="w-auto justify-center md:w-full md:hidden mx-0">
                <Image
                  alt="home"
                  className="block"
                  src={props.img}
                  height={props.height}
                  width={props.width}
                />
              </div>
              <h2
                id={navbar.uchen}
                type="button"
                className="md:text-base font-extrabold text-[#616161] mb-4"
              >
                {props.date}
              </h2>
              <h1
                style={{ fontFamily: "Georgia serif" }}
                type="button"
                className="text-2xl md:text-3xl font-extrabold text-[#000000]"
              >
                {props.heading}
              </h1>
              <p
                style={{ fontFamily: "Georgia serif" }}
                className="text-justify max-w-4xl text-lg  tracking-wider break2:w-[500px] md:w-96"
              >
                {props.para}
              </p>
              <span
                id={navbar.uchen}
                type="button"
                className="text-base text-[#ffffff] bg-[#448AFF] px-2 rounded-t-[50px] rounded-r-[50px] mt-4 font-bold "
              >
                {props.one}
              </span>
            </section>
          </section>
        </Link>
      </section>
    </>
  );
};

export default BlogCardR;
