import React from "react";
import Head from "next/head";
import { FaApple } from "react-icons/fa";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>Villagepur || Home</title>
      </Head>
      <Navbar />
    </>
  );
};

export default index;
