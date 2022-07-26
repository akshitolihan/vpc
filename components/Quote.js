// import React from 'react'

// const Quote = () => {
//   return (
//     <>
//         <section>
//             <section>

//             </section>
//             <section>

//             </section>
//         </section>
//     </>
//   )
// }

// export default Quote;

import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import { BsChatQuoteFill, } from "react-icons/bs"

const Quote = (props) => {
  return (
    <>
      <section className="flex justify-center">
        <section className="cursor-pointer shadow-lg hover:shadow-2xl rounded-xl p-4 max-w-[400px] md:max-w-[900px] m-4">
          <section>
            <div className="hidden md:flex justify-center">
              <div style={{ backgroundColor: `${props.bgColor}` }}
                className="w-auto md:flex md:justify-center md:w-full border-2 bg-[#ff2424]  rounded-lg">
                <Image

                  alt="home"
                  className="block"
                  src={props.img}
                  height={props.height}
                  width={props.width}
                />
              </div>
            </div>
          </section>
          <section className="mx-4">
            <div style={{ backgroundColor: `${props.bgColor}` }}
              className="w-auto justify-center md:w-full md:hidden border-2 mx-0 rounded-lg">
              <Image
                alt="home"
                className="block "
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </div>
            <h2
              id={navbar.font}
              type="button"
              className="text-xl font-bold text-center text-[#000000]"
            >
              {props.name}
            </h2>
            <span className="rotate-180 text-2xl">
              <BsChatQuoteFill className="rotate-180 text-[#000000]" />
            </span>
            <h1
              // style={{ fontFamily: "Georgia serif" } }
              id={navbar.font}
              type="button"
              className="text-3xl text-center font-bold py-8 text-[#000000] tracking-[0.04em] min-w-lg max-w-xl"
            >
              {props.quote}
            </h1>
            <span className="flex justify-end text-2xl">
              <BsChatQuoteFill className="text-[#000000]"/>
            </span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Quote;
