import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../../../components/Navbar";
import Code from "../../../components/Code";
import { useEffect, useState } from "react";

import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  var hello = `public class Hello{
    public static void main(String[] args){
        System.out.print("Akshit Kumar");
    }
}`;

  return (
    <>
      <Head>
        <title>Introduction to Java</title>
      </Head>
      <Navbar />
      <section className="grid grid-cols-3 md:flex md:justify-center w-auto mt-8 bg-white text-[#448AFF]">
        <Button refer="/code/html" name="HTML" bgColo="#FF9671" />
        <Button refer="/code/css" name="CSS" bgColo="#F9F871" />
        <Button refer="/code/javascript" name="JavaScript" bgColo="#FF9671" />
        <Button refer="/code/python" name="Python" bgColo="#F9F871" />
        <Button refer="/code/cpp" name="C++" bgColo="#FF9671" />
        <Button refer="/code/java" name="Java" bgColo="#F9F871" />
      </section>
      <Heading refer="/code/java" heading="Introduction to Java" />
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
