import React from "react";
import navbar from "../styles/Navbar.module.css";

const End = () => {
  return (
    <>
      <section
        id={navbar.font}
        // style={{ fontFamily: "Georgia serif" }}
        className="text-justify text-[26px] font-semibold text-[#1DE9B6] p-0 py-4 "
      >
        <section className="rounded-xl shadow-lg h-[6px] w-auto max-w-[600px] bg-[#1DE9B6] mb-2"></section>
        <section>
          Thank You <br />
          Akshit Kumar rests his words here...
        </section>
      </section>
    </>
  );
};

export default End;
