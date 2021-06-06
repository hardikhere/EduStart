import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link, useHistory } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import { APIS } from '../../../utils/endpoints';
import FeedsCard from './FeedsCard';
import "./style.scss";

const LatestFeeds = () => {
    const [feedsArray, setfeedsArray] = useState([]);
    const history = useHistory()
    const [loading, setloading] = useState(false)
    async function getLatestFeeds() {
        setloading(true)
        axiosInstance.get(APIS._latestFeeds + "?limit=4")
            .then(res => {
                console.log(res.data);
                setfeedsArray(res.data.data.docs);
                setloading(false);
            })
    };
    useEffect(() => {
        getLatestFeeds();
    }, []);

    const LoadingCards = () => (
        <div className="feedscard">
            <SkeletonTheme highlightColor="#FAAAAA" color="#FFCFCF">
                <div className="p-3" style={{ height: "40%", overflow: "hidden" }}>
                    <h6 style={{ fontWeight: "bold", color: "grey" }}>
                        <Skeleton height="10px" />
                    </h6>
                    <h5 className="feed-title
                                m-0 p-0"
                        style={{ height: "40%" }}>
                        <Skeleton />
                    </h5>
                    <p className="mb-1"
                        style={{
                            height: "60%",
                            fontSize: "14px"
                        }}
                    >
                        <Skeleton count={3} height="8px" />
                    </p>
                </div>
                <div className="imgcontainer mt-1" style={{
                    height: "60%",
                }}>
                </div>
            </SkeletonTheme>
        </div>
    )
    return (
        <div style={{ width: "100%", padding: "2%", marginTop: "3%" }}>
            <div className="flex" style={{ justifyContent: "space-between" }}>
                <h2>Latest Feeds </h2>
                <div className="morefeedsbtn" onClick={() => {
                    history.push("/feeds")
                }}>
                    View More Feeds
                </div>
            </div>
            <div className="flex flex-wrap feedsarea">

                {
                    !loading && feedsArray.map(feed => {
                        return <React.Fragment key={(Math.random() * Math.random()).toString()}>
                            <FeedsCard feed={feed} />
                        </React.Fragment>
                    })
                }
                {
                    loading && [1, 2, 3, 4].map(num => {
                        return <LoadingCards />
                    })
                }
            </div>
        </div>
    )
}

export default LatestFeeds
