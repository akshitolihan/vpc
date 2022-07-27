import React from "react";
import navbar from "../styles/Navbar.module.css";

const Text = (props) => {
  return (
    <>
      <section className="flex justify-center">
        <p
          style={{ color: `${props.color}` }}
          id={navbar.uchen}
          className="text-2xl font-bold text-center max-w-xl py-2"
        >
          {props.text}
        </p>
      </section>
    </>
  );
};

export default Text;
