import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row className="footer">
        <div className="footer-items">
          <Col lg="3">
            <div>support@soulbite.com</div>
            <div>0123456789</div>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default Footer;
