import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Base from "../Component/Base/Base";
import NavbarB from "../Component/Home/Navbar/NavbarB";
import { _updateUserInfo } from "../redux/user/action";
import { Link, Redirect } from "react-router-dom";
import useLoginValidator from "../Component/customHooks/useLoginValidator";
import axiosInstance from "../utils/axiosInstance";
import { APIS } from "../utils/endpoints";
import "./Signup.scss";
import Navbar from "../Component/Home/Navbar/NavbarB";

const Signup = () => {
  const dispatch = useDispatch();
  const [UserRes, setUserRes] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showErrors, setshowErrors] = useState(false);
  const { confirmpassErr, passwordErr, emailErr } = useLoginValidator(UserRes);
  const handleChange = (e) => {
    setUserRes({
      ...UserRes,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setloading] = useState(false);
  const [shouldRedirect, setshouldRedirect] = useState(false);

  const handleSubmit = () => {
    console.log(emailErr, passwordErr, confirmpassErr);
    if (emailErr || passwordErr || confirmpassErr) {
      setshowErrors(true);
      return;
    }
    setloading(true);
    axiosInstance.post(APIS._signupUser, UserRes).then((res) => {
      console.log(res.data);
      setloading(false);
      localStorage.setItem("fmt", res.data?.data?.token);
      dispatch(_updateUserInfo(res.data.data?.user));
      setshouldRedirect(true);
    });
  };
  return (
    <>
      <Navbar bg="white" variant="light" classes="p-shadow-8" />
      <div className="login-screen d-flex p-jc-center p-ai-center">
        {shouldRedirect && <Redirect to="/" />}
        <div className="login-box">
          <div className="p-col">
            <h1 classname="p-text-bold text-dark" style={{ textAlign: "left" }}>
              FredMat
            </h1>
            <Form className="signupForm">
              <Form.Group>
                <Form.Label>
                  Email <sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                {showErrors && emailErr && (
                  <Form.Text className="text-danger">
                    Email is required and must be valid
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Password <sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {showErrors && passwordErr && (
                  <Form.Text className="text-danger">
                    password is required and must be atleast 8 characters long
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Confirm Password <sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                {showErrors && confirmpassErr && (
                  <Form.Text className="text-danger">Not matched</Form.Text>
                )}
              </Form.Group>
              <Form.Group>
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="text-center btn btn-danger"
                  block
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="p-col">
            <div className="p-d-flex p-flex-column p-jc-between h-100 p-ai-end">
              {/* <Link to="/">
              <i className="pi pi-times p-mr-2" style={{ color: "white" }}></i>
            </Link> */}
              <div className="sub-text">
                <h6>Already have account?</h6>
                <Link to="/login">
                  <h5>Login</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
