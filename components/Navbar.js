import React, { useState } from "react";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FaWineBottle, FaApple, FaAngleUp } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="5P3r_-9DRMSS2coMO412nNDmsXRWk3W4zECVmpBexvY"
        />
      </Head>
      <header id={navbar.font} className="text-center">
        <nav className="flex items-center justify-between w-full mx-auto flex-wrap flex-col md:flex-row card ">
          <div className="lg:justify-start md:inline-flex ml-4">
            <Link href="/" className="justify-items-start " passHref>
              <Image
                src="/vp.svg"
                width={102 + "px"}
                height={40 + "px"}
                alt="Web Icon"
                className="fill-white cursor-pointer"
              />
            </Link>
          </div>
          <div className="text-center no-underline text-[#2F4858] font-extrabold justify-center  hidden md:flex flex-wrap rounded-xl">
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
            {/* <Link href="/entertainment">
              <a className="p-4 text-xl block">Enjoy</a>
            </Link> */}
            <Link href="/contact">
              <a className="p-4 text-xl block">Contact</a>
            </Link>
            <Link href="/akshitkumar">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <button
                  type="button"
                  className="text-center mr-4 no-underline text-[#ffffff] text-xl font-semibold justify-center bg-gradient-to-r from-[#42e798] via-[#1DE9B6] to-[#00B0FF] hover:bg-gradient-to-l mt-4 w-auto h-auto px-2 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]"
                >
                  AkshitA
                </button>
              </a>
            </Link>
          </div>
        </nav>
        <div className="mr-10 flex justify-between md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-[#2F4858] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[blue-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#42e798] focus:ring-white"
            aria-controls="mobile-menu "
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? <FaWineBottle /> : <FaAngleUp />}
          </button>
          <button
            type="button"
            className="text-left no-underline text-[#2F4858] font-extrabold justify-center"
          >
            <Link href="/akshitkumar">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                AkshitA
              </a>
            </Link>
          </button>
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
                  className="bg-[#] block px-2 pt-2 pb-3 space-y-1 sm:px-3 font-extrabold rounded"
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
                  {/* <Link href="/entertainment">
                    <a className="p-2 text-xl block">Enjoy</a>
                  </Link> */}
                  <Link href="/contact">
                    <a className="p-2 text-xl block">Contact</a>
                  </Link>
                  
                </div>
              </div>
            )}
          </Transition>
        </div>
        <hr/>
      </header>
      {/* <hr/> */}
    </>
  );
};

export default Navbar;
