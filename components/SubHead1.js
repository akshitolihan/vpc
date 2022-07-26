import React from 'react'
import navbar from "../styles/Navbar.module.css";

const SubHead1 = (props) => {
  return (
    <>
        <section
        id={navbar.georgia}
        className="flex justify-center text-2xl font-bold p-0 py-6">
            {props.subhead1}
        </section>
    </>
  )
}

export default SubHead1