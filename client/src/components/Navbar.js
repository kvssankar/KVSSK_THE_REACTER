import React, { useState } from "react";
import "../css/navbar.css";
import myphoto from "../assets/pp.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const HomeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-main" dark expand="md">
        <NavbarBrand href="/">KVSSK</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto tabs" navbar>
            <NavItem className="nav-part">Competitive Coding</NavItem>
            <NavItem className="nav-part">Dev & Design</NavItem>
            <NavItem className="nav-part">My Articles</NavItem>
          </Nav>
          <NavbarText style={{ color: "white" }}>
            <div className="circle-div">
              <img src={myphoto} alt="" />
              <div className="circle"></div>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
