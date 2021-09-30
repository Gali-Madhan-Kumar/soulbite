import React from "react";
import deliveryImage from "../../assets/images/delivery.png";
import spicesImage from "../../assets/images/Spices.png";
import bgCityImage from "../../assets/images/BgCity.png";
import mobileImage from "../../assets/images/mobile.jpg";
import "../Styles.css";

const Features = () => {
  return (
    <>
      <div className="features_container">
        <div className="left_inner">
          <div className="left_inner_image">
            <img src={deliveryImage} alt="" className="delivery_image" />
          </div>
          <div className="left_inner_mobile_image">
            <img src={mobileImage} alt="" className="mobile_image" />
          </div>
        </div>
        <div className="right_inner">
          <div className="right_inner_image">
            <img src={spicesImage} alt="" className="spices_image" />
          </div>
          <div className="right_inner_content">
            <h1 className="section_heading features_heading">Features</h1>
          </div>
          <div className="features_bottom_image">
            <img src={bgCityImage} alt="" className="bg_city_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
