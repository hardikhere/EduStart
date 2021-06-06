import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Base from '../../Component/Base/Base';
import "./style.scss";
import vissionSvg from "../../Assets/spyglass.png";
import briefSVG from "../../Assets/idea.png";
import TeamSVG from "../../Assets/team.png";
import Fade from "react-reveal/Fade";
const About = () => {
    return (
        <Base >
            <div className="about-title-container">
                < h2 className=""> About FredMat</h2 >
            </div>
            <Container className="d-flex justify-content-center flex-wrap bg-light">
                <div className="d-flex flex-wrap justify-content-center ">
                    <Fade left>
                        <div className="aboutcard reddish redborder">
                            <Row>
                                <Col md={2} className="d-flex justify-content-center align-items-center p-3">
                                    <img src={vissionSvg} style={{ width: "100%", maxWidth: "50vw" }} alt="" srcset="" />
                                </Col>
                                <Col md={10}>
                                    <h3>Our Vision</h3>
                                    <div className="aboutcard-content red">
                                        FREDMAT is envisioned to provide benefits of
                                        technology to small & medium sized schools at
                                        lowest cost so that quality of education is improved.
                            </div>
                                </Col>
                            </Row>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="aboutcard greenish greenborder">
                            <Row>
                                <Col md={2} className="d-flex justify-content-center align-items-center p-3">
                                    <img src={briefSVG} style={{ width: "100%", maxWidth: "50vw" }} alt="" srcset="" />
                                </Col>
                                <Col md={10}>
                                    <h3>Brief</h3>
                                    <div className="aboutcard-content green">
                                        FREDMAT is a “Free education management tool” for
                                        schools to build online presence and get competitive advantage at
                                        least cost.
                            </div>
                                </Col>
                            </Row>
                        </div>
                    </Fade>



                    <Fade left>
                        <div className="aboutcard blueish blueborder">
                            <Row>
                                <Col md={2} className="d-flex justify-content-center align-items-center p-3">
                                    <img src={TeamSVG} style={{ width: "100%", maxWidth: "50vw" }} alt="" srcset="" />
                                </Col>
                                <Col md={10}>
                                    <h3>Team</h3>
                                    <div className="aboutcard-content blue">
                                        FREDMAT team is founded, operated and managed by team of professional
                                        working for value creation in educational sector.
                            </div>
                                </Col>
                            </Row>
                        </div>
                    </Fade>




                    <Fade right>
                        <div className="aboutcard yellowish yellowborder">
                            <Row>
                                <Col md={2} className="d-flex justify-content-center align-items-center p-3">
                                    <i className="pi pi-envelope"></i>
                                </Col>
                                <Col md={10}>
                                    <h3>Contact</h3>
                                    <div className="aboutcard-content yellow">
                                        Write to us: Write to us directly at FREDBUSINESS@GMAIL.COM.
                            </div>
                                </Col>
                            </Row>
                        </div>
                    </Fade>


                </div>
            </Container>
        </Base >
    )
}

export default About
