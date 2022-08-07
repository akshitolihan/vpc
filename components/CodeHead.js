import React from "react";
import navbar from "../styles/Navbar.module.css";

const CodeHead = (props) => {
  return (
    <>
      <section className="flex justify-center my-12">
        <p
          style={{ color: `${props.color}` }}
          id={navbar.josefin}
          className="text-4xl font-bold text-center max-w-xl"
        >
          {props.heading}
        </p>
      </section>
    </>
  );
};

export default CodeHead;
