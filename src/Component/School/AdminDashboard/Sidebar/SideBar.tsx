import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faListAlt,
  faEdit,
  faQuestionCircle,
  faSearch,
  faChartLine,
  faChartPie,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import qs from "query-string";
import { Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";

const SideBar = () => {
  const parsed = qs.parse(window.location.search);
  const schoolAdminDetails = useSelector((state) => state.schoolAdminDetails);
  const history = useHistory();
  const [ActiveView, setActiveView] = useState("general");
  const [openPerfomance, setopenPerfomance] = useState(false);
  useEffect(() => {
    setActiveView(parsed.view);
    console.log("view is ", parsed.view);
  }, [parsed.view]);

  return (
    <ul
      className="ev-sidebar navbar-nav bg-gradient-primary mysidebar  accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <div
        className="nav-brand-area
      flex-column
       d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-text mx-3">EduStart</div>
        <small>{schoolAdminDetails?.schoolDetails?.schoolName}</small>
      </div>
      <Nav
        className="sidebar-nav"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item
          className={`sidebar-item flex 
          ${
            ActiveView === "general" || typeof ActiveView === "undefined"
              ? "sidebar-item-active"
              : ""
          } `}
          onClick={() => history.push("/school-admin/dashboard?view=general")}
        >
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>
            <Link
              style={{ color: "whitesmoke" }}
              to="/school-admin/dashboard?view=general"
            >
              General Details
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item
          className={`sidebar-item flex 
          ${ActiveView === "inquiries" ? "sidebar-item-active" : ""}`}
          onClick={() => history.push("/school-admin/dashboard?view=inquiries")}
        >
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faListAlt} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>
            <Link
              style={{ color: "whitesmoke" }}
              to="/school-admin/dashboard?view=inquiries"
            >
              Inquiries
            </Link>
          </Nav.Link>
        </Nav.Item>

        {/* <Nav.Item className={`sidebar-item flex`}
          onClick={() => setopenPerfomance(!openPerfomance)}
          aria-controls="example-collapse-text"
          aria-expanded={openPerfomance}
        >
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>Performance</Nav.Link>
        </Nav.Item> */}
        {/* <Collapse in={openPerfomance} >
          <div id="example-collapse-text" style={{ width: "100%" }}>
            <Nav.Item className=" sidebar-item">
              <Nav.Link style={{ marginLeft: "15%" }}>
                <Link to=/school-admin"dashboard?view=performance-reports">
                  <div className="flex">
                    <div className="sidebar-item-icon ">
                      <FontAwesomeIcon icon={faChartPie} />
                    </div>
                    <div className="sidebar-item-name">Reports</div>
                  </div>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Collapse> */}

        <Nav.Item
          className={`sidebar-item flex
         ${ActiveView === "settings" ? "sidebar-item-active" : ""}
        `}
          onClick={() => history.push("/school-admin/dashboard?view=settings")}
        >
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>
            <Link
              style={{ color: "whitesmoke" }}
              to="/school-admin/dashboard?view=settings"
            >
              Settings
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item
          to="/school-admin/dashboard?view=feeds"
          className={`sidebar-item flex
          ${ActiveView === "feeds" ? "sidebar-item-active" : ""}`}
          onClick={() => history.push("/school-admin/dashboard?view=feeds")}
        >
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>
            <Link
              style={{ color: "whitesmoke" }}
              to="/school-admin/dashboard?view=feeds"
            >
              Feeds
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className={`sidebar-item flex`}>
          <div className="sidebar-item-icon ">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <Nav.Link className={`sidebar-item-name `}>Help</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="flex flex-col sidebar-footer">
        <div className="flex flex-jc-center" style={{ color: "white" }}>
          Expiration Date
        </div>
        <div className="flex flex-jc-center" style={{ color: "#C8C8C8 " }}>
          <small> Jan 30, 2021 11:59 PM EDT</small>
        </div>
      </div>
    </ul>
  );
};

export default SideBar;
