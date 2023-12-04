// // import React, { useState, useEffect } from "react";
// // import Skeleton from "react-loading-skeleton";
// // import { Redirect, useHistory } from "react-router";
// // import InfiniteScroll from "react-infinite-scroll-component";
// // import { APIS } from "../utils/endpoints";
// // import axiosInstance from "../utils/axiosInstance";
// // import Base from "../Component/Base/Base";
// // import { Container, Row, Col,Button } from "react-bootstrap";
// // import SearchCard from "../Component/SearchPage/SearchCard";
// // import { isAuthenticated } from "../Component/Auth/dataHelpers";
// // import { Link } from "react-router-dom";

// const Shortlist = () => {
//   const [loading, setloading] = useState(false);
//   const history = useHistory();
//   const [shortlist, setShortlist] = useState([]);
//   const [schoolData, setSchoolData] = useState([]);

//   const getFromLocalStorage = () => {
//     const shlist = JSON.parse(localStorage.getItem("shortlist")) || {}; //gives an object
//     const names = Object.values(shlist); //converts the obj to array (array of values)
//     setShortlist(names);
//     getShortlist(names);
//   };

//   const getShortlist = (shlist) => {
//     if (shlist.length > 0) {
//       axiosInstance.get(APIS._getSchoolsInBulk(shlist)).then((res) => {
//         console.log(res.data.data.results);
//         setSchoolData(res.data.data.results);
//       });
//     } else {
//       console.log("0 items in shorlist");
//     }

//     // setloading(false);
//   };

//   useEffect(() => {
//     // setloading(true);
//     getFromLocalStorage();
//   }, []);

//   const LoadingCard = () => {
//     return (
//       <div className="sr-card d-flex">
//         <div className="d-flex sr-card-img">
//           <Skeleton width="10rem" height="10rem" />
//         </div>
//         <div className="d-flex flex-col sr-card-content sr-card-heading">
//           <h5 style={{ color: "#2E8DA0" }}>
//             <Skeleton width={"20rem"} height="100%" />
//           </h5>
//           <div className="grey">
//             {" "}
//             <Skeleton width="9rem" height="1rem" />
//           </div>
//           <div className="d-flex">
//             <div className="sr-card-details">
//               <div className="sr-card-details-itm">
//                 {" "}
//                 <Skeleton width="50%" height="100%" />
//               </div>
//               <div className="sr-card-details-itm">
//                 <Skeleton width="50%" height="100%" />
//               </div>
//               <div className="sr-card-details-itm">
//                 <Skeleton width="50%" height="100%" />
//               </div>
//               <div className="sr-card-details-itm">
//                 {" "}
//                 <Skeleton width="50%" height="100%" />
//               </div>
//               <div className="sr-card-details-itm">
//                 <Skeleton width="50%" height="100%" />
//               </div>
//             </div>
//             <div className="sr-card-btns">
//               <Skeleton width="7rem" height="2rem" />
//               <Skeleton width="7rem" height="2rem" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <Base className="bg-light">
//       <Container>
//         {isAuthenticated() ? (
//           <Row>
//             <Col md={10}>
//               <div
//                 className="d-flex"
//                 style={{ justifyContent: "space-between", marginTop: "1em" }}
//               >
//                 <h3>Your Shortlist</h3>
//               </div>
//               {loading &&
//                 [1, 2, 3, 4].map((res) => {
//                   return LoadingCard();
//                 })}

//               {!loading && schoolData.map((item) =>
//                 <React.Fragment key={(Math.random() * Math.random()).toString()}>
//                   <SearchCard info={item} />
//                 </React.Fragment>
//               )}

//               {!loading && shortlist.length === 0 && (
//                 <center>
//                   <h3>No results found</h3>
//                 </center>
//               )}
//             </Col>
//             <Col>
//               <Button onClick={() => {
//                 history.push("/search")
//               }}>
//                 Explore More Schools
//               </Button>
//             </Col>
//           </Row>
//         ) : (
//           <Redirect to="/login" />
//         )}
//       </Container>
//     </Base>
//   );
// };

// export default Shortlist;

import React from "react";

const Shortlist = () => {
  return <div>Shortlist</div>;
};

export default Shortlist;
