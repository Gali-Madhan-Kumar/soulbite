import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "../Styles.css";
import handImage from "../../assets/images/Hand.png";

const Home = () => {
  return (
    <>
      <Row className="home_row">
        <Col lg="7" className="headings_col">
          <div className="headings">
            <div className="heading_one">
              <h1>YOUR</h1>
              <h1>NEIGHBOURHOOD</h1>
            </div>
            <div className="heading_two">
              <h1>ONLINE</h1>
              <h1>GROCERY STORE</h1>
            </div>
          </div>
          <div className="products_btn_div">
            <Button className="products_btn">SHOP ALL PRODUCTS</Button>
          </div>
          <div className="devices_btns">
            <Button className="android_btn">Android</Button>
            <Button className="ios_btn">Ios</Button>
          </div>
        </Col>
        <Col lg="5" className="hand_image">
          <img src={handImage} className="image hand" alt="" />
        </Col>
        <Col lg="12" className="position-absolute">
          <div className="company_title position-relative">
            <h1 className="company_title_name">SOULBITE</h1>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
