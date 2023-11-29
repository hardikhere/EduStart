import "./Navbar.scss";
import { Button, ButtonGroup } from "react-bootstrap";
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

  const handleLogout = () => {
    window.localStorage.removeItem("fmt");
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
      <Navbar.Brand>
        <Link to="/" className="p-text-bold text-dark text-lg">
          EduStart
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-dark mx-lg-auto my-nav p-align-center">
          {!isSchool && <Link to="/fredmat-schools">For Schools</Link>}
          <Link to="/about" className="mx-3">About Us</Link>
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
