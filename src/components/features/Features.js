import React from "react";
import { Row, Col } from "react-bootstrap";
import delivaryImage from "../../assets/images/delivery.png";
import "../Styles.css";

const Features = () => {
  return (
    <>
      <Row className="features-row">
        <Col lg="5" className="features-right-image-col">
          <img src={delivaryImage} alt="" className="features-right-image" />
        </Col>
        <Col lg="7" className="features-content">
          <h1 className="features-title">Features</h1>
        </Col>
      </Row>
    </>
  );
};

export default Features;
