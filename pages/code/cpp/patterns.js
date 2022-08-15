import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../../../components/Navbar";
import Code from "../../../components/Code";
import Output from "../../../components/Output";
import { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Footer from "../../../components/Footer";
import CodeHead from "../../../components/CodeHead";
import navbar from "../../../styles/Navbar.module.css";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Pattern programs in C++ </title>
      </Head>
      <Navbar />
      <CodeHead color={``} heading="Pattern programs in C++" />
      <h1
        id={navbar.josefin}
        className="text-center text-3xl p-6 font-extrabold"
      >
        Code
      </h1>
      <Code
        code={`#include <iostream>
using namespace std;


int main(){

    int n;
    int i = 1;
    cin>>n;
    while (i<=n)
    {
    int j =1;
    while (j<=n)
    {
        cout<<"*";          
        j++;
    }
        cout<<"\n";
    i++;
    }
    

    return 0;
}`}
      />

      <h1
        id={navbar.josefin}
        className="text-center text-3xl p-6 font-extrabold"
      >
        Output
      </h1>
      <Output
        op={`Caused by:
    0: failed to process input file
    1: Syntax Error `}
      />
      <Footer />
    </>
  );
}
