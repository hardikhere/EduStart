import React from "react";
import "./Home.scss";
import Fade from "react-reveal/Fade";
import Navbar from "../Component/Home/Navbar/NavbarB";
import SearchBar1 from "../Component/Home/SearchBar1/SearchBar1";
import { Container, Jumbotron } from "react-bootstrap";
import LatestFeeds from "../Component/Home/LatestFeeds/LatestFeeds";
import StudentsVector from "../Assets/students.png";

const Home = () => {
  return (
    <div className=" p-d-flex p-flex-column">
      <Navbar bg="white" variant="light" classes="p-shadow-8" />
      <div className="p-d-flex p-flex-wrap p-ai-center right_home ">
        {/* <img src={RedBack} alt="" className="h-bg" draggable={false} /> */}

        <div className="p-col-12 p-md-7 p-sm-0 p-px-6">
          <Fade left>
            <Jumbotron
              fluid
              style={{
                backgroundColor: "transparent",
                color: "white",
                marginBottom: "0em",
              }}
            >
              <img
                src={StudentsVector}
                alt=""
                className="students_vector"
                draggable={false}
              />
              <Container className="home_text shadow-md shadow p-3 mb-5 posision-absolute">
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
                  Find the best school for your child, right at your fingertips.
                  <br />
                  Listing more than 16000+ Schools in your area.
                </p>
              </Container>
            </Jumbotron>
          </Fade>
        </div>
        <div className="p-col-12 p-md-5 ">
          <Fade right>
            <SearchBar1 />
          </Fade>
        </div>
      </div>
      <LatestFeeds />
    </div>
  );
};

export default Home;
