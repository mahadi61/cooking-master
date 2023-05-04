import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { singInWithEmail, singInWithGoogle, singInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSingIn = () => {
    singInWithGithub()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Form
            className="border border-black shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center mb-4">Login</h1>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </Form.Group>
            <span className="text-danger mt-2">{error}</span>
            <Button
              className="brand-color-bg fw-bold border border-0 w-100 mt-4"
              type="submit"
            >
              Login
            </Button>
            <hr className="" />

            <Button
              onClick={handleGoogleSignIn}
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
              onClick={handleGithubSingIn}
              variant="light"
              className="d-flex justify-content-center gap-2 mt-3 w-100"
            >
              <BsGithub className="fs-4" />
              Continue with Github
            </Button>

            <p className="text-center mt-2">
              New to Cooking Master?{" "}
              <Link to="/register" className="text-warning">
                Register Here
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
