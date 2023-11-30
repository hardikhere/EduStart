import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { APIS } from "../../utils/endpoints";

const Search = () => {
  // const parsedQs = qs.parse(window.location.search);
  // const [SearchResults, setSearchResults] = useState([]);
  // const [limit, setlimit] = useState(10);
  // const [skip, setskip] = useState(0);
  // const [hasMore, sethasMore] = useState(true);
  // const [loading, setloading] = useState(false);
  // const history = useHistory();

  // const fetchNextData = (props) => {
  //   axiosInstance
  //     .get(
  //       APIS._search +
  //       window.location.search +
  //       `${window.location.search === "" ? "?" : "&"
  //       }limit=${limit}&skip=${props?.isFirstTime ? 0 : skip}`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       if (props?.isFirstTime)
  //         setSearchResults(res.data.data);
  //       else setSearchResults(SearchResults.concat(res.data.data))
  //       if (res.data.data.length < limit) sethasMore(false);
  //       else setskip(skip + limit);
  //       setloading(false);
  //     });
  // };

  // useEffect(() => {
  //   setloading(true);
  //   console.log(parsedQs, "running useEffect");
  //   sethasMore(true);
  //   setskip(0);
  //   setSearchResults([]);
  //   fetchNextData({
  //     isFirstTime: true,
  //   });
  // }, [window.location.search]);

  return (
    <Base className="bg-light">
      <Container>
        <Row>
          <Col md={3}>
            <SearchFilter />
          </Col>
          <Col md={9}>
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", marginTop: "1em" }}
            >
              <h4>
                Search Results {parsedQs.query ? `for "${parsedQs.query}"` : ""}
              </h4>
              <div
                className="mr-5"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/search")}
              >
                &times;&nbsp;clear
              </div>
            </div>
            {loading &&
              [1, 2, 3, 4].map((res) => {
                return LoadingCard();
              })}

            <InfiniteScroll
              dataLength={SearchResults.length}
              next={fetchNextData}
              hasMore={hasMore}
              loader={<LoadingCard />}
            >
              {SearchResults.map((result, index) => (
                <div key={index}>
                  <SearchCard info={result} />
                </div>
              ))}
            </InfiniteScroll>

            {!loading && SearchResults.length === 0 && (
              <center>
                <h3>No results found</h3>
              </center>
            )}
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Search;
