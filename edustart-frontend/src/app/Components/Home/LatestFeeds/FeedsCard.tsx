import React from "react";

const FeedsCard = ({ feed }) => {
  return (
    <div className="feedscard">
      <div className="p-3" style={{ height: "40%", overflow: "hidden" }}>
        <div className="flex" syule={{ width: "100%" }}>
          <div
            className="feedlogo"
            style={{
              width: "1.4rem",
              height: "1.4rem",
              borderRadius: "50%",
              background: `url(${feed.schoolDetails?.logoUrl})`,
              backgroundSize: "cover",
              marginRight: "15px",
            }}
          ></div>
          <h6 style={{ fontWeight: "bold", color: "grey" }}>
            <Link to={`/school/${feed.schoolDetails?.schoolId}`}>
              {feed.schoolDetails?.schoolName}
            </Link>
          </h6>
        </div>
        <h5
          className="feed-title
            m-0 p-0"
          style={{ height: "40%" }}
        >
          {feed.title}
        </h5>
        <p
          className="mb-1"
          style={{
            height: "60%",
            fontSize: "14px",
          }}
        >
          {feed.content}
        </p>
      </div>
      <div
        className="imgcontainer mt-1"
        style={{
          height: "60%",
          background: `url(${feed.imageUrls[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default FeedsCard;
