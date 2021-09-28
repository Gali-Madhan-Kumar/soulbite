import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles.css";
import vectorImage from "../../assets/images/Vector.png";
import almondsImage from "../../assets/images/Almonds.png";

const Soulbite = () => {
  return (
    <>
      <Row className="soulbite_row">
        <Col lg="6">
          <div className="position-relative">
            <div className="position-relative almonds_image">
              <img src={almondsImage} alt="" className="image" />
            </div>
            <div className="position-relative vector_image">
              <img src={vectorImage} alt="" className="image" />
            </div>
          </div>
        </Col>
        <Col lg="6">
          <h1 className="section_heading">What is Soulbite ?</h1>
        </Col>
      </Row>
    </>
  );
};

export default Soulbite;
