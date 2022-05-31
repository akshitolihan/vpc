import React from 'react'
import navbar from "../styles/Navbar.module.css";

const SubHead2 = (props) => {
  return (
    <>
    <section 
        id={navbar.georgia}
        className="flex justify-center text-[22px] font-bold p-0 md:p-4 pt-4">
        {props.subhead2}
    </section>
</>
  )
}

export default SubHead2