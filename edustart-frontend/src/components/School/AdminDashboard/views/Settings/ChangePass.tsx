import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ChangePass = () => {
    const [UserResponse, setUserResponse] = useState({
        new_password1: "",
        new_password2: "",
        currentPassword:""
    });
    const [Success, setSuccess] = useState(false);
    const [Loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setUserResponse({
            ...UserResponse,
            [e.target.name]: e.target.value
        })
    };
    const [Error, setError] = useState(false);
    const handleSubmit = (e) => {
        const { new_password1, new_password2 } = UserResponse;
        if (new_password1.length < 8 || new_password2.length < 8) {
            setError("Password Too small, must be greater than 8 characters long");
            return;
        }
        setLoading(true);
        e.preventDefault();
        console.log(UserResponse);
    }
    return (
        <div>
            <h3>Change Password</h3>
            <div className="changepassform">
                <Form>
                    {
                        Success && <h5 style={{ color: "green" }}>
                            {Success}
                        </h5>
                    }
                    {
                        Error && <h5 style={{ color: "red" }}>
                            {Error}
                        </h5>
                    }
                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Current Password</Form.Label>
                        <Form.Control type="password"
                            onChange={handleChange} value={UserResponse.currentPassword}
                            placeholder="Password" name="currentPassword" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password"
                            onChange={handleChange} value={UserResponse.new_password1}
                            name="new_password1" />
                        <Form.Text className="text-muted">
                            Make sure you create  strong password
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control type="password"
                            onChange={handleChange} value={UserResponse.new_password2}
                            placeholder="Password" name="new_password2" />
                    </Form.Group>
                    <Button variant="primary"
                        disabled={Loading ? true : false}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePass
