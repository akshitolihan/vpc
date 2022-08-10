import React from 'react'

const Output = (props) => {
  return (
    <section className="flex justify-center">
    <div className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96 bg-[#474747] text-white rounded-sm">
    <pre className="shadow-lg rounded-none p-4 py-2">
          <code className="language-jsx">{props.op}</code>
        </pre>    </div>
    </section>
//      <div className="flex justify-center">
//      <main className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96">
//        <pre className="line-numbers shadow-lg rounded-none">
//          <code className="language-jsx">{props.code}</code>
//        </pre>
//      </main>
//    </div>
  )
}

export default Output;