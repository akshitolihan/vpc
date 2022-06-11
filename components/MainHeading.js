import React from "react";
import navbar from "../styles/Navbar.module.css";

const MainHeading = (props) => {
  return (
    <>
      <section
        style={{ fontFamily: "Georgia serif" }}
        className="flex justify-center text-4xl font-bold p-0 py-4"
      >
        {props.heading}
      </section>
    </>
  );
};

export default MainHeading;
