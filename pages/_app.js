import "../styles/globals.css";
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
    {/* Analytics Code  */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MZ240ZGR0H`}
      />

      <Script id="analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', 'G-MZ240ZGR0H');
        `}
      </Script>

{/* Adsense code */}
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-2728688115283691"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <NextNProgress
        color="#448AFF"
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
