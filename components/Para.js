import React from "react";
import navbar from "../styles/Navbar.module.css";

const Para = (props) => {
  return (
    <>
      <section
        style={{ fontFamily: "Georgia serif" }}
        className="flex justify-start text-justify text-[22px] font-normal text-[#191919] p-0 py-4"
      >
        {props.para}
      </section>
    </>
  );
};

export default Para;
