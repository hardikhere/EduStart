// import React from "react";
// import { FormControl, FormLabel, FormGroup, Button } from "react-bootstrap";
// // import Form from 'react-bootstrap/Form';

// import { useDispatch, useSelector } from "react-redux";
// import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";

// const AddPillerForm = (props) => {
//   const dispatch = useDispatch();
//   const schoolRegister = useSelector((state) => state.schoolRegister);

//   const handleRemove = () => {
//     schoolRegister.pillars = schoolRegister.pillars.filter((el) => {
//       if (el.number === props.number) return false;
//       return true;
//     });
//     dispatch(_updateSchoolRegForm(schoolRegister));
//   };
//   return (
//     <div className="mb-5">
//       <FormGroup>
//         <FormLabel>
//           Pillar {props.number} Title <sup className="text-danger">*</sup>
//         </FormLabel>
//         <FormControl
//           value={props.title}
//           style={{ width: "50%" }}
//           type="text"
//           name="title"
//           onChange={props.handleChange}
//         />
//       </FormGroup>
//       <FormGroup>
//         <FormLabel>
//           Description <sup className="text-danger">*</sup>
//         </FormLabel>
//         <FormControl
//           value={props.description}
//           as="textarea"
//           type="text"
//           name="description"
//           onChange={props.handleChange}
//         />
//       </FormGroup>
//       {props.number > 1 && (
//         <Button className="btn-danger" onClick={handleRemove}>
//           Remove
//         </Button>
//       )}
//     </div>
//   );
// };

// export default AddPillerForm;
import React from "react";

const AddPillerForm = () => {
  return <div>AddPillerForm</div>;
};

export default AddPillerForm;
