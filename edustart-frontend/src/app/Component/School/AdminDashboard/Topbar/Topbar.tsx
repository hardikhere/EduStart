import React, { useState } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';
import UserInfo from './UserInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Calendar from 'react-calendar';
import FredCalender from '../Base/FredCalender';
import { useSelector } from 'react-redux';


const Topbar = (props) => {
  const [isShrinked, setisShrinked] = useState(false);
  const schoolAdminDetails = useSelector(state => state.schoolAdminDetails)
  const shrinkSidebar = () => {
    var sidebar = document.getElementById("accordionSidebar");
    var fakeSidebar = document.getElementById("fakesidebar");
    var mainContent = document.getElementById("mainContent");
    var evbar = document.getElementById("evbarid");

    setisShrinked(true);
    sidebar.classList.add("hideit")
    sidebar.classList.remove("showit")
    fakeSidebar.style.width = "0%";
    mainContent.style.width = "100%";
    evbar.style.width = '100%';
    console.log(sidebar.className)
  }

  const expandSidebar = () => {
    setisShrinked(false)
    var sidebar = document.getElementById("accordionSidebar");
    var fakeSidebar = document.getElementById("fakesidebar");
    var mainContent = document.getElementById("mainContent");
    var evbar = document.getElementById("evbarid");
    sidebar.classList.remove("hideit");
    sidebar.classList.add("showit")
    fakeSidebar.style.width = "18%";
    mainContent.style.width = "82%";
    evbar.style.width = '82%';
  }

  const handleCollapse = () => {
    isShrinked ? expandSidebar() : shrinkSidebar();
  }
  return (
    <Navbar id="evbarid" collapseOnSelect className="evbar bg-white shadow" expand="lg">
      {/* Sidebar Toggle (Topbar) */}
      <div className="barwrapper " onClick={handleCollapse}>
        <FontAwesomeIcon className={isShrinked ? "rotate180" : "rotate0"} icon={faArrowLeft} />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand className="" href=""><h3>{props.heading ? props.heading : "Create Test"}</h3></Navbar.Brand>

      {/* Topbar Navbar */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <FredCalender />
          </Nav.Link>
          <Nav.Link href="#" eventKey="2" className="d-flex align-items-center">
            {schoolAdminDetails?.schoolDetails?.credits} Credits
          </Nav.Link>
          <Nav.Link href="#" eventKey="2"><UserInfo /></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Topbar;
