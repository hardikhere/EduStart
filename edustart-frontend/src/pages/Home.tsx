import Banner from "@/components/Home/Banner";
import LatestFeeds from "@/components/Home/LatestFeeds";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <LatestFeeds />
    </div>
  );
};

export default Home;
