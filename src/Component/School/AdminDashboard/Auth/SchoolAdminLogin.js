import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLoginValidator from '../../../customHooks/useLoginValidator';
import { _updateUserInfo } from '../../../../redux/user/action';
import axiosInstance from '../../../../utils/axiosInstance';
import { APIS } from '../../../../utils/endpoints';
import { _updateSchoolAdminInfo } from '../../../../redux/schoolAdmin/actions';
import SchoolNavbar from '../../../Home/Navbar/SchoolNavbar';

const SchoolAdminLogin = () => {
    const dispatch = useDispatch();
    const [UserRes, setUserRes] = useState({
        email: "",
        password: "",
    });
    const [showErrors, setshowErrors] = useState(false)
    const { passwordErr, emailErr } = useLoginValidator(UserRes);
    const handleChange = (e) => {
        setUserRes({
            ...UserRes,
            [e.target.name]: e.target.value
        })
    };
    const [loading, setloading] = useState(false)
    const [shouldRedirect, setshouldRedirect] = useState(false)
    const [serverErr, setserverErr] = useState(false)
    const handleSubmit = () => {
        console.log(emailErr, passwordErr)
        if (emailErr || passwordErr) {
            setshowErrors(true);
            return;
        }
        setloading(true);
        axiosInstance.post(APIS._schoolAdminLogin, UserRes).then(res => {
            console.log(res.data);
            dispatch(_updateSchoolAdminInfo(res.data?.data?.user));
            setloading(false);
            localStorage.setItem("afmt", res.data?.data?.token)
            if (!res.data.data.user.schoolId)
                setshouldRedirect("/school/register")
            else setshouldRedirect("/school-admin/dashboard");
        }).catch(err => {
            console.log(err.response.data)
            setserverErr(err.response.data.message);
            setloading(false);
        })
    }
    return (
        <div className="login-screen">
            <SchoolNavbar />
            <div className=" d-flex p-jc-center p-ai-center">
                {shouldRedirect && <Redirect to={shouldRedirect} />}
                <div className="login-box">
                     {/* <Link to="/"><i className="pi pi-times p-mr-2" style={{ color: "white" }} ></i></Link> */}
                    <div className='p-col'>
                        <h1 classname="p-text-bold text-dark" style={{ textAlign: "left" }}>FredMat
                    <h5>School Admin Login</h5>
                        </h1>
                        <Form className="signupForm">
                            <Form.Group>
                                <Form.Label>Email <sup className="text-danger">*</sup></Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} />
                                {
                                    showErrors && emailErr && <Form.Text className="text-danger">
                                        Email is required and must be valid
                            </Form.Text>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password <sup className="text-danger">*</sup></Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} />
                                {
                                    showErrors && passwordErr && <Form.Text className="text-danger">
                                        password is required and must be atleast 8 characters long
                            </Form.Text>
                                }
                            </Form.Group>
                            {serverErr && <Form.Group>
                                <small className="text-danger">{serverErr}</small>
                            </Form.Group>}
                            <Form.Group>
                                <button onClick={handleSubmit}
                                    disabled={loading}
                                    className="myredbtn"
                                >
                                    {
                                        loading ? "Loading.." : "login"
                                    }
                                </button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='p-col' >
                        <div className="p-d-flex p-flex-column p-jc-between h-100 p-ai-end">
                           
                            <div>
                                <h6 style={{ textAlign: "right", color: '#ffffffcc' }}>New to FredMat?</h6>
                                <Link to="/school-admin/signup"><h5 style={{ textAlign: "right", color: 'white' }}>Create Account</h5></Link>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolAdminLogin
