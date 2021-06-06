import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ContactUsForm from "../School/ContactUsForm/ContactUsForm";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./style.scss";
import { distance } from "../../utils/common";
import { useSelector } from "react-redux";
import ShortListIcon from "./ShortListIcon";
import schoolDefault from "../../Assets/school1.jpg";

const SearchCard = (props) => {

  const userDetails = useSelector((state) => state.userDetails);
  return (
    <>
      <Row className="sr-card shadow py-3">
        <div
          className="shortlistcard"
        >
          <ShortListIcon sid={props.info.schoolId} />
        </div>
        <Col
          md={3}
          className="d-flex align-items-center justify-content-center m-0 p-0"
        >

          <img
            style={{
              width: "100%",
              maxWidth: "10rem",
            }}
            className="sr-card-img"
            src={props.info.logoUrl || schoolDefault}
            alt="school logo"
          />

        </Col>
        <Col
          md={6}
          className="info-column d-flex flex-column  justify-content-center"
        >
          <h4 style={{ color: "#2E8DA0", wordBreak: "break-all" }}>
            <Link to={`/school/${props.info.schoolId}`}>
              {props.info.schoolName}
            </Link>
          </h4>
          <div className="grey">Jaipur, Rajasthan </div>
          <div className="sr-card-details">
            <div className="sr-card-details-itm">
              <b>School Type :</b> {props.info.schoolType} School
            </div>
            <div className="sr-card-details-itm">
              <b>Board :</b> {props.info.board}
            </div>
            <div className="sr-card-details-itm">
              <b>Type of School : </b> {props.info.classification} School
            </div>
            <div className="sr-card-details-itm">
              {" "}
              <b>Grades :</b> Class 5 To Class 12
            </div>
            <div className="sr-card-details-itm">
              <b> Establishment Year :</b>
              {props.info.yearOfEstablishment}
            </div>
          </div>
        </Col>

        <Col
          md={3}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="sr-card-btns">
            {props.info.longitude && !!window.localStorage.getItem("latitude") && (
              <div
                className="d-flex"
                style={{
                  width: "100%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <i className="pi pi-map-marker"></i>
                {distance(
                  parseFloat(window.localStorage.getItem("latitude")),
                  parseFloat(props.info?.latitude?.$numberDecimal),
                  parseFloat(window.localStorage.getItem("longitude")),
                  parseFloat(props.info?.longitude?.$numberDecimal)
                ).toPrecision(3) + " km far"}
              </div>
            )}

            <Fade cascade>
              <div
                className="ratings"
                style={{ color: "#28a745", alignSelf: "center" }}
              >
                <i className="pi pi-star"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-star"></i>
              </div>
            </Fade>
            <Link to="/school/camb" style={{ textDecoration: "none" }}>
              <Button variant="danger" block>
                View Profile
              </Button>
            </Link>
            <ContactUsForm sid={props.info.schoolId} schoolInfo={props.info} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SearchCard;
