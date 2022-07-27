import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import Button from "./Button";
import navbar from "../styles/Navbar.module.css";

const Book1 = (props) => {
  return (
    <>
      <div className="flex justify-center max-w-sm lg:m-4">
        <div className="shadow-2xl shadow-top m-2 md:m-10  bg-white rounded-3xl p-6 text-white  scale-95 hover:scale-100 transition duration-700 ease-in-out hover:shadow-3xl mt-[16px] ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              alt="image"
              className="rounded-xl"
              src={props.img}
              height={props.height}
              width={props.width}
            />
          </a>

          <h1
            id={1}
            className="text-black text-lg text-justify font-bold mt-2 relative"
          >
            {props.heading}
          </h1>

          <Link href={props.refer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  id={navbar.uchen}
                  className="text-center text-[#fff] font-extrabold bg-[#1DE9B6] w-auto h-auto px-2 py-1 rounded-t-[50px]  rounded-r-[50px]"
                >
                  {props.download}
                </button>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Book1;
