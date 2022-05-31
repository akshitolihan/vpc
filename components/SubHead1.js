import React from 'react'
import navbar from "../styles/Navbar.module.css";

const SubHead1 = (props) => {
  return (
    <>
        <section
        id={navbar.georgia}
        className="flex justify-center text-[26px] font-bold p-0 md:p-4 pt-4">
            {props.subhead1}
        </section>
    </>
  )
}

export default SubHead1