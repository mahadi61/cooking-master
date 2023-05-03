import React, { useContext } from "react";
import { Button, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  console.log(user);
  return (
    <Navbar
      className="shadow p-3  bg-body-tertiary rounded"
      bg="white"
      variant="white"
    >
      <Navbar.Brand to="/">
        <Link to="/" className="text-decoration-none">
          <span className="fs-3 fw-bold brand-color ">Cooking Master</span>
        </Link>
      </Navbar.Brand>
      <Nav className="mx-auto fs-4 fw-semi">
        <NavLink to="/" className="text-decoration-none nav-color me-3">
          Home
        </NavLink>
        <NavLink to="/blog" className="text-decoration-none nav-color">
          Blog 
        </NavLink>
      </Nav>
      <Nav>
        {user && (
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip id="tooltip-left">{user?.displayName}</Tooltip>}
          >
            <img
              className="rounded-circle me-3"
              style={{ height: "35px" }}
              src={user?.photoURL}
              alt="user image"
            />
          </OverlayTrigger>
        )}
        {user ? (
          <Button
            onClick={handleLogOut}
            className="brand-color-bg fw-bold border border-0"
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button className="brand-color-bg fw-bold border border-0">
              Login
            </Button>
          </Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
