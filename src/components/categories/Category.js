import React from "react";
import { Row, Col } from "react-bootstrap";
import dalImage from "../../assets/images/Dal.png";

const Category = () => {
  return (
    <>
      <Row>
        <Col lg="12">
          <h1 className="category-title">OUR CATEGORIES</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="3" className="cat-col">
          <div className="category position-relative">
            <span className="position-absolute top-0 start-100 translate-middle p-3 bg-warning border border-light rounded-circle">
              <span className="circle-text">Cooking Essentials</span>
            </span>
          </div>
        </Col>
        <Col lg="3" className="cat-col">
          <div className="category position-relative">
            <span className="position-absolute top-100 start-0 translate-middle p-3 bg-success border border-light rounded-circle">
              <span className="circle-text">
                Branded <br /> Foods
              </span>
            </span>
          </div>
        </Col>
        <Col lg="3" className="cat-col">
          <div className="category position-relative">
            <span className="position-absolute top-0 start-100 translate-middle p-3 bg-secondary border border-light rounded-circle">
              <span className="circle-text">
                Dry <br />
                Fruits
              </span>
            </span>
          </div>
        </Col>
        <Col lg="3" className="cat-col">
          <div className="category position-relative">
            <span className="position-absolute top-100 start-0 translate-middle p-3 bg-info border border-light rounded-circle">
              <span className="circle-text">
                Soft <br /> Drinks
              </span>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <img src={dalImage} alt="" className="cat-left-image image" />
        </Col>
      </Row>
    </>
  );
};

export default Category;
