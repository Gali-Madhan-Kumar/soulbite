import React from "react";
import { Col, Row } from "react-bootstrap";
import googlePlayImage from "../../assets/images/Google.png";
import iosAppImage from "../../assets/images/Ios.png";

const Footer = () => {
  return (
    <>
      <Row className="footer_row">
        <Col lg="2" className="footer_cols">
          <div className="footer_section_titles">
            <p>Contact Us</p>
          </div>
          <div>
            <p>soulbite@gmail.com</p>
          </div>
          <div>
            <p>9987654321</p>
          </div>
        </Col>
        <Col lg="2" className="footer_cols">
          <div className="footer_section_titles">
            <p>Quick Links</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </Col>
        <Col lg="2" className="footer_cols">
          <div className="footer_section_titles">
            <p>Cities We Serve</p>
          </div>
          <div>
            <p>Bengaluru</p>
          </div>
          <div>
            <p>Hyderabad</p>
          </div>
          <div>
            <p>Pune</p>
          </div>
        </Col>
        <Col lg="2" className="footer_cols">
          <div className="footer_section_titles download_app">
            <p>Download Soulbite App</p>
          </div>
          <div className="footer_section_titles app_image">
            <img alt="" className="image" src={googlePlayImage} />
          </div>
          <div className="footer_section_titles app_image">
            <img alt="" className="image" src={iosAppImage} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
