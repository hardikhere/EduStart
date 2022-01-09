import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SkeletonTheme } from 'react-loading-skeleton'
import axiosInstance from '../../../utils/axiosInstance'
import { APIS } from '../../../utils/endpoints'
import Base from '../../Base/Base'
import FeedsCard from './FeedsCard'
import Skeleton from 'react-loading-skeleton'

const FeedsPage = () => {
    const [loading, setloading] = useState(false)
    const [feedsArray, setfeedsArray] = useState([])
    const [limit, setlimit] = useState(40)
    const [skip, setskip] = useState(0)
    async function getLatestFeeds() {
        setloading(true)
        axiosInstance.get(APIS._latestFeeds + `?limit=${limit}`)
            .then(res => {
                console.log(res.data);
                setfeedsArray(res.data.data.docs);
                setloading(false);
            })
    };
    const LoadingCards = () => (
        <div className="feedscard">
            <SkeletonTheme highlightColor="#E1E7FF" color="#fff">
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
    useEffect(() => {
        getLatestFeeds();
    }, []);
    return (
        <Base>
            <Container>
                <Row>
                    <h2 className="text-red">Latest Feeds</h2>
                </Row>
                <Row>
                    {
                        !loading && feedsArray.map(feed => {
                            return <React.Fragment key={Math.random().toString()}>
                                <FeedsCard feed={feed} />
                            </React.Fragment>
                        })
                    }
                    {
                        loading && [1, 2, 3, 4, 5].map(el => {
                            return <React.Fragment key={el + Math.random().toString()}>
                                <LoadingCards />
                            </React.Fragment>
                        })
                    }
                </Row>
            </Container>
        </Base>
    )
}

export default FeedsPage
