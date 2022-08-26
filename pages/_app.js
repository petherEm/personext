import styled from "styled-components";
import "./styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Piotr Maciejewski</title>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
