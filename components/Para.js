import React from "react";
import navbar from "../styles/Navbar.module.css";

const Para = (props) => {
  return (
    <>
      <section
        id={navbar.font1}
        style={{ fontFamily: "Georgia serif" }}
        className="flex justify-start text-justify text-[22px] font-normal text-[#191919] p-0 pt-4 md:p-4 px-3 md:px-14"
      >
        {props.para}
      </section>
    </>
  );
};

export default Para;
