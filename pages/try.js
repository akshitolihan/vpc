import React from 'react'
import Image from "next/dist/client/image";

const trys = () => {
  return (
    <>

        <section className='shadow-lg max-w-lg flex justify-between p-'>
            <Image
                alt="image"
                className="m-4 sm:m-10"
                src="/html5.png"
                height="1120px"
                width="800px"
              />
        <p className='p-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam, tempore quam magnam aliquam assumenda ratione. Ex cupiditate dicta blanditiis nihil aliquam repellat, cum explicabo eveniet saepe consequuntur, non neque!
        </p>
        </section>
    </>
  )
}

export default trys;