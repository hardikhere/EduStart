import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Home/Navbar/NavbarB";
import { Fade } from "react-reveal";
import { Carousel} from "react-bootstrap";
import "./SchoolProfile.scss";
import ContactUsForm from "../Component/School/ContactUsForm/ContactUsForm";
import axiosInstance from "../utils/axiosInstance";
import { APIS } from "../utils/endpoints";
import Skeleton from "react-loading-skeleton";
import ShareButtonGroup from "../Component/ShareButtonGroup";
import ReviewForm from "../Component/ReviewForm";
import ShortListIcon from "../Component/SearchPage/ShortListIcon";
import ReviewCard from "../Component/School/Profile/ReviewCard";

const imgCarousel = (image) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100 h-100" style={{ maxHeight: "15rem" }} src={image} alt="Slide" />
    </Carousel.Item>
  );
};

const defaultBanner =
  "https://cdn-az.allevents.in/banners/85247e50-8d8c-11e9-a1df-7bf3968442c2-rimg-w518-h350-gmir.png";

const SchoolProfile = () => {

  const params = useParams();
  const [schoolInfo, setschoolInfo] = useState({});
  const [loading, setloading] = useState(false);
  // const [showShareButton, setShowShareButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    axiosInstance.get(APIS._getSchoolById(params.sid)).then((res) => {
      console.log("school data is ", res.data);
      setschoolInfo(res.data.data);
      setloading(false);
    });
  }, [params.sid]);

  const [reviewShowLimit, setreviewShowLimit] = useState(5)
  return (
    <div>
      <Navbar bg="light" classes="p-shadow-6 p-mb-4" />
      <div
        className="p-d-flex sP-cover"
        style={{
          backgroundImage: !loading
            ? `url(${schoolInfo?.imageUrls?.length > 0
              ? schoolInfo.imageUrls[0]
              : defaultBanner
            })`
            : defaultBanner,
        }}
      ></div>
      <div className="p-d-flex p-px-6 p-jc-between">
        <div
          className="sP-logo p-shadow-10"
          style={{
            backgroundImage: `url(${schoolInfo.logoUrl})`,
            padding: "0.3rem",
          }}
        ></div>
        <ShareButtonGroup url={window.location.href} />

        <div className="p-col p-text-right">
          <Fade text>
            <h1 className="p-2">
              {loading ? <Skeleton width="60%" /> : schoolInfo.schoolName}
            </h1>
            <p className="p-2">
              {loading ? <Skeleton width="60%" /> : schoolInfo.address}
            </p>
          </Fade>
          {/* <Fade cascade>
                        <div className="p-2 ratings">
                            <i className="pi pi-star"></i>
                            <i className="pi pi-star"></i>
                            <i className="pi pi-star"></i>
                            <i className="pi pi-star"></i>
                        </div>
            </Fade> */}
        </div>
      </div>
      <div className="p-grid p-jc-between p-nogutter p-px-2 p-mt-1">
        <div className="p-col-12 p-md-4 p-jc-center p-ai-center">
          <div className="p-d-flex p-flex-row p-jc-evenly">
            <ShortListIcon isProfile={true} sid={schoolInfo.schoolId} />
            <ContactUsForm />
            <ReviewForm />
          </div>
          {/* <div className="p-d-flex p-flex-row w-100 p-jc-around sP-infocard p-ai-center p-shadow-14 p-my-4">
            <div className="p-d-flex p-flex-column p-ai-center p-pt-3">
              <h6>
                <i className="pi pi-heart p-mr-2"></i>3.9
              </h6>
              <p>Parents Ratings</p>
            </div>

            <div className="p-d-flex p-flex-column p-ai-center  p-pt-3">
              <h6>
                <i className="pi pi-heart p-mr-2"></i>4.2
              </h6>
              <p>FredMat Score</p>
            </div>
          </div> */}

          <div className="p-d-flex p-flex-row w-100 p-jc-around p-flex-row sP-infocard p-ai-center p-shadow-14 p-my-4">
            <div className="p-d-flex p-flex-column p-ai-center  p-pt-3">
              <h6>₹ {`${schoolInfo.fees?.annualFeeFrom || "N.A"} to 
              ${schoolInfo.fees?.annualFeeTo || "N.A"} `
                || "N.A"}</h6>
              <p style={{ fontSize: "0.8em" }}>Annual Fees</p>
            </div>

            <div className="p-d-flex p-flex-column p-ai-center  p-pt-3">
              <h6>{schoolInfo.board}</h6>
              <p style={{ fontSize: "0.8em" }}>School Board</p>
            </div>

            <div className="p-d-flex p-flex-column p-ai-center  p-pt-3">
              <h6>{schoolInfo.classification} School</h6>
              <p style={{ fontSize: "0.8em" }}>Gender Classification</p>
            </div>
          </div>
          <div className="p-d-flex p-shadow-14 p-my-4">
            <Carousel
              controls={false}
              interval="1500"
              pause="false"
              indicators={false}
              className=""
            >
              {schoolInfo.imageUrls?.map((link) => imgCarousel(link))}
            </Carousel>
          </div>

          <div className="p-shadow-14 p-px-4 p-my-4">
            <h4 className="sP-head">
              <center>
                <span className="r-bar">Reviews</span>
              </center>
            </h4>
            <div className=" d-flex flex-column align-items-center flex-wrap">
              {
                schoolInfo.reviews?.map((review, index) => {
                  if (index > reviewShowLimit) return null;
                  return <React.Fragment key={Math.random().toString()}>
                    <ReviewCard {...review} />
                  </React.Fragment>
                })
              }
            </div>
            {reviewShowLimit < schoolInfo?.reviews?.length && <div
              className="redbtn"
              onClick={() => {
                setreviewShowLimit(reviewShowLimit + 5)
              }}
            >Show More Reviews</div>}
          </div>
        </div>
        <div className="p-col-12 p-md-8">
          <div className="p-col p-px-4 p-shadow-14">
            <h4 className="sP-head">
              About <span className="r-bar">School</span>
            </h4>
            <p>
              {loading ? <Skeleton count={6} width="60%" /> : schoolInfo.about}
            </p>
          </div>
          <div className="p-col p-px-4 p-mt-4 p-shadow-14">
            <h4 className="sP-head">
              Key <span className="r-bar">Information</span>
            </h4>
            <div className="p-grid">
              <div className="p-col">
                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-book p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>Type of school</p>
                    <h6>
                      {" "}
                      {loading ? <Skeleton /> : schoolInfo.schoolType} School
                    </h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-link p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>
                      Afflilation / Examination Board
                    </p>
                    <h6> {loading ? <Skeleton /> : schoolInfo.board}</h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-users p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>
                      Average Class Strength
                    </p>
                    <h6>77</h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-home p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>Establishment Year</p>
                    <h6>
                      {loading ? <Skeleton /> : schoolInfo.yearOfEstablishment}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-col">
                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-sort-numeric-up-alt p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>Grade</p>
                    <h6> till Class 12</h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-users p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>Students Strength</p>
                    <h6>
                      {loading ? (
                        <Skeleton />
                      ) : schoolInfo?.otherInfo?.numberOfStudents ? (
                        schoolInfo?.otherInfo?.numberOfStudents
                      ) : (
                        "NA"
                      )}
                    </h6>
                  </div>
                </div>


              </div>
              <div className="p-col">
                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-user-plus p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>
                      Seats at entry level Grade
                    </p>
                    <h6>81</h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-globe p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>
                      Language of Instruction
                    </p>
                    <h6>{schoolInfo.otherInfo?.languagesUsed?.map(el => el)}</h6>
                  </div>
                </div>

                <div
                  className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                  style={{ textAlign: "left" }}
                >
                  <div className="p-mr-2">
                    <i
                      className="pi pi-sitemap p-mr-2"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </div>
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>Total no. of Teachers</p>
                    <h6>
                      {loading ? (
                        <Skeleton />
                      ) : schoolInfo?.otherInfo?.numberOfTeachers ? (
                        schoolInfo?.otherInfo?.numberOfTeachers
                      ) : (
                        "NA"
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-col p-px-4 p-mt-4 p-shadow-14">
            <h4 className="sP-head">
              Fees <span className="r-bar">Structure</span>
            </h4>
            <div className="p-col p-d-flex p-flex-wrap p-jc-evenly">
              <div
                className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                style={{ textAlign: "left" }}
              >
                <div className="p-mr-2">
                  <i
                    className="pi pi-wallet p-mr-2"
                    style={{ fontSize: "2em" }}
                  ></i>
                </div>
                <div className="">
                  <p style={{ marginBottom: "0px" }}>Annual Fees</p>
                  <h6>₹ 107800</h6>
                </div>
              </div>

              <div
                className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                style={{ textAlign: "left" }}
              >
                <div className="p-mr-2">
                  <i
                    className="pi pi-wallet p-mr-2"
                    style={{ fontSize: "2em" }}
                  ></i>
                </div>
                <div className="">
                  <p style={{ marginBottom: "0px" }}>Admission Fees</p>
                  <h6>₹ 25000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="p-col p-px-4 p-mt-4 p-shadow-14">
            <h4 className="sP-head">
              Infrastructure <span className="r-bar">Details</span>
            </h4>
            <div className="p-grid">
              {
                !loading && Object.entries(schoolInfo?.infraDetails || {}).map(el => {
                  if (el[0] == '_id') return;
                  return <div
                    className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
                    style={{ textAlign: "left", width: "20%" }}
                  >
                    <div className="p-mr-2">
                      <i
                        className="pi pi-sitemap p-mr-2"
                        style={{ fontSize: "2em" }}
                      ></i>
                    </div>
                    <div className="">
                      <p style={{ marginBottom: "0px" }}>{el[0]}</p>
                      <h6>{el[1] ? "YES" : "NO"}</h6>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          {/* <div className="p-col p-px-4 p-mt-4 p-shadow-14">
            <h4 className="sP-head">
              Admission <span className="r-bar">Details</span>
            </h4>
            <div
              className="p-row p-d-flex p-flex-row p-ai-center p-p-2 p-m-2"
              style={{ textAlign: "left" }}
            >
              <div className="p-mr-2">
                <i
                  className="pi pi-link p-mr-2"
                  style={{ fontSize: "2em" }}
                ></i>
              </div>
              <div className="">
                <p style={{ marginBottom: "0px" }}>Admission Link</p>
                <h6 style={{ color: "blue" }}>
                  cambridgecourtworldschool.org/AdmissionsOpen/
                </h6>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
