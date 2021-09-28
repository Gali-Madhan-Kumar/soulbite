import React from "react";
import { Row, Col } from "react-bootstrap";
import deliveryImage from "../../assets/images/delivery.png";
import spicesImage from "../../assets/images/Spices.png";
import "../Styles.css";

const Features = () => {
  return (
    <>
      <Row className="features_row">
        <Col lg="6">
          <div className="position-relative">
            <div className="position-relative delivery_image">
              <img src={deliveryImage} alt="" className="image delivery" />
            </div>
            <div className="position-relative spices_image">
              <img src={spicesImage} alt="" className="image spices" />
            </div>
          </div>
        </Col>
        <Col lg="6" className="features_content">
          <h1 className="section_heading features_heading">Features</h1>
        </Col>
      </Row>
    </>
  );
};

export default Features;
