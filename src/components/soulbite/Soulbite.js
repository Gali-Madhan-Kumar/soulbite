import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles.css";
import vectorImage from "../../assets/images/Vector.png";

const Soulbite = () => {
  return (
    <>
      <Row className="soulbite-row">
        <Col lg="6">
          <div className="soulbite-image">
            <img src={vectorImage} alt="" className="image" />
          </div>
        </Col>
        <Col lg="6">
          <h1 className="soulbite-heading">What is Soulbite ?</h1>
        </Col>
      </Row>
    </>
  );
};

export default Soulbite;
