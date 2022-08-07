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
      <header
        style={{ backgroundColor: `${props.bColor}` }}
        id={navbar.josefin}
        className="tracking-text-center pb-20 md:pb-16"
      >
        <nav className="flex items-center justify-between w-full mx-auto flex-wrap flex-col md:flex-row card md:fixed  bg-[#ffffff] md:z-[1] md:shadow-lg shadow-[#EEEEEE]">
          <Link href="/" className="justify-items-start " passHref>
            {/* <div className="hidden lg:justify-start md:inline-flex ml-4 text-center no-underline text-[#2F4858] text-3xl font-bold justify-center flex-wrap rounded-xl cursor-pointer">
              <span>Village</span> <span className="text-[#448AFF]">Pur</span>
            </div> */}
            <div className="hidden lg:justify-start md:inline-flex ml-4 text-center no-underline text-[#2F4858] text-3xl font-bold justify-center flex-wrap rounded-xl cursor-pointer">
              <Image
                alt="home"
                className="block"
                src="/vpur.svg"
                height="64px"
                width="64px"
              />
            </div>
          </Link>
          <div className="text-center no-underline text-[#2F4858] justify-center font-[700] hidden md:flex flex-wrap rounded-xl">
            <span className="p-4 text-[17px] hover:text-[#448AFF] block">
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
              </Link>
            </span>

            <span className="p-4 text-[17px] hover:text-[#448AFF] block dp cursor-pointer">
              <Link href="/code" passHref>
                <div className=" ">
                  <a
                    style={{ color: `${props.Color}` }}
                    className={router.pathname == "/code" ? "active" : ""}
                  >
                    Code
                  </a>
                  <div className="dp1 px-2 -mx-4 shadow-lg rounded-lg">
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/java">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/java" ? "active" : ""
                          }
                        >
                          Java
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/cpp">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/cpp" ? "active" : ""
                          }
                        >
                          C++
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/python">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/python" ? "active" : ""
                          }
                        >
                          Python
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/html">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/html" ? "active" : ""
                          }
                        >
                          HTML
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/css">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/css" ? "active" : ""
                          }
                        >
                          CSS
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/code/javascript">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/code/javascript"
                              ? "active"
                              : ""
                          }
                        >
                          JavaScript
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </Link>
            </span>
            <span className="p-4 text-[17px] hover:text-[#448AFF]  dp cursor-pointer ">
              <Link href="/blog" passHref>
                <div className=" ">
                  <a
                    style={{ color: `${props.Color}` }}
                    className={router.pathname == "/blog" ? "active" : ""}
                  >
                    Blog
                  </a>
                  <div className="dp1 px-2 -mx-4 shadow-lg rounded-lg">
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/blog/health">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/blog/health" ? "active" : ""
                          }
                        >
                          Health
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/blog/positive">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/blog/positive" ? "active" : ""
                          }
                        >
                          Positive
                        </a>
                      </Link>
                    </span>
                    <span className="text-black hover:text-[#448AFF] p-2">
                      <Link href="/blog/sports">
                        <a
                          style={{ color: `${props.Color}` }}
                          className={
                            router.pathname == "/blog/sports" ? "active" : ""
                          }
                        >
                          Sports
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </Link>
            </span>
            <span className="p-4 text-[17px] hover:text-[#448AFF] block">
              <Link href="/videos">
                <a
                  style={{ color: `${props.vColor}` }}
                  className={router.pathname == "/videos" ? "active" : ""}
                >
                  Videos
                </a>
              </Link>
            </span>
            <span className="p-4 text-[17px] hover:text-[#448AFF] block">
              <Link href="/quotes">
                <a className={router.pathname == "/quotes" ? "active" : ""}>
                  Quotes
                </a>
              </Link>
            </span>
            <span className="p-4 text-[17px] hover:text-[#448AFF] block">
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
            {/* <div className="md:hidden inline-flex ml-4 text-center no-underline text-[#2F4858] text-2xl font-extrabold justify-center flex-wrap rounded-xl cursor-pointer">
              <span>Village</span> <span className="text-[#448AFF]">Pur</span>
            </div> */}
            <div className="md:hidden inline-flex ml-4 text-center no-underline text-[#2F4858] text-2xl font-extrabold justify-center flex-wrap rounded-xl cursor-pointer">
              <Image
                alt="home"
                className="block"
                src="/vpur.svg"
                height="64px"
                width="64px"
              />
            </div>
          </Link>
          <div className="mr-10 flex justify-between md:hidden">
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
              className="text-center no-underline text-[#448AFF] font-[600] justify-center"
            >
              <span>
                <Link href="/akshitkumar">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    AkshitA
                  </a>
                </Link>
              </span>
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
                    className="block px-2 pt-2 pb-3 space-y-1 sm:px-3"
                  >
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
                      <Link href="/">
                        <a className={router.pathname == "/" ? "active" : ""}>
                          Home
                        </a>
                      </Link>
                    </span>
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
                      <Link href="/code">
                        <a
                          className={router.pathname == "/code" ? "active" : ""}
                        >
                          Code
                        </a>
                      </Link>
                    </span>
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
                      <Link href="/blog">
                        <a
                          className={router.pathname == "/blog" ? "active" : ""}
                        >
                          Blog
                        </a>
                      </Link>
                    </span>
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
                      <Link href="/videos">
                        <a
                          className={
                            router.pathname == "/videos" ? "active" : ""
                          }
                        >
                          Learn
                        </a>
                      </Link>
                    </span>
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
                      <Link href="/quotes">
                        <a
                          className={
                            router.pathname == "/quotes" ? "active" : ""
                          }
                        >
                          Quotes
                        </a>
                      </Link>
                    </span>
                    <span className="p-4 text-[17px] hover:text-[#448AFF] block">
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
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
