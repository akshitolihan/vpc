import React from "react";
import navbar from "../styles/Navbar.module.css";

const Text = (props) => {
  return (
    <>
      <section className="flex justify-center my-16">
        <p
          style={{ color: `${props.color}` }}
          id={navbar.josefin}
          className="text-2xl font-bold text-center max-w-xl "
        >
          {props.text}
        </p>
      </section>
    </>
  );
};

export default Text;
