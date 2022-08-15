import React from 'react'

const Output = (props) => {
  return (
    <section className="flex justify-center">
    <div className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96 bg-[#2A2734] text-white rounded-sm">
    <pre className="shadow-lg rounded-none p-4 py-2">
          <code >{props.op}</code>
        </pre>    </div>
    </section>
  )
}

export default Output;