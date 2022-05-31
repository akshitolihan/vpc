import React from "react";
import Navbar from "./Navbar";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";

const Heading = (props) => {
  return (
    <>
      <div className="flex justify-center pt-8">
        <Link href={props.refer} className="cursor-pointer" passHref>
          <h1
            type="button"
            id={navbar.font}
            className="text-center mr-6 no-underline text-[#ffffff] font-extrabold flex justify-center  bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF]  text-transparent bg-clip-text hover:bg-gradient-to-l mt-4 w-auto h-auto text-4xl rounded-t-[50px]  rounded-r-[50px] cursor-pointer"
          >
            {props.heading}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Heading;
