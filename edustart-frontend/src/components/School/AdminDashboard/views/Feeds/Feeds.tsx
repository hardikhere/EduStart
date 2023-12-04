// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import "./style.scss";
// import DropZone from "react-dropzone";
// import axiosInstance from "../../../../../utils/axiosInstance";
// import { APIS } from "../../../../../utils/endpoints";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import ConfirmDeleteModal from "./ConfirmDeleteModal";
// import { useSelector } from "react-redux";

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const activeStyle = "#2196f3";

// const Feeds = () => {
//   const [showNewFeedModal, setShowNewFeedModal] = useState(false);
//   const schoolAdminDetails = useSelector((state) => state.schoolAdminDetails);
//   const [imageUploadLoading, setimageUploadLoading] = useState(false);
//   const [SubmitLoading, setSubmitLoading] = useState(false);
//   const [UserResponse, setUserResponse] = useState({
//     imageUrls: [],
//     title: "",
//     content: "",
//     sid: schoolAdminDetails?.schoolDetails?.schoolId,
//   });
//   const clearResponse = () => {
//     setUserResponse({
//       imageUrls: [],
//       title: "",
//       content: "",
//       sid: schoolAdminDetails?.schoolDetails?.schoolId,
//     });
//   };

//   const handleOnDrop = (acceptedFiles) => {
//     const numberOfFiles = acceptedFiles.length;
//     let uploaded = 0;
//     let imgurls = [];
//     setimageUploadLoading(true);
//     acceptedFiles.forEach((pic) => {
//       const formData = new FormData();
//       formData.set("pic", pic);
//       axiosInstance
//         .post(APIS._uploadImage, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((res) => {
//           uploaded++;
//           console.log("uploaded ", res.data);
//           imgurls.push(res.data.data.url);
//           if (uploaded === numberOfFiles) {
//             setimageUploadLoading(false);
//             setUserResponse({
//               ...UserResponse,
//               imageUrls: UserResponse.imageUrls.concat(imgurls),
//             });
//           }
//         });
//     });
//   };
//   const handleClose = () => {
//     setShowNewFeedModal(false);
//     setisEditing(false);
//     clearResponse();
//     sethasErrors(false);
//   };
//   const handleShowNewFeedModal = () => setShowNewFeedModal(true);
//   const removeUrl = (url) => {
//     const newArray = UserResponse.imageUrls.filter((el) => {
//       if (el === url) return false;
//       else return true;
//     });
//     setUserResponse({
//       ...UserResponse,
//       imageUrls: newArray,
//     });
//   };

//   const handleChange = (name) => (event) => {
//     setUserResponse({
//       ...UserResponse,
//       [name]: event.target.value,
//     });
//   };
//   const [hasErrors, sethasErrors] = useState(false);
//   const postFeed = () => {
//     sethasErrors(false);
//     const { title, content, imageUrls } = UserResponse;
//     if (title.length < 2 || content.lenght < 3 || imageUrls.length === 0) {
//       sethasErrors(true);
//       return;
//     }
//     setSubmitLoading(true);
//     axiosInstance
//       .post(APIS._addFeed, {
//         ...UserResponse,
//         sid: schoolAdminDetails?.schoolDetails?.schoolId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setSubmitLoading(false);
//         handleClose();
//         clearResponse();
//         setupdatePage(!updatePage);
//       });
//   };
//   const [FeedsLoading, setFeedsLoading] = useState(false);
//   const [Feeds, setFeeds] = useState([]);
//   const [updatePage, setupdatePage] = useState(false);

//   const getFeeds = () => {
//     setFeedsLoading(true);
//     axiosInstance
//       .get(APIS._getFeeds(schoolAdminDetails.schoolDetails.schoolId))
//       .then((res) => {
//         setFeeds(res.data.data);
//         setFeedsLoading(false);
//         console.log("got feeds ", res.data);
//       });
//   };

//   useEffect(() => {
//     if (!!schoolAdminDetails?.schoolDetails?.schoolId) getFeeds();
//   }, [updatePage, schoolAdminDetails]);

//   const AddNewModal = () => {
//     return (
//       <div>
//         <Modal.Header closeButton>
//           <Modal.Title>{isEditing ? "Update " : "Create new "}feed</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ maxHeight: "22rem", overflowY: "scroll" }}>
//           <Form>
//             {hasErrors && (
//               <h6 className="text-danger">
//                 All fields are required and must be atleast 3 characters long
//                 with atleast one image
//               </h6>
//             )}
//             <Form.Group>
//               <Form.Label>
//                 Upload Images
//                 <sup className="text-danger">*</sup>
//               </Form.Label>
//               <DropZone onDrop={handleOnDrop}>
//                 {({ getRootProps, getInputProps, isDragActive }) => (
//                   <section>
//                     <div
//                       {...getRootProps()}
//                       onMouseOver={(e) => {
//                         e.target.style.color = activeStyle;
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.color = "grey";
//                       }}
//                       style={{
//                         ...baseStyle,
//                         color: isDragActive ? activeStyle : "grey",
//                         borderColor: isDragActive ? activeStyle : "grey",
//                       }}
//                     >
//                       <input
//                         {...getInputProps()}
//                         multiple
//                         disabled={imageUploadLoading}
//                       />
//                       {imageUploadLoading ? (
//                         <p>Please wait while we are uploading images</p>
//                       ) : (
//                         <p>
//                           Click here to upload images OR Drag & Drop files here
//                         </p>
//                       )}
//                     </div>
//                   </section>
//                 )}
//               </DropZone>
//               <div className="img-container">
//                 {UserResponse.imageUrls?.map((imgurl) => {
//                   return (
//                     <div className="img-item">
//                       <div className="cross" onClick={() => removeUrl(imgurl)}>
//                         &times;
//                       </div>
//                       <img src={imgurl} style={{ height: "inherit" }} alt="" />
//                     </div>
//                   );
//                 })}
//               </div>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>
//                 Title
//                 <sup className="text-danger">*</sup>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={UserResponse.title}
//                 onChange={handleChange("title")}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>
//                 Description
//                 <sup className="text-danger">*</sup>
//               </Form.Label>
//               <Form.Control
//                 onChange={handleChange("content")}
//                 value={UserResponse.content}
//                 as="textarea"
//               ></Form.Control>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//       </div>
//     );
//   };

//   const [isEditing, setisEditing] = useState(false);
//   const handleEditBtn = (cardDetails) => {
//     setisEditing(true);
//     setUserResponse(cardDetails);
//     setShowNewFeedModal(true);
//   };
//   const updateFeedController = () => {
//     sethasErrors(false);
//     const { title, content, imageUrls } = UserResponse;
//     if (title.length < 2 || content.lenght < 3 || imageUrls.length === 0) {
//       sethasErrors(true);
//       return;
//     }
//     setSubmitLoading(true);
//     axiosInstance
//       .put(APIS._updateFeed, {
//         ...UserResponse,
//         sid: schoolAdminDetails?.schoolDetails?.schoolId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setSubmitLoading(false);
//         handleClose();
//         clearResponse();
//         setupdatePage(!updatePage);
//         setisEditing(false);
//       });
//   };

//   const loadingCards = () => {
//     if (FeedsLoading) {
//       return (
//         <SkeletonTheme color="#E5E5E5" highlightColor="#F3F3F3">
//           <div
//             className="d-flex flex-wrap justify-content-center"
//             style={{ width: "100%" }}
//           >
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//             <Skeleton
//               height={"20rem"}
//               width={"18rem"}
//               style={{ margin: "1rem" }}
//             />
//           </div>
//         </SkeletonTheme>
//       );
//     }
//   };

//   const [showDeleteModal, setshowDeleteModal] = useState(false);
//   const [toDeleteId, settoDeleteId] = useState("");
//   const deletePost = (id) => {
//     axiosInstance.delete(APIS._deleteFeed(id)).then((res) => {
//       console.log(res.data);
//       setshowDeleteModal(false);
//       setupdatePage(!updatePage);
//     });
//   };
//   return (
//     <div className="p-1">
//       <Modal
//         style={{ marginTop: "4.3%" }}
//         show={showNewFeedModal}
//         onHide={handleClose}
//       >
//         {AddNewModal()}

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button
//             variant="primary"
//             disabled={SubmitLoading}
//             onClick={isEditing ? updateFeedController : postFeed}
//           >
//             {isEditing ? "Update" : "Post"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <div className="d-flex justify-content-center">
//         <Button onClick={handleShowNewFeedModal}>Add New Feed</Button>
//       </div>
//       <div className="d-flex flex-wrap justify-content-center">
//         {loadingCards()}
//         <ConfirmDeleteModal
//           show={showDeleteModal}
//           name="feed"
//           handleClose={() => setshowDeleteModal(false)}
//           onDelete={() => deletePost(toDeleteId)}
//         />
//         {Feeds.map((post) => {
//           return (
//             <div className="feedCard" key={`das${post}`}>
//               <div className="feedCard-option">
//                 <div
//                   className="btn btn-primary m-1"
//                   onClick={() => handleEditBtn(post)}
//                 >
//                   <FontAwesomeIcon icon={faEdit} />
//                 </div>
//                 <div
//                   className="btn btn-danger m-1"
//                   onClick={() => {
//                     setshowDeleteModal(true);
//                     settoDeleteId(post._id);
//                   }}
//                 >
//                   <FontAwesomeIcon icon={faTrash} />
//                 </div>
//               </div>
//               <div
//                 className="feedCard-img"
//                 style={{
//                   backgroundSize: "cover",
//                 }}
//               >
//                 <img
//                   src={post.imageUrls[0]}
//                   style={{ height: "100%" }}
//                   alt=""
//                   srcset=""
//                 />
//               </div>
//               <div className="p-1">
//                 <h5>{post.title}</h5>
//                 <p>{post.content}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Feeds;

import React from "react";

const Feeds = () => {
  return <div>Feeds</div>;
};

export default Feeds;
