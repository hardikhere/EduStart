import FeedsCard from "@/components/Home/LatestFeeds/FeedsCard";
import Image from "next/image";
import React from "react";

const LatestFeeds = () => {
  return (
    <div className="flex flex-col w-full p-6">
      <h2 className="text-3xl">Latest Feeds from Schools</h2>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <FeedsCard />
        <FeedsCard />
        <FeedsCard />
        <FeedsCard />
      </div>
    </div>
  );
};

export default LatestFeeds;
