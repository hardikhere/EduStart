import "./Navbar.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const SchoolNavbar = ({ bg, variant, classes }) => {
  const [dropToggle, setDropToggle] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("afmt");
    window.location.reload();
  };

  return (
    <Navbar
      sticky="top"
      bg={bg}
      variant={variant}
      expand="lg"
      className={classes}
    >
      <Navbar.Brand href="/">
        <h1 classname="p-text-bold text-dark">EduStart</h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-dark mx-lg-auto my-nav p-align-center mx-5">
          <Link to="/about">About Us</Link>
        </Nav>

        <div>
          <ButtonGroup className="my-2">
            {!localStorage.getItem("afmt") ? (
              <>
                <Link to="/school-admin/login">
                  <Button
                    label="Sign In"
                    variant={variant === "dark" ? "light" : "dark"}
                    className="login p-mr-2"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link to="/school-admin/signup">
                  <Button
                    label="Sign Up"
                    variant={variant === "dark" ? "light" : "dark"}
                    className="login p-ml-2"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <div
                style={{
                  paddingRight: "5vw",
                }}
              >
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  onClick={() => {
                    setDropToggle(!dropToggle);
                  }}
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </div>
                {dropToggle && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "absolute",
                      backgroundColor: "#fff",
                      padding: "10px",
                      width: "130px",
                      borderRadius: "10px",
                      filter: "drop-shadow(0 0 0.3rem grey)",
                    }}
                  >
                    <Button
                      variant="dark"
                      className="m-1"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            )}
          </ButtonGroup>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SchoolNavbar;
