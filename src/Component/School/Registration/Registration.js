import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./style.scss";
import InfraForm from "./InfraForm";
import FeeForm from "./FeeForm";
import Step3Form from "./Step3Form";
import Step2Form from "./Step2Form";
import Step1Form from "./Step1Form";
import { APIS } from "../../../utils/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Base from "../../Base/Base";
import axiosSchoolAdminInstance from "../../../utils/axiosSchoolAdminInstance";
import PillarsForm from "./PillarsForm";
import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";
import { getUserLongLat } from "../../../utils/common";

function onError(positionError) {
  switch (positionError.code) {
    case positionError.TIMEOUT:
      console.log(
        "The request to get user location has aborted as it has taken too long."
      );
      break;
    case positionError.POSITION_UNAVAILABLE:
      console.log("Location information is not available.");
      break;
    case positionError.PERMISSION_DENIED:
      console.log("Permission to share location information has been denied!");
      break;
    default:
      console.log("An unknown error occurred.");
  }
}

const onProgress = (pro) => {
  console.log(pro);
};

const Registration = (props) => {
  const dispatch = useDispatch();
  const [step, setstep] = useState(0);
  const schoolAdminDetails = useSelector((state) => state.schoolAdminDetails);
  const schoolRegister = useSelector((state) => state.schoolRegister);
  const [doRedirect, setdoRedirect] = useState(false);
  const handleSubmit = () => {
    axiosSchoolAdminInstance
      .post(APIS._createSchool, {
        schoolDetails: schoolRegister,
        userDetails: schoolAdminDetails,
      })
      .then((res) => {
        console.log(res.data);
        setdoRedirect(`/school/${res.data.data.schoolId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSuccess = (position) => {
    schoolRegister.longitude = position?.coords?.longitude;
    schoolRegister.latitude = position?.coords?.latitude;
    dispatch(_updateSchoolRegForm(schoolRegister));
  };
  useEffect(() => {
    getUserLongLat(onSuccess, onError, onProgress);
  }, []);

  const handleUpdate = () => {
    if (!props.sid) return;
    axiosSchoolAdminInstance
      .post(APIS._updateSchool(props.sid), {
        updateDetails: schoolRegister,
      })
      .then((res) => {
        console.log("uupdated ", res);
        window.location.reload();
      });
  };
  const Step5Form = () => {
    return (
      <div>
        <FeeForm />
        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="" onClick={() => setstep(step - 1)}>
              Back
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              className=""
              onClick={props.update ? handleUpdate : handleSubmit}
            >
              {props.update ? "Update" : "Submit"}
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  const getFormByStep = () => {
    switch (step) {
      case 0:
        return <Step1Form setStep={(s) => setstep(s)} step={step} />;
      case 1:
        return <Step2Form setStep={(s) => setstep(s)} step={step} />;
      case 2:
        return <Step3Form setStep={(s) => setstep(s)} step={step} />;
      case 3:
        return <InfraForm setStep={(s) => setstep(s)} step={step} />;
      case 4:
        return <PillarsForm setStep={(s) => setstep(s)} step={step} />;
      case 5:
        return <Step5Form setStep={(s) => setstep(s)} step={step} />;
      default:
        return <div>hi</div>;
    }
  };
  if (props.withoutBase) {
    return (
      <div className="form-container">
        <div className="registerform">{getFormByStep()}</div>
      </div>
    );
  } else
    return (
      <Base style={{ backgroundColor: "whitesmoke" }}>
        <div className="redbanner">
          <center>
            <h1>Register Your School</h1>
            <h3>With EduStart</h3>
          </center>
        </div>
        {doRedirect && <Redirect to={doRedirect} />}
        <div className="form-container">
          <div className="registerform">{getFormByStep()}</div>
        </div>
      </Base>
    );
};

export default Registration;
