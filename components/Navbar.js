import React, { useState } from "react";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FaApple, FaBoxOpen } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head></Head>
      <header
        id={navbar.font}
        className="shadow-md text-center bg-[#42e798] rounded-b-3xl"
      >
        <nav className="flex items-center  justify-between w-full mx-auto flex-wrap flex-col md:flex-row ">
          <div className="lg:justify-start md:inline-flex ml-4">
            <Link href="/" className="justify-items-start ">
              <Image
                src="/vp.svg"
                width={102 + "px"}
                height={40 + "px"}
                alt="Web Icon"
                className="fill-white"
              />
            </Link>
          </div>

          <div className="text-center no-underline font-[#ffffff] font-extrabold justify-center  hidden md:flex flex-wrap">
            <Link href="/">
              <a className="p-4 text-xl block">Home</a>
            </Link>
            <Link href="/blog">
              <a className="p-4 text-xl block">Blogs</a>
            </Link>
            <Link href="/learn">
              <a className="p-4 text-xl block">Learn</a>
            </Link>
            <Link href="/quotes">
              <a className="p-4 text-xl block">Quotes</a>
            </Link>
            <Link href="/book">
              <a className="p-4 text-xl block">Books</a>
            </Link>
            <Link href="/contact">
              <a className="p-4 text-xl block">Contact</a>
            </Link>
            <Link href="/cu">
              <a className="p-4 text-xl block">CU</a>
            </Link>
          </div>
        </nav>
          <div className="mr-10 flex justify-between md:hidden ">
            <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#2F4858] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[blue-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <FaBoxOpen /> : <FaApple />}
            </button>

            <button
              type="button"
              className="text-left"
            >
              AkshitA
            </button>
          </div>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div
                    ref={ref}
                    className="bg-[#42e798] block px-2 pt-2 pb-3 space-y-1 sm:px-3 font-extrabold"
                  >
                    <Link href="/">
                      <a className="p-2 text-xl block">Home</a>
                    </Link>
                    <Link href="/blog">
                      <a className="p-2 text-xl block">Blogs</a>
                    </Link>
                    <Link href="/learn">
                      <a className="p-2 text-xl block">Learn</a>
                    </Link>
                    <Link href="/quotes">
                      <a className="p-2 text-xl block">Quotes</a>
                    </Link>
                    <Link href="/book">
                      <a className="p-2 text-xl block">Books</a>
                    </Link>
                    <Link href="/contact">
                      <a className="p-2 text-xl block">Contact</a>
                    </Link>
                    <Link href="/cu">
                      <a className="p-2 text-xl block">CU</a>
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
        </div>
      </header>
    </>
  );
};

export default Navbar;
