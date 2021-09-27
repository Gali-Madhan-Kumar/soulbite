import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "../Styles.css";
import handImage from "../../assets/images/Hand.png";

const Home = () => {
  return (
    <>
      <Row className="home-section-row">
        <Col lg="8" className="home-section-col-one">
          <div className="headings">
            <div className="heading-one">
              <h1>YOUR</h1>
              <h1>NEIGHBOURHOOD</h1>
            </div>
            <div className="heading-two">
              <h1>ONLINE</h1>
              <h1>GROCERY STORE</h1>
            </div>
            <div className="products">
              <Button className="btn products-btn">SHOP ALL PRODUCTS</Button>
            </div>
            <div className="devices-btns">
              <Button className="btn android-btn">Android</Button>
              <Button className="btn ios-btn">Ios</Button>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <img src={handImage} alt="" className="image" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
