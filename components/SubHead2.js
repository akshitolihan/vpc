import React from 'react'
import navbar from "../styles/Navbar.module.css";

const SubHead2 = (props) => {
  return (
    <>
    <section 
        id={navbar.georgia}
        className="flex text-xl p-0 py-4">
        {props.subhead2}
    </section>
</>
  )
}

export default SubHead2