// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import "../styles/globals.css";
// import "../styles/tomorrow.css";
import "prismjs/themes/prism-tomorrow.min.css";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-DFZ3EC0TFK`}
      />

      <Script id="analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', 'G-DFZ3EC0TFK');
        `}
      </Script>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6898963328156558"
      ></script>
      <NextNProgress
        color="#42e798"
        startPosition={0.5}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
