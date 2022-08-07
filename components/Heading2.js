import React from 'react'
import navbar from "../styles/Navbar.module.css";

const Heading2 = (props) => {
  return (
    <>
      <h1 id={navbar.josefin} className="text-center text-4xl p-6 font-extrabold">{props.heading}</h1>
    </>
  )
}

export default Heading2;