import React, { useState } from "react";
import Head from "next/head";
import navbar from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FaWineBottle, FaApple, FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head></Head>
      <header style={{ backgroundColor: `${props.bColor}` }} id={navbar.font} className="text-center pb-12 ">
        <nav className="flex items-center justify-between w-full mx-auto flex-wrap flex-col md:flex-row card md:fixed  bg-[#ffffff] md:z-[1] md:shadow-lg shadow-[#EEEEEE]">
          <Link href="/" className="justify-items-start " passHref>
            <div className="hidden lg:justify-start md:inline-flex ml-4 text-center no-underline text-[#2F4858] text-3xl font-extrabold justify-center flex-wrap rounded-xl cursor-pointer">
              <span>Village</span> <span className="text-[#448AFF]">Pur</span>
            </div>
          </Link>
          <div className="text-center no-underline text-[#2F4858] text-xl font-extrabold justify-center  hidden md:flex flex-wrap rounded-xl">
            <span className="p-4 text-xl block">
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
              </Link>
            </span>
            <span className="p-4 text-xl block">
              <Link href="/blog">
                <a style={{ color: `${props.Color}` }} className={router.pathname == "/blog" ? "active" : ""}>
                  Blog
                </a>
              </Link>
            </span>
            <span className="p-4 text-xl block">
              <Link href="/videos">
                <a style={{ color: `${props.vColor}` }} className={router.pathname == "/videos" ? "active" : ""}>
                  Videos
                </a>
              </Link>
            </span>
            <span className="p-4 text-xl block">
              <Link href="/quotes">
                <a className={router.pathname == "/quotes" ? "active" : ""}>
                  Quotes
                </a>
              </Link>
            </span>
            <span className="p-4 text-xl block">
              <Link href="/about">
                <a className={router.pathname == "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
            </span>
          </div>
        </nav>
        <section className="flex justify-between w-full mx-auto flex-wrap flex-col md:flex-row card fixed  bg-[#ffffff] z-[1] shadow-lg shadow-[#EEEEEE]">
        <Link href="/" className="" passHref>
            <div className="md:hidden inline-flex ml-4 text-center no-underline text-[#2F4858] text-3xl font-extrabold justify-center flex-wrap rounded-xl cursor-pointer">
              <span>Village</span> <span className="text-[#448AFF]">Pur</span>
            </div>
          </Link>
        <div className="mr-10 flex justify-between md:hidden  ">
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-[#448AFF] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[blue-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#fff] focus:ring-white "
            aria-controls="mobile-menu "
            aria-expanded="false"
          >
            <span className="sr-only -rotate-6">Open main menu</span>
            {!isOpen ? (
              <FaWineBottle />
            ) : (
              <FaLocationArrow className="-rotate-45" />
            )}
          </button>
          <button
            type="button"
            className="text-left no-underline text-[#000000] font-extrabold justify-center"
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
                  <span className="p-4 text-xl block">
                    <Link href="/">
                      <a className={router.pathname == "/" ? "active" : ""}>
                        Home
                      </a>
                    </Link>
                  </span>
                  <span className="p-4 text-xl block">
                    <Link href="/blog">
                      <a className={router.pathname == "/blog" ? "active" : ""}>
                        Blog
                      </a>
                    </Link>
                  </span>
                  <span className="p-4 text-xl block">
                    <Link href="/videos">
                      <a
                        className={router.pathname == "/videos" ? "active" : ""}
                      >
                        Learn
                      </a>
                    </Link>
                  </span>
                  <span className="p-4 text-xl block">
                    <Link href="/quotes">
                      <a
                        className={router.pathname == "/quotes" ? "active" : ""}
                      >
                        Quotes
                      </a>
                    </Link>
                  </span>
                  <span className="p-4 text-xl block">
                    <Link href="/about">
                      <a
                        className={
                          router.pathname == "/about" ? "active" : ""
                        }
                      >
                        About
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            )}
          </Transition>
        </div></section>
      </header>

    </>
  );
};

export default Navbar;
