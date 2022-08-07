import React from "react";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";

const Button = (props) => {
  return (
    <>
      <Link href={props.refer} passHref>
        <span
          style={{ backgroundColor: `${props.bgColor}` }}
          id={navbar.josefin}
          type="button"
          className=" cursor-pointer text-2xl  px-2 rounded-lg rounded-t-2xl rounded-r-xl m-4 font-semibold"
        >
          {props.name}
        </span>
      </Link>
    </>
  );
};

export default Button;
