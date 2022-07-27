// import React from "react";
// import navbar from "../styles/Navbar.module.css";
// import Link from "next/link";

// const Card2 = (props) => {
//   return (
//     <>
//       <div className="flex justify-center w-full max-w-[400px] mt-4">
//         <div className="m-2 md:m-10  bg-white rounded-2xl p-6 text-white shadow-lg scale-95 hover:scale-100 transition duration-700 ease-in-out mt-4 hover:shadow-2xl">
//           <h2 id={navbar.uchen} className="text-[#2F4858] text-2xl text-justify font-bold pb-6">
//             {props.heading}
//           </h2>
//           <p id={navbar.uchen} className="text-black text-xl text-justify pb-6">
//             {props.para}
//           </p>
//           <Link href={props.refer}>
//             <a
//               id={navbar.uchen}
//               className="text-center mr-6 no-underline text-[#2F4858] font-extrabold justify-center bg-[#42e798] mt-4 w-auto h-8 rounded-t-[50px]  rounded-r-[50px] align-bottom px-2"
//             >
//               {props.name}
//             </a>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card2;

import React from "react";
import navbar from "../styles/Navbar.module.css";
import Image from "next/image";

const Card2 = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center w-full max-w-[400px] mt-">
          <a
            id={navbar.uchen}
            href={props.refer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <div className="m-0 bg-white rounded-2xl p-6 text-white shadow-lg scale-95 hover:scale-100 transition duration-700 ease-in-out mt-4 hover:shadow-2xl">
              <h2
                id={navbar.uchen}
                className="text-[#000000] text-2xl text-justify font-bold py-6"
              >
                {props.heading}
              </h2>
              <p
                id={navbar.uchen}
                className="text-black text-xl text-justify pb-6 max-w-sm"
              >
                {props.para}
              </p>
              <span
                style={{ fontFamily: `${props.font}` }}
                id={navbar.uchen}
                className="text-[#ffffff] text-xl font-bold text-center bg-[#448AFF] rounded-r-[50px] rounded-t-[50px] p-2"
              >
                {props.name}
              </span>

            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card2;
