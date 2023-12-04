// import React, { useState } from "react";
// import { Form, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";

// const FeeForm = (props) => {
//   const dispatch = useDispatch();
//   const schoolRegister = useSelector((state) => state.schoolRegister);
//   const handleChange = (name, value) => (event) => {
//     if (value === undefined)
//       schoolRegister.fees[name] = parseInt(event.target.value);
//     else schoolRegister.fees[name] = parseInt(value);
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };
//   //annualFeeFrom
//   return (
//     <Form>
//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Annual Fee From</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="number"
//               onChange={handleChange("annualFeeFrom")}
//               value={schoolRegister.fees?.annualFeeFrom}
//               placeholder="From in Rs."
//             />
//           </Col>
//         </Row>
//       </Form.Group>
//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Annual Fee To</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="number"
//               onChange={handleChange("annualFeeTo")}
//               value={schoolRegister.fees?.annualFeeTo}
//               placeholder="To in Rs."
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Admission Fee</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="number"
//               onChange={handleChange("admissionFee")}
//               value={schoolRegister.fees?.admissionFee}
//               placeholder="in Rs."
//               key="admissionFee"
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Application Fee</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="number"
//               onChange={handleChange("applicationFee")}
//               value={schoolRegister.fees?.applicationFee}
//               placeholder="in Rs."
//             />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Row>
//           <Col>
//             <Form.Label>Security Fee</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control
//               required
//               type="number"
//               onChange={handleChange("securityFee")}
//               value={schoolRegister.fees?.securityFee}
//               placeholder="in Rs."
//             />
//           </Col>
//         </Row>
//       </Form.Group>
//     </Form>
//   );
// };

// export default FeeForm;
