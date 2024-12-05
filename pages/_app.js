import '@styles/globals.css'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (<>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VKCLQ5C1LG"></Script>
    <Script id="google-analytics">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VKCLQ5C1LG');
      `}
    </Script>
    <Component {...pageProps} />
  </>);
}

export default Application
