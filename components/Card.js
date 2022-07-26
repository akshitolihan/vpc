import React from "react";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import { RiMessage3Fill } from "react-icons/ri";

const Card = (props) => {
  return (
    <>
      <section className="flex justify-center">
        <Link href={props.refer} passHref>
          <a href="" target="_blank" rel="noopener noreferrer">
            <section style={{ backgroundColor: `${props.bgColor}` }} className="flex cursor-pointer shadow-lg hover:shadow-2xl rounded-xl p-4 max-w-[400px] md:max-w-[400px] m-4">
              <section>
                <div className="md:flex justify-center">
                  <div

                    className="w-auto md:flex md:justify-center md:w-full rounded-lg"
                  >
                    <Image
                      alt="home"
                      className="block rounded-lg"
                      src={props.img}
                      height={props.height}
                      width={props.width}
                    />
                  </div>
                </div>
              </section>
              <section className="mx-4">
                <section className="inline-flex justify-evenly my-4">
                  <h1
                    id={navbar.font}
                    type="button"
                    className="text-3xl text-center font-bold text-[#ffffff] min-w-lg max-w-xl"
                  >
                    {props.heading}
                  </h1>
                </section>
              </section>
            </section>
          </a>
        </Link>
      </section>
    </>
  );
};

export default Card;
