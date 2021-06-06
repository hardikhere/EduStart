import { faCogs, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import "./style.scss";
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const UserInfo = () => {
    const [User, setUser] = useState({});
    const [Loading, setLoading] = useState(false);
    const getUserName = async () => {
        setLoading(true);
        const user = await window.localStorage.getItem("userName");
        setUser(user);
        setLoading(false);
    }
    useEffect(() => {
        getUserName();
    }, []);
    const [redirect, setredirect] = useState(false);
    const performLogout = async () => {
        await window.localStorage.clear();
        setredirect(true);
    }

    return (
        <Dropdown>
            {
                redirect && <Redirect to="/school-admin/login" />
            }
            <Dropdown.Toggle variant="" id="dropdown-basic">
                Hardik
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropmenu text-dark">
                <Dropdown.Item >
                    <Link to="/school-admin/dashboard?view=settings" className="text-dark">
                        Settings
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={performLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
}

export default UserInfo;
