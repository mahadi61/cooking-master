import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterLast from "./FooterLast";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <FooterLeft></FooterLeft>
        </Col>
        <Col sm={4}>
          <FooterRight></FooterRight>
        </Col>
        <Col sm={4}>
          <FooterLast></FooterLast>
        </Col>
      </Row>
      <div className="text-center footer-primary">
        Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
      </div>
    </Container>
  );
};

export default Footer;
