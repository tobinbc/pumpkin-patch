import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Church Farm Pumpkins</title>
        <meta name="description" content="Church Farm's pumpkin dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousel />
    </>
  );
};

export default Home;
