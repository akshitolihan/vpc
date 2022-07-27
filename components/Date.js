import React from "react";
import navbar from "../styles/Navbar.module.css";

const Date = (props) => {
  return (
    <>
      <section
        id={navbar.uchen}
        className="flex justify-center text-xl font-bold text-[#2F4858] p-0 py-2"
      >
        {props.date}
      </section>
    </>
  );
};

export default Date;
