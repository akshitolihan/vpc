import React from "react";
import Head from "next/dist/shared/lib/head";
import CodeHead from "../../../components/CodeHead";
import Navbar from "../../../components/Navbar";
import Code from "../../../components/Code";
import { useEffect, useState } from "react";

import Heading from "../../../components/Heading";
import Footer from "../../../components/Footer";
export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var hello = `#include <iostream>
  using namespace std;
  
  int main()
  {
  
      int n;
      cout << "Enter a Number : ";
      cin >> n;
      int num = 2;
      bool isPrime = true;
  
      if (num < n)
      {
          while (num < n - 1)
          {
              if (n % num == 0)
              {
                  cout << "Not Prime";
                  isPrime = false;
                  break;
              }
              else
              {
                  num++;
              }
          }
          if (isPrime == true)
          {
              cout << "Number is Prime.";
          }
      }
      return 0;
  }`;

  return (
    <>
      <Head>
        <title>Checking Prime Numbers in C++</title>
      </Head>
      <Navbar />
      <CodeHead color="#000" heading="Checking Prime Numbers in C++" />
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
