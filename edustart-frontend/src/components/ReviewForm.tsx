// import {
//   faEnvelope,
//   faGlobe,
//   faMailBulk,
//   faPhoneAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { Form, Modal, Button, Row, Col, FormControl } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import axiosInstance from "../utils/axiosInstance";
// import { APIS } from "../utils/endpoints";

// const ReviewForm = (props) => {
//   const history = useHistory();
//   const params = useParams();
//   const [showModal, setshowModal] = useState(false);
//   const [ErrorMsg, setErrorMsg] = useState(false);
//   const [Loading, setLoading] = useState(false);
//   const userDetails = useSelector((state) => state.userDetails);
//   const [UserResponse, setUserResponse] = useState({
//     title: "",
//     content: "",
//     UserRelation: "Student",
//   });
//   const [hasSubmitted, setHasSubmitted] = useState(false);
//   const handleChange = (name) => (event) => {
//     setUserResponse({
//       ...UserResponse,
//       [name]: event.target.value,
//     });
//   };

//   const toggelModal = () => {
//     if (!userDetails._id) {
//       history.push("/login");
//       return;
//     }
//     setshowModal(!showModal);
//   };

//   const sendReview = () => {
//     setErrorMsg(false);
//     const { title, content } = UserResponse;
//     if (title.length < 3 || content.length < 3) {
//       setErrorMsg("All fields are required and must be in correct format");
//       return;
//     }
//     setLoading(true);
//     axiosInstance
//       .post(APIS._addReview(userDetails._id, params.sid), {
//         review: { ...UserResponse },
//       })
//       .then((res) => {
//         console.log("review Send", res.data);
//         setLoading(false);
//         setHasSubmitted(true);
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.log(err);
//       });
//   };

//   const reviewForm = () => {
//     return (
//       <>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Row>
//                 <Col md={4} className="d-flex align-items-center">
//                   Title <sup className="text-danger">*</sup>
//                 </Col>
//                 <Col md={8}>
//                   <Form.Control
//                     type="text"
//                     value={UserResponse.title}
//                     onChange={handleChange("title")}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group>
//               <Row>
//                 <Col md={4} className="d-flex align-items-center">
//                   Review <sup className="text-danger">*</sup>
//                 </Col>
//                 <Col md={8}>
//                   <Form.Control
//                     as="textarea"
//                     value={UserResponse.review}
//                     onChange={handleChange("content")}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group>
//               <Row>
//                 <Col md={6} className="d-flex align-items-center">
//                   Relation to school <sup className="text-danger">*</sup>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Control
//                     as="select"
//                     onChange={handleChange("UserRelation")}
//                     defaultValue="Student"
//                   >
//                     <option value="Student">Student</option>
//                     <option value="Parent">Parent</option>
//                     <option value="Employee">Employee</option>
//                     <option value="None">None</option>
//                   </Form.Control>
//                 </Col>
//               </Row>
//             </Form.Group>
//           </Form>

//           {ErrorMsg ? <small className="text-danger">{ErrorMsg}</small> : ""}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={toggelModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={sendReview} disabled={Loading}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </>
//     );
//   };

//   return (
//     <div>
//       <Button variant="warning" onClick={toggelModal} block>
//         <i className="pi pi-pencil p-mr-2"></i> Review
//       </Button>
//       <Modal show={showModal} onHide={toggelModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Review</Modal.Title>
//         </Modal.Header>
//         {reviewForm()}
//       </Modal>
//     </div>
//   );
// };

// export default ReviewForm;
import React from "react";

const ReviewForm = () => {
  return <div>ReviewForm</div>;
};

export default ReviewForm;
