import "./Navbar.scss";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../Auth/dataHelpers";
import SearchByText from "../../SearchPage/SearchByText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const NavbarB = ({
  bg,
  variant,
  classes,
  showSearch = true,
  isSchool = false,
}) => {
  const [dropToggle, setDropToggle] = useState(false);

  const AvatarMenu = () => {
    return (
      <div>
        <Button
          label="logout"
          variant={variant === "dark" ? "light" : "dark"}
          onClick={handleLogout}
          className="p-button-rounded login"
        >
          logout
        </Button>
      </div>
    );
  };

  const handleLogout = () => {
    window.localStorage.removeItem("fmt")
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
        <h1 classname="p-text-bold text-dark brand">EduStart</h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-dark mx-lg-auto my-nav p-align-center">
          {!isSchool && (
            <Nav.Link href="/fredmat-schools">For Schools</Nav.Link>
          )}
          <Nav.Link href="/about">About Us</Nav.Link>
          {showSearch ? (
            <NavItem className="my-2">
              <SearchByText />
            </NavItem>
          ) : (
            ""
          )}
        </Nav>

        <div>
          <ButtonGroup className="my-2">
            {!isAuthenticated() ? (
              <>
                <Link to="/login">
                  <Button
                    label="Sign In"
                    variant={variant === "dark" ? "light" : "dark"}
                    className="login p-mr-2"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link to="/signup">
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
              <>
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
                    {/* <img
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                      width="40"
                      height="40"
                      className="rounded-circle"
                      alt="avatar"
                    /> */}
                  </div>
                  {dropToggle && (
                    <>
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
                        <Link to="/shortlist">
                          <Button variant="dark" className="m-1 px-2">
                            Shortlisted
                          </Button>
                        </Link>
                        <Button
                          variant="dark"
                          className="m-1"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </ButtonGroup>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarB;
