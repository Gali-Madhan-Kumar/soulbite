import React from "react";
import { Col, Row } from "react-bootstrap";
import googlePlayImage from "../../assets/images/Google.png";
import iosAppImage from "../../assets/images/Ios.png";

const Footer = () => {
  return (
    <>
      <Row className="footer_container">
        <div className="footer_inner">
          <Col lg="3" xs="12">
            <div className="footer_items">
              <span className="footer_section_title">Contact Us</span>
              <div className="contact_section footer_section_content">
                <i className="fa fa-phone phone_icon" />
                <span>+91 8123231823</span>
              </div>
              <div className="contact_section footer_section_content">
                <i className="fa fa-envelope email_icon" />
                <span>soulbite.pe@gmail.com</span>
              </div>
              <div className="contact_section address footer_section_content">
                <div>Radiant Silver Bell 2, Sadarmanagala,</div>
                <div>Kodigehalli Road, Kodigehalli Road, Hoodi,</div>
                <div>Bangalore, Karnataka - 560067</div>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="12">
            <div className="footer_items">
              <span className="footer_section_title">Quick Links</span>
              <div className="contact_section address footer_section_content">
                <div>
                  <a href=" https://soulbite.in/policy/soulbitesbc/storeprivacy">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="contact_section address footer_section_content">
                <div>
                  <a href=" https://soulbite.in/policy/soulbitesbc/storeterms">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="12">
            <div className="footer_items">
              <span className="footer_section_title">Social Links</span>
              <div className="footer_section_content">
                <a href="https://www.facebook.com/soulbitemart/">
                  <i className="contact_section fa fa-facebook facebook" />
                </a>
                <a href="https://www.instagram.com/soulbitemart/">
                  <i className="contact_section fa fa-instagram instagram" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="3">
            <div className="footer_items">
              <span className="footer_section_title">
                Download Soulbite App
              </span>
              <div className="footer_section_content">
                <a href=" https://play.google.com/store/apps/details?id=com.rodeodigital.soulbitesbc">
                  <img src={googlePlayImage} alt="" className="android_image" />
                </a>
                <a href=" https://apps.apple.com/in/app/soulbite-online-grocery-store/id1544748371">
                  <img src={iosAppImage} alt="" className="ios_image" />
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default Footer;
