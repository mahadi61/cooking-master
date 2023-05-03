import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css";

const Header = () => {
  const { name } = useContext(AuthContext);
  console.log(name);

  return (
    <Navbar
      className="shadow p-3 mb-2 bg-body-tertiary rounded"
      bg="white"
      variant="white"
    >
      <Navbar.Brand to="/">
        <Link to="/" className="text-decoration-none">
          <span className="fs-3 fw-bold brand-color ">Cooking Master</span>
        </Link>
      </Navbar.Brand>
      <Nav className="mx-auto fs-4 fw-semi">
        <Link to="/" className="text-decoration-none nav-color me-3">
          Home
        </Link>
        <Link to="/blog" className="text-decoration-none nav-color">
          Blog 
        </Link>
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
