import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import ReactToPdf from 'react-to-pdf';
// const ref = React.createRef();

const Blog = () => {
  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-md-center  my-2">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  Differences between uncontrolled and controlled components
                </Card.Title>
                <Card.Text>
                  Controlled components in React are those whose state and
                  behavior are managed by the parent component. To modify their
                  state and behavior, these components rely on props that are
                  given down from the parent component. Components that control
                  their own state on an internal level are referred to as
                  uncontrolled components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-2">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  How to validate React props using PropTypes
                </Card.Title>
                <Card.Text>
                  React's PropTypes package enables  to verify the data types of
                  the props on your component. This can aid in early error
                  detection, better code readability, and the avoidance of
                  type-related issues. The anticipated kinds of  props can be
                  defined using PropTypes, along with their necessary or
                  optional status. If a prop is provided with a different data
                  type than anticipated or if a necessary prop is not provided,
                  PropTypes will issue a warning in the console.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-2">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  The difference between nodejs and express js
                </Card.Title>
                <Card.Text>
                  Using the open-source runtime environment Node.js, JavaScript
                  code can be executed outside of a web browser. In addition to
                  a module structure that enables  to utilize and share reusable
                  code, it offers a set of APIs that let  interface with the
                  file system, network, and other low-level system resources.
                  <p>
                    Contrarily, Express.js is a web framework for Node.js that
                    offers a selection of tools and functionality for creating
                    APIs and online applications. It adds a higher-level API for
                    managing HTTP requests, routing, middleware, and other
                    things on top of the Node.js core. Because of how
                    lightweight and adaptable Express.js is, developers may
                    utilize it in a variety of ways based on the requirements of
                    their application.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-2">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  What is a custom hook, and why will you create a custom hook?
                </Card.Title>
                <Card.Text>
                  A reusable JavaScript function called a "custom hook" in React
                  lets us exchange logic between components. With the help of
                  custom hooks, we can separate functionality from components so
                  that it may be applied elsewhere, making our code more modular
                  and simpler to maintain.
                  <p>
                    We might develop a custom hook to solve a particular issue
                    that the built-in React hooks are unable to address or to
                    abstract away some complicated functionality for easy
                    reusability throughout our application. To manage the state
                    of a complex component or to handle form validation, for
                    instance, we might develop a custom hook.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <ReactToPdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf> */}
    </>
  );
};

export default Blog;
