import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white" variant="white">
      <Navbar.Brand href="#home">
        <span className="fs-3 fw-bold brand-color ">Cooking Master</span>
      </Navbar.Brand>
      <Nav className="mx-auto fs-4 fw-semi">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Blog </Nav.Link>
      </Nav>
      <Nav>
        <CgProfile className="fs-1 me-3" />
        <Link to="/login">
          <Button className="brand-color-bg fw-bold border border-0">
            Login
          </Button>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
