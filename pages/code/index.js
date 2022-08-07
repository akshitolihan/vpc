import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../../components/Navbar";
import Code from "../../components/Code";
import { useEffect, useState } from "react";

import Prism from "Prismjs";
import Heading from "../../components/Heading";
import Heading2 from "../../components/Heading2";
import Image from "next/dist/client/image";
import navbar from "../../styles/Navbar.module.css";
import Link from "next/dist/client/link";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import "../styles/globals.css";
import "../styles/aksh.css";
export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var code1 = `#include <iostream>
  using namespace std;
  
  int main(){
  
      //  Print program
      cout << "Hello Akshit";
      return 0;
  }`;

  var code2 = `print("Hello world")
print("Hello world")`;

  return (
    <>
      <Head>
        <title>Learn to Code</title>
      </Head>
      <Navbar />
      <section className="flex justify-center pb-20 bg-white w-full">
        <section className="grid grid-cols-3 md:flex md:justify-center w-full mt-8 bg-white text-[#448AFF] ">
          <Button refer="/code/html" name="HTML" bgColo="#FF9671" />
          <Button refer="/code/css" name="CSS" bgColo="#F9F871" />
          <Button refer="/code/javascript" name="JavaScript" bgColo="#FF9671" />
          <Button refer="/code/python" name="Python" bgColo="#F9F871" />
          <Button refer="/code/cpp" name="C++" bgColo="#FF9671" />
          <Button refer="/code/java" name="Java" bgColo="#F9F871" />
        </section>
      </section>
      <Carousel
        img="/code.svg"
        height="450px"
        width="910px"
        heading="Learn To CoDe"
        para="Keep Coding Solutions"
        one="Code"
      />

      <Heading2 heading="Start Learning to Code" />
      <Footer />
    </>
  );
}
