import React from "react";

const Ads = () => {
  return (
    <>
      <section
        style={{ fontFamily: "Georgia serif" }}
        className="flex justify-center text-2xl md:text-4xl font-bold py-4">
        {props.heading}
      </section>
    </>
  );
};

export default Ads;
