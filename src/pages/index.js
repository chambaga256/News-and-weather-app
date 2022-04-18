import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import DisplayNews from "../components/DisplayNews";

import Footer from "../components/Footer";
import { getNews } from "../../api/newService";
import { useState } from "react";

//then here we can destructure props = {products}
export default function Home() {
  const [newsFeed,setNewsFeed]=useState([]);

  const getNewsData = async () => {

    const {data:localNews}= await getNews();

    setNewsFeed(localNews.articles);
    console.log(localNews.articles);
  
  }

  getNewsData(); 

 
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon By Roland</title>
      </Head>
      {/* --This is the header component- */}

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* ----Banner ---- */}
        <Banner />

        {/* ----Products feed ---- */}
        <DisplayNews products={ newsFeed } />

        {/**Footer */}
        <Footer />
      </main>

      {/* ---- ---- */}
    </div>
  );
}



