import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <Container className="">
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <img
            style={{ height: "400px" }}
            className=""
            src="https://i.ibb.co/g6ZHpMt/Untitled-design-2.png"
            alt=""
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={6} className="text-center">
          <h2 className="mb-8 fw-bold">
            <span className="">Error</span> {status || 404}
          </h2>
          <p className="fw-semibold">{error?.message}</p>
          <Link to="/" className="fw-semibold btn btn-danger rounded">
            Back to homepage
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
