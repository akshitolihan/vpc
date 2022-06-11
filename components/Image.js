import React from 'react'
import Image from "next/dist/client/image";

const Images = (props) => {
  return (
    <>
        <section className="flex justify-center p-0 py-4">
        <Image
                alt="image"
                className="rounded-2xl flex justify-center mr-4"
                src={props.src}
                height="500px"
                width="800px"
              />
        </section>
    </>
  )
}

export default Images;