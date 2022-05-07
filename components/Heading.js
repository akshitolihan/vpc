import React from "react";
import Navbar from "./Navbar";
import navbar from "../styles/Navbar.module.css";
import Link from "next/Link";

const Heading = (props) => {
  return (
    <>
      <div className="flex justify-center p-4">
        <Link href={props.refer} className="cursor-pointer">
    
            <h1
              type="button"
              id={navbar.font}
              className="text-center mr-6 no-underline text-[#ffffff] font-extrabold flex justify-center bg-[#ffffff] mt-4 w-auto h-auto text-4xl rounded-t-[50px]  rounded-r-[50px] cursor-pointer"
            >
              {props.heading}
            </h1>
        </Link>
      </div>
    </>
  );
};

export default Heading;
