import React from "react";
import { Col, Row } from "react-bootstrap";
import milkImage from "../../assets/images/Milk.png";
import biscuitsImage from "../../assets/images/Biscuits.png";

const WhySoulbite = () => {
  return (
    <>
      <Row className="why-soulbite-row">
        <Col lg="6">
          <h1 className="why-soulbite-title">WHY SOULBITE ?</h1>
          <div className="why_soulbite_content"></div>
        </Col>
        <Col lg="6" className="position-relative">
          <span className="position-absolute top-50 start-100 translate-middle p-3 bg-danger border border-light rounded-circle milk-round">
            <img src={milkImage} alt="" className="why-soulbite-right-image" />
          </span>
        </Col>
        <Col lg="3">
          <img src={biscuitsImage} alt="" className="why-soulbite-left-image" />
        </Col>
      </Row>
    </>
  );
};

export default WhySoulbite;
