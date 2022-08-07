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
  #include <conio.h>
  using namespace std;
  
  int gcd(int a, int b)
  {
      cout << "Enter first number: ";
      cin >> a;
      cout << "Enter second number: ";
      cin >> b;
      int result = min(a, b);
      while (result > 0)
      {
          // cout << result << "\n";
          if (a % result == 0 && b % result == 0)
          {
              break;
          }
          result--;
      }
      return result;
  }
  
  int main()
  {
  
      cout<< "The Greatest Common Divisor is : " << gcd(10, 20);
  
      return 0;
      getchar();
  }`;

  return (
    <>
      <Head>
        <title>Greatest Common Divisor of two numbers in C++</title>
      </Head>
      <Navbar />
      <CodeHead
        color="#000"
        heading="Greatest Common Divisor of two numbers in C++"
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
