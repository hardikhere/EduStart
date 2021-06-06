import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLoginValidator from '../../../customHooks/useLoginValidator';
import { _updateUserInfo } from '../../../../redux/user/action';
import axiosInstance from '../../../../utils/axiosInstance';
import { APIS } from '../../../../utils/endpoints';
import { _updateSchoolAdminInfo } from '../../../../redux/schoolAdmin/actions';
import SchoolNavbar from '../../../Home/Navbar/SchoolNavbar';
import "./style.scss";

const SchoolAdminSignup = () => {
    const dispatch = useDispatch();
    const [UserRes, setUserRes] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showErrors, setshowErrors] = useState(false)
    const { confirmpassErr, passwordErr, emailErr } = useLoginValidator(UserRes);
    const handleChange = (e) => {
        setUserRes({
            ...UserRes,
            [e.target.name]: e.target.value
        })
    };
    const [loading, setloading] = useState(false)
    const [shouldRedirect, setshouldRedirect] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(emailErr, passwordErr, confirmpassErr)
        if (emailErr || passwordErr || confirmpassErr) {
            setshowErrors(true);
            return;
        }
        setloading(true);
        axiosInstance.post(APIS._schoolAdminRegister, UserRes).then(res => {
            console.log(res.data);
            setloading(false);
            localStorage.setItem("afmt", res.data?.data?.token)
            dispatch(_updateSchoolAdminInfo(res.data.data?.user))
            setshouldRedirect(true);
            history.push("/school/register")
        })
    }
    return (
        <div className="login-screen">
            <SchoolNavbar />
            <div className=" d-flex p-jc-center p-ai-center">

                <div className="login-box">
                    <div className='p-col'>
                        <h1 classname="p-text-bold text-dark" style={{ textAlign: "left" }}>FredMat
                 <h5> School Admin Signup</h5>
                        </h1>
                        <Form className="signupForm">
                            <Form.Group>
                                <Form.Label>Email <sup>*</sup></Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} />
                                {
                                    showErrors && emailErr && <Form.Text className="text-danger">
                                        Email is required and must be valid
                          </Form.Text>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password <sup>*</sup></Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} />
                                {
                                    showErrors && passwordErr && <Form.Text className="text-danger">
                                        password is required and must be atleast 8 characters long
                          </Form.Text>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Confirm Password <sup>*</sup></Form.Label>
                                <Form.Control type="password" name="confirmPassword" onChange={handleChange} />
                                {
                                    showErrors && confirmpassErr && <Form.Text className="text-danger">
                                        Not matched
                          </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <button onClick={handleSubmit}
                                    disabled={loading}
                                    className="myredbtn"
                                >Submit</button>
                            </Form.Group>
                        </Form>

                    </div>
                    <div className='p-col' >

                        <div className="p-d-flex p-flex-column p-jc-between h-100 p-ai-end">
                            {/* <Link to="/"><i className="pi pi-times p-mr-2" style={{ color: "white" }} ></i></Link> */}
                            <div>
                                <h6 style={{ textAlign: "right", color: '#ffffffcc' }}>Already have account?</h6>
                                <Link to="/school-admin/login"><h5 style={{ textAlign: "right", color: 'white' }}>Login</h5></Link>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolAdminSignup
