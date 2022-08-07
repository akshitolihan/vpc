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
            id={navbar.josefin}
            className="text-center mr-6 no-underline font-extrabold flex justify-center text-[#000000] mt-4 w-auto h-auto text-5xl rounded-t-[50px] rounded-r-[50px] cursor-pointer my-8"
          >
            {props.heading}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Heading;
