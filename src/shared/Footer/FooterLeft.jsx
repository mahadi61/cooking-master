import React from "react";
import { Button } from "react-bootstrap";

const FooterLeft = () => {
  return (
    <div>
      <h3 className="text-center fw-bold footer-primary text-decoration-underline">
        About
      </h3>
      <p className="footer-primary">
        We create simple, delicious recipes that require 5 ingredients or less,
        one bowl, or 30 minutes or less to prepare.
      </p>
      <Button className="btn-danger footer-primary fw-bold">Contact Us</Button>
    </div>
  );
};

export default FooterLeft;
