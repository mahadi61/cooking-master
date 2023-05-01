import React from "react";
import { Col, Row } from "react-bootstrap";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div className="">
      <Row>
        <Col sm={4}>
          <FooterLeft></FooterLeft>
        </Col>
        <Col sm={8}>
          <FooterRight></FooterRight>
        </Col>
      </Row>
      <div className="text-center">
        Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
