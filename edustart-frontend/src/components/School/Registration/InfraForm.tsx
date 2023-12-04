// import React, { useState } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
// import DropZone from "react-dropzone";
// import { useDispatch, useSelector } from "react-redux";
// import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";
// import axiosInstance from "../../../utils/axiosInstance";
// import { APIS } from "../../../utils/endpoints";
// import Adder from "./Adder";

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

// const acceptStyle = "#00e676";

// const rejectStyle = "#ff1744";
// const InfraForm = (props) => {
//   const [imageUploadLoading, setimageUploadLoading] = useState(false);
//   const [UserResponse, setUserResponse] = useState({
//     imageUrls: [],
//     logoUrl: "",
//   });
//   const [logoUploadLoading, setlogoUploadLoading] = useState(false);
//   const schoolRegister = useSelector((state) => state.schoolRegister);
//   const dispatch = useDispatch();

//   const handleInfraChange = (name, value) => (event) => {
//     if (value === undefined)
//       schoolRegister.infraDetails[name] = event.target.value;
//     else schoolRegister.infraDetails[name] = value;
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };

//   const handleOnDrop = (url) => {
//     setUserResponse({
//       ...UserResponse,
//       imageUrls: UserResponse.imageUrls.concat(url),
//     });
//     schoolRegister.imageUrls = UserResponse.imageUrls.concat(url);
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };

//   const handleAddLogoUrl = (ev) => {
//     schoolRegister.logoUrl = ev.target.value;
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };

//   const removeUrl = (toRemove) => {
//     const newUrls = UserResponse.imageUrls.filter((url) => {
//       if (url === toRemove) return false;
//       else return true;
//     });
//     setUserResponse({
//       ...UserResponse,
//       imageUrls: newUrls,
//     });
//     schoolRegister.imageUrls = newUrls;
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };
//   return (
//     <Form>
//       <Form.Group>
//         <Form.Label>School Images</Form.Label>
//         <Adder
//           array={UserResponse.imageUrls ?? []}
//           appender={(item) => {
//             handleOnDrop(item);
//           }}
//           deleter={(item) => {
//             removeUrl(item);
//           }}
//         />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>School Logo</Form.Label>
//         <Form.Control
//           onChange={handleAddLogoUrl}
//           value={schoolRegister.logoUrl}
//         />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Do you have ramps?</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check
//               defaultChecked={schoolRegister.infraDetails?.ramps}
//               type="radio"
//               name="ramps"
//               onClick={handleInfraChange("ramps", true)}
//               label="Yes"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               defaultChecked={!schoolRegister.infraDetails?.ramps}
//               type="radio"
//               name="ramps"
//               onClick={handleInfraChange("ramps", false)}
//               label="No"
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Do you have gym?</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check
//               defaultChecked={schoolRegister.infraDetails?.gym}
//               type="radio"
//               name="gym"
//               onClick={handleInfraChange("gym", true)}
//               label="Yes"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               defaultChecked={!schoolRegister.infraDetails?.gym}
//               type="radio"
//               name="gym"
//               onClick={handleInfraChange("gym", false)}
//               label="No"
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Do you have Fire Extinguishers?</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check
//               defaultChecked={schoolRegister.infraDetails?.fireExtinguishers}
//               type="radio"
//               name="fireExtinguishers"
//               onClick={handleInfraChange("fireExtinguishers", true)}
//               label="Yes"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               defaultChecked={!schoolRegister.infraDetails?.fireExtinguishers}
//               type="radio"
//               name="fireExtinguishers"
//               onClick={handleInfraChange("fireExtinguishers", false)}
//               label="No"
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Do you have clinic?</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check
//               defaultChecked={schoolRegister.infraDetails?.clinic}
//               type="radio"
//               name="clinic"
//               onClick={handleInfraChange("clinic", true)}
//               label="Yes"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               defaultChecked={!schoolRegister.infraDetails?.clinic}
//               type="radio"
//               name="clinic"
//               onClick={handleInfraChange("clinic", false)}
//               label="No"
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Do you have wifi?</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check
//               defaultChecked={schoolRegister.infraDetails?.wifi}
//               type="radio"
//               name="wifi"
//               onClick={handleInfraChange("wifi", true)}
//               label="Yes"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               defaultChecked={!schoolRegister.infraDetails?.wifi}
//               type="radio"
//               name="wifi"
//               onClick={handleInfraChange("wifi", false)}
//               label="No"
//             />
//           </Col>
//         </Row>
//       </Form.Group>
//       <Row className="p-jc-around">
//         <Button className="" onClick={() => props.setStep(props.step - 1)}>
//           Back
//         </Button>
//         <Button className="" onClick={() => props.setStep(props.step + 1)}>
//           Next
//         </Button>
//       </Row>
//     </Form>
//   );
// };

// export default InfraForm;
import React from "react";

const InfraForm = () => {
  return <div>InfraForm</div>;
};

export default InfraForm;
