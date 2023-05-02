import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="shadow p-3 mb-2 bg-body-tertiary rounded"
      bg="white"
      variant="white"
    >
      <Navbar.Brand to="/">
        <span className="fs-3 fw-bold brand-color ">Cooking Master</span>
      </Navbar.Brand>
      <Nav className="mx-auto fs-4 fw-semi">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Blog </Nav.Link>
      </Nav>
      <Nav>
        <CgProfile className="fs-1 me-3" />
        <Link to="/">
          <Button className="brand-color-bg fw-bold border border-0">
            Login
          </Button>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
