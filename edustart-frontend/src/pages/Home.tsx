import Banner from "@/app/components/Home/Banner";
import LatestFeeds from "@/app/components/Home/LatestFeeds";
import Navbar from "@/app/components/Home/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Banner />
      <LatestFeeds />
    </div>
  );
};

export default Home;
