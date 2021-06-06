import {
  faEnvelope,
  faGlobe,
  faMailBulk,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import {
  addToContactedList,
  getUserFromLS,
  isInSubmittedList,
  isUserDetailsInLS,
  saveUserInLS,
  validatePhone,
} from "../../../utils/common";
import { APIS } from "../../../utils/endpoints";
import FredDropzone from "../../CommonComponents/FredDropzone";
import "./style.scss";

const ContactUsForm = (props) => {
  const history = useHistory();
  const params = useParams();
  const [showModal, setshowModal] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [UserResponse, setUserResponse] = useState({
    mobileNumber: "",
    parentName: "",
    childName: "",
    grade: "Nur",
    address: "",
    academicRecords: [],
    remarks: "",
  });
  const [hasSubmitted, sethasSubmitted] = useState(false);
  const handleChange = (name) => (event) => {
    setUserResponse({
      ...UserResponse,
      [name]: event.target.value,
    });
  };
  const handleFormSubmit = () => {
    setErrorMsg(false);
    const { parentName, mobileNumber, childName } = UserResponse;
    console.log(UserResponse);
    if (
      parentName.length < 3 ||
      childName.length < 3 ||
      !validatePhone(mobileNumber)
    ) {
      setErrorMsg("All fields are required and must be in correct format");
      return;
    }
    setLoading(true);
    axiosInstance
      .post(APIS._addQuery(props.sid ? props.sid : params.sid), { query: UserResponse })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        sethasSubmitted(true);
        if (!isUserDetailsInLS()) {
          console.log("saving user in ls");
          saveUserInLS(UserResponse);
          window.location.reload();
        }
        addToContactedList(props.sid);
      });
  };
  const toggelModal = () => setshowModal(!showModal);

  const successView = () => {
    return (
      <div>
        <div>
          <svg
            className="mysvg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              class="path circle"
              fill="none"
              stroke="#73AF55"
              stroke-width="6"
              stroke-miterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <polyline
              class="path check"
              fill="none"
              stroke="#73AF55"
              stroke-width="6"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
          <p class="success smsg">Submitted!</p>
        </div>
        <div className="p-3">
          <p>
            Institute will contact you ASAP. Here is contact details in case you
            are in hurry
          </p>
          <div className="p-1 bg-light text-primary br-5 d-flex m-1 align-items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="pl-3">
              {props.schoolInfo?.email || "Not Available"}
            </div>
          </div>
          <div className="p-1 bg-light text-primary br-1 d-flex m-1 align-items-center">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div className="pl-3">
              {props.schoolInfo?.phoneNumber || "Not Available"}
            </div>
          </div>

          <div className="p-1 bg-light text-primary br-1 d-flex m-1 align-items-center">
            <FontAwesomeIcon icon={faGlobe} />
            <div className="pl-3">
              {props.schoolInfo?.website || "Not Available"}
            </div>
          </div>
        </div>
        <hr />
        <center>
          <Button className="m-1" onClick={() => history.push("/search")}>
            CHECKOUT MORE
          </Button>
        </center>
      </div>
    );
  };

  useEffect(() => {
    if (isInSubmittedList(props.sid || params.sid)) {
      sethasSubmitted(true);
    }
    if (isUserDetailsInLS()) {
      console.log(getUserFromLS());
      setUserResponse(getUserFromLS());
    }
  }, []);

  const contactForm = () => {
    return (
      <>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Row>
                <Col md={4} className="d-flex align-items-center">
                  Mobile No. <sup className="text-danger">*</sup>
                </Col>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    value={UserResponse.mobileNumber}
                    onChange={handleChange("mobileNumber")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col md={4} className="d-flex align-items-center">
                  Parent Name <sup className="text-danger">*</sup>
                </Col>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    value={UserResponse.parentName}
                    onChange={handleChange("parentName")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col md={4} className="d-flex align-items-center">
                  Child Name <sup className="text-danger">*</sup>
                </Col>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    value={UserResponse.childName}
                    onChange={handleChange("childName")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col md={4} className="d-flex align-items-center">
                  Grade <sup className="text-danger">*</sup>
                </Col>
                <Col md={8}>
                  <Form.Control
                    as="select"
                    value={UserResponse.grade}
                    onChange={handleChange("grade")}
                  >
                    {["Nur", "kg", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                      (el) => {
                        return <option value={el}>{el}</option>;
                      }
                    )}
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                value={UserResponse.address}
                onChange={handleChange("address")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                as="textarea"
                value={UserResponse.remarks}
                onChange={handleChange("remarks")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Academic Records</Form.Label>
              <FredDropzone
                setImageUrls={(imgs) =>
                  setUserResponse({
                    ...UserResponse,
                    academicRecords: imgs,
                  })
                }
              />
            </Form.Group>
          </Form>

          {ErrorMsg ? <small className="text-danger">{ErrorMsg}</small> : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggelModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleFormSubmit}
            disabled={Loading}
          >
            Submit
          </Button>
        </Modal.Footer>
      </>
    );
  };

  return (
    <div>
      <Button variant="success" onClick={toggelModal} block>
        <i className="pi pi-phone p-mr-2"></i> Contact Us
      </Button>
      <Modal show={showModal} onHide={toggelModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        {!hasSubmitted ? contactForm() : successView()}
      </Modal>
    </div>
  );
};

export default ContactUsForm;
