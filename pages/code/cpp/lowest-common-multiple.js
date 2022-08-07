import React from "react";
import Head from "next/dist/shared/lib/head";
import CodeHead from "../../../components/CodeHead";
import Navbar from "../../../components/Navbar";
import Code from "../../../components/Code";
import { useEffect, useState } from "react";
import "prismjs/themes/aksh.css";
import Heading from "../../../components/Heading";
import Footer from "../../../components/Footer";
export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var hello = `#include <iostream>
  #include <bits/stdc++.h>
  using namespace std;
  
  int lcm(int a, int b)
  {
      cout << "Enter first number: ";
      cin >> a;
      cout << "Enter second number: ";
      cin >> b;
      int result = min(a, b);
      while (result > 0)
      {
          if (a % result == 0 && b % result == 0)
          {
              break;
          }
          result--;
      }
      result = (a * b) / result;
      return result;
  }
  
  int main()
  {
      cout << "The LCM is: " << lcm(0, 1);
      return 0;
  }`;

  return (
    <>
      <Head>
        <title>Lowest Common Multiple of two numbers in C++</title>
      </Head>
      <Navbar />
      <CodeHead
        color="#000"
        heading="Lowest Common Multiple of two numbers in C++"
      />
      <div className="flex justify-center ">
        <main className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96">
          <pre className="line-numbers shadow-lg rounded-none">
            <code className="language-jsx">{hello}</code>
          </pre>
        </main>
      </div>
      <Footer />
    </>
  );
}
