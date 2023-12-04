// import React, { useState } from 'react'
// import { Form, Button, Row, Col } from "react-bootstrap"
// const ChangeUserInfo = () => {
//     const [UserResponse, setUserResponse] = useState({
//         full_name: "",
//         gender: "Male",
//         country: "",
//         city: "",
//         bio: "",
//         date_of_birth: "",
//         avatar: "",
//     });
//     const [formState, setformState] = useState(new FormData());
//     const handleChange = name => event => {
//         setUserResponse({
//             ...UserResponse,
//             [name]: event.target.value
//         })
//     };

//     const handleSubmit = () => {

//         for (const property in UserResponse) {
//             const form = formState;
//             form.append(property, UserResponse[property])
//         };
//     }
//     return (
//         <Form style={{ width: "50%" }}>
//             <Form.Group controlId="FullName">
//                 <Form.Label>Full name</Form.Label>
//                 <Form.Control type="text" value={UserResponse.full_name}
//                     onChange={handleChange("full_name")}
//                     placeholder="Enter Full Name" />
//             </Form.Group>

//             <Form.Group controlId="Country">
//                 <Form.Label>Country</Form.Label>
//                 <Form.Control type="text" placeholder="eg. India" value={UserResponse.country}
//                     onChange={handleChange("country")} />
//             </Form.Group>

//             <Form.Group controlId="City">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control type="text" placeholder="eg. Delhi" value={UserResponse.city}
//                     onChange={handleChange("city")} />
//             </Form.Group>

//             <Form.Group controlId="gender">
//                 <Form.Label>Gender</Form.Label>
//                 <Form.Check type="radio" name="gender" checked id="male" label="Male" />
//                 <Form.Check type="radio" name="gender" id="female" label="Female" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     )
// }

// export default ChangeUserInfo

import React from "react";

const ChangeUserInfo = () => {
  return <div>ChangeUserInfo</div>;
};

export default ChangeUserInfo;
