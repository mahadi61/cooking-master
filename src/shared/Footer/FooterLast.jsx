import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const FooterLast = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Button
          className="btn-danger footer-primary fw-bold"
          variant="outline-secondary"
          id="button-addon1"
        >
          Subscribe
        </Button>
        <Form.Control
          placeholder="Enter you email"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <h3 className="footer-primary">
        Subscribe To Get Latest Recipe Form Best Chef
      </h3>
    </div>
  );
};

export default FooterLast;
