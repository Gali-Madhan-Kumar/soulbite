import React from "react";
import { Row, Col } from "react-bootstrap";
import dalImage from "../../assets/images/Dal.png";

const Category = () => {
  return (
    <>
      <Row className="categories_row">
        <Col lg="12">
          <h1 className="section_heading">OUR CATEGORIES</h1>
        </Col>
        <Row className="category_items_row">
          <Col lg="2">
            <div className="category_item">
              <div className="category_name_rounded_green">
                <span>Cooking</span>
                <span>Essentials</span>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <div className="category_item">
              <div className="category_name_rounded_orange">
                <span>Branded</span>
                <span>Foods</span>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <div className="category_item">
              <div className="category_name_rounded_green">
                <span>Dry</span>
                <span>Fruits</span>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <div className="category_item">
              <div className="category_name_rounded_orange">
                <span>Beverages</span>
              </div>
            </div>
          </Col>
        </Row>
        <Col lg="3">
          <div className="position-relative dal_image">
            <img src={dalImage} className="image" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
