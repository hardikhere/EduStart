import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import useLoginValidator from "../Component/customHooks/useLoginValidator";
import { _updateUserInfo } from "../redux/user/action";
import axiosInstance from "../utils/axiosInstance";
import { APIS } from "../utils/endpoints";
import ParentImg from "../Assets/parent.png";
import Navbar from "../Component/Home/Navbar/NavbarB";

const Login = () => {
  const dispatch = useDispatch();
  const [UserRes, setUserRes] = useState({
    email: "",
    password: "",
  });
  const [showErrors, setshowErrors] = useState(false);
  const { passwordErr, emailErr } = useLoginValidator(UserRes);
  const handleChange = (e) => {
    setUserRes({
      ...UserRes,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setloading] = useState(false);
  const [shouldRedirect, setshouldRedirect] = useState(false);
  const [serverErr, setserverErr] = useState(false);
  const handleSubmit = () => {
    console.log(emailErr, passwordErr);
    if (emailErr || passwordErr) {
      setshowErrors(true);
      return;
    }
    setloading(true);
    axiosInstance
      .post(APIS._loginUser, UserRes)
      .then((res) => {
        console.log(res.data);
        dispatch(_updateUserInfo(res.data?.data?.user));
        setloading(false);
        localStorage.setItem("fmt", res.data?.data?.token);
        setshouldRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        setserverErr(err.response.data.message);
        setloading(false);
      });
  };
  return (
    <>
      <Navbar bg="white" variant="light" classes="p-shadow-8" />
      <div className="login-screen d-flex p-jc-center p-ai-center">
        {shouldRedirect && <Redirect to="/" />}
        <div className="login-box d-flex flex-wrap">
          <div className="auth_left">
            <h1 classname="p-text-bold text-dark" style={{ textAlign: "left" }}>
              EduStart
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
              {serverErr && (
                <Form.Group>
                  <small className="text-danger">{serverErr}</small>
                </Form.Group>
              )}
              <Form.Group>
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="text-center btn btn-primary"
                  block
                >
                  {loading ? "Loading.." : "Login"}
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="auth_right">
            <div className="text-dark">
              <h6>New to Edustart?</h6>
              <Link to="/signup">
                <h5>Create Account</h5>
              </Link>
            </div>
            <img src={ParentImg} className="auth_img" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
