import React from "react";
import Image from "next/image";
import Link from "next/link";

const Book2 = (props) => {
  return (
    <>
      <div className="flex justify-center w-full  ">
        <div className="m-12 bg-white rounded-2xl p-6 text-white shadow-lg scale-95 hover:scale-100 transition duration-700 ease-in-out mt-4 hover:shadow-2xl">
          <Link href={props.refer}>
            <a href={props.refer} download target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
              <Image
                src={props.img}
                height={props.height}
                width={props.width}
              />
            </a>
          </Link>
          <h2 className="text-black text-lg text-justify pb-6">
            {props.heading}
          </h2>
          <a href={props.download} download target="_blank" rel="noopener noreferrer" className="bg-white text-white mt-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mb-2 shadow rounded-[40px] shadow-purple-500/60 rounded-t-[100px]  rounded-r-[100px] flex justify-center">
            Download
          </a>
        </div>
      </div>
      
    </>
  );
};

export default Book2;
