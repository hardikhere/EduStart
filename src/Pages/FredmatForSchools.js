import React from "react";
import Fade from "react-reveal/Fade";
import SchoolNavbar from "../Component/Home/Navbar/SchoolNavbar";
import { Container, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
import "./Home.scss";
import SchoolVector from '../Assets/school-art.svg';
const FredmatForSchools = () => {
  const history = useHistory();

  return (
    <div className="vh-100 p-d-flex bg-light p-flex-column">
      <SchoolNavbar bg="white" variant="light" classes="p-shadow-8" />
      <div className="p-d-flex p-flex-wrap  p-ai-center h-100 h-bg">
        <div className="p-col-12 p-md-7 p-px-6">
          <Fade left>
            <Jumbotron
              fluid
              style={{
                color: "rgb(170, 48, 48)",
                background: "transparent",
                marginBottom: "0em",
              }}
            >
              <Container>
                <h1
                  style={{ fontSize: "5vh" }}
                  className="my-4 text-center text-lg-left"
                >
                  Hey There!!
                </h1>
                <p
                  style={{ fontSize: "2.5vh" }}
                  className="my-2 text-center text-lg-left"
                >
                  Welcome to EduStart for Schools
                </p>
              </Container>
              <img src={SchoolVector} alt="" />
            </Jumbotron>
          </Fade>
        </div>
        <div className="p-col-12 p-md-5">
          <Fade right>
            <div
              className="redbtn"
              onClick={() => history.push("/school/register")}
            >
              Register Your School
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FredmatForSchools;
