import React from "react";
import Head from "next/head";
import Script from 'next/script'

const Code = (props) => {
  return (
    <>
    <Head>
    </Head>
    <Script src="https://gist.github.com/akshitvillager/4ab22427c166619d5212079ac67ccb9b" strategy="beforeInteractive"/>
   </>
  ) 
};

export default Code;
// import Script from 'next/script'

// export default function Home() {
//   return (
//     <>
//       <Script src="https://www.google-analytics.com/analytics.js" />
//     </>
//   )
// }