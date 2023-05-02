import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login submission
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Form
            className="border border-black shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center mb-4">Register</h1>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Photo Url"
                name="url"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Button
              className="brand-color-bg fw-bold border border-0 w-100 mt-4"
              type="submit"
            >
              Register
            </Button>
            <hr className="" />

            <Button
              variant="light"
              className="d-flex justify-content-center gap-2 w-100"
            >
              <img
                style={{ width: "25px" }}
                alt="Google login"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svog.png"
              />
              Continue with Google
            </Button>
            <Button
              variant="light"
              className="d-flex justify-content-center gap-2 mt-3 w-100"
            >
              <BsGithub className="fs-4" />
              Continue with Github
            </Button>

            <p className="text-center mt-2">
              Already have an account?
              <Link to="/login" className="text-warning">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
