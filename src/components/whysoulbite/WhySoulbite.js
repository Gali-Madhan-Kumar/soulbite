import React from "react";
import { Col, Row } from "react-bootstrap";
import milkImage from "../../assets/images/Milk.png";
import biscuitsImage from "../../assets/images/Biscuits.png";

const WhySoulbite = () => {
  return (
    <>
      <Row className="why_soulbite_row">
        <div className="position-relative">
          <Col lg="6">
            <h1 className="section_heading why_soulbite_section_heading">
              WHY SOULBITE ?
            </h1>
            <div className="why_soulbite_content">
              <div className="content"></div>
              <div className="position-absolute">
                <div className="position-relative biscuits_image">
                  <img src={biscuitsImage} alt="" className="image biscuits" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6"></Col>
          <div className="position-relative why_soulbite_rounded">
            <div className="position-relative milk_image">
              <img src={milkImage} alt="" className="image milk" />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default WhySoulbite;
