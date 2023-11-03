import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js")
       .then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])


  return <>
  <Head>
    <title>Le Parc de Goûts | Location de gîtes.</title>
    <meta
        name="description"
        content="Le Parc de Goûts, votre location de gîtes à Aiguillon."
    />
  </Head>
  <Header />
    <Component {...pageProps} /> 
  <Footer />
  </>
}
