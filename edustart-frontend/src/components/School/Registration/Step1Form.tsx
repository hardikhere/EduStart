// import React, { useState } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";
// import PillarsForm from "./PillarsForm";
// import useFormValidation from "./useFormValidation";

// const Step1Form = (props) => {
//   const dispatch = useDispatch();
//   const schoolRegister = useSelector((state) => state.schoolRegister);
//   const {
//     hasAnyErrorForm1,
//     yoeErr,
//     emailErr,
//     schoolNameErr,
//     phoneErr,
//     pinCodeErr,
//     addressErr,
//   } = useFormValidation();
//   const [showErrors, setshowErrors] = useState(false);
//   const handleChange = (name) => (event) => {
//     schoolRegister[name] = event.target.value;
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };
//   const handleNext = (e) => {
//     if (e) e.preventDefault();
//     if (!hasAnyErrorForm1) props.setStep(props.step + 1);
//     else setshowErrors(true);
//   };
//   return (
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>
//           Email address <sup>*</sup>
//         </Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           onChange={handleChange("email")}
//           value={schoolRegister.email}
//         />
//         {emailErr && showErrors && (
//           <Form.Text className="text-danger">Email must be valid</Form.Text>
//         )}
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>
//           School Name <sup>*</sup>
//         </Form.Label>
//         <Form.Control
//           type="name"
//           placeholder="Enter School Name"
//           onChange={handleChange("schoolName")}
//           value={schoolRegister.schoolName}
//         />
//         {schoolNameErr && showErrors && (
//           <Form.Text className="text-danger">
//             School Name must be atleast 5 characters long
//           </Form.Text>
//         )}
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>
//               Select Board <sup>*</sup>
//             </Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               as="select"
//               onChange={handleChange("board")}
//               aria-label="Default select example"
//               value={schoolRegister.board}
//             >
//               <option value="CBSE" selected>
//                 CBSE
//               </option>
//               <option value="RBSE">RBSE</option>
//               <option value="ICSE">ICSE</option>
//               <option value="Other">Other</option>
//             </Form.Control>
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>
//               Select Classification <sup>*</sup>
//             </Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               as="select"
//               onChange={handleChange("classification")}
//               aria-label="Default select example"
//               value={schoolRegister.classification}
//             >
//               <option value="COED" selected>
//                 COED
//               </option>
//               <option value="BOYS">BOYS</option>
//               <option value="GIRLS">GIRLS</option>
//             </Form.Control>
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>
//               Year Of Establishment <sup>*</sup>
//             </Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               type="text"
//               placeholder="2012"
//               onChange={handleChange("yearOfEstablishment")}
//               value={schoolRegister.yearOfEstablishment}
//             />
//             {yoeErr && showErrors && (
//               <Form.Text className="text-danger">
//                 Fied is required and must be in format (2012)
//               </Form.Text>
//             )}
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>
//               Phone Number <sup>*</sup>
//             </Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="text"
//               placeholder="+91XXXXXXXXXX"
//               onChange={handleChange("phoneNumber")}
//               value={schoolRegister.phoneNumber}
//             />
//             {phoneErr && showErrors && (
//               <Form.Text className="text-danger">
//                 phone number is required and must be valid
//               </Form.Text>
//             )}
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>
//               Area Pin Code <sup>*</sup>
//             </Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="text"
//               onChange={handleChange("pinCode")}
//               value={schoolRegister.pinCode}
//             />
//             {pinCodeErr && showErrors && (
//               <Form.Text className="text-danger">
//                 Fied is required and must be valid
//               </Form.Text>
//             )}
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>
//           Address <sup>*</sup>
//         </Form.Label>
//         <textarea
//           className="form-control"
//           type=""
//           onChange={handleChange("address")}
//           value={schoolRegister.address}
//           placeholder="Enter Full Address"
//         />
//         {addressErr && showErrors && (
//           <Form.Text className="text-danger">
//             Fied is required and must be atleast 10 characters long
//           </Form.Text>
//         )}
//       </Form.Group>
//       <Row className="p-jc-end p-px-2">
//         <Button type="submit" className="" onClick={handleNext}>
//           Next
//         </Button>
//       </Row>
//     </Form>
//   );
// };

// export default Step1Form;
import React from "react";

const Step1Form = () => {
  return <div>Step1Form</div>;
};

export default Step1Form;
