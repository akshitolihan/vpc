import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../../../components/Navbar";
import Code from "../../../components/Code";
import { useEffect, useState } from "react";
import "prismjs/themes/aksh.css";
import Heading from "../../../components/Heading";
import Footer from "../../../components/Footer";
import CodeHead from "../../../components/CodeHead";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var hello = `#include <iostream>
  using namespace std;
  
  int main(){
  
      //  Print program
      cout << "Hello Akshit";
      return 0;
  }`;

  return (
    <>
      <Head>
        <title>Hello World program in C++ </title>
      </Head>
      <Navbar />
      <CodeHead color="#000" heading="Program to print Hello World in C++" />
      <div className="flex justify-center ">
        <main className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96">
          <pre className="line-numbers shadow-lg rounded-none">
            <code className="language-jsx">{hello}</code>
          </pre>
        </main>
      </div>
      <Footer/>
    </>
  );
}
