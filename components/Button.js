import React from "react";
import navbar from "../styles/Navbar.module.css";
import Link from "react-scroll/modules/components/Link";

const Button = (props) => {
  return (
    <>
      <Link href={props.refer}>
        <button
          id={navbar.font}
          type="button"
          className="text-3xl no-underline text-[#ffffff] font-extrabold justify-center bg-[#42e798] mt-4 w-auto  rounded-t-[50px]  rounded-r-[50px] m-auto block"
        >
          {props.button}
        </button>
      </Link>
    </>
  );
};

export default Button;
