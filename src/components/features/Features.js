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
            <div className="features_content">
              <ol className="ordered_list">
                <li className="list">
                  Product Range
                  <ul className="inner_unordered_list">
                    We have a 20 Categories with more than 360 products
                  </ul>
                </li>
                <li className="list">
                  Quality
                  <ul className="inner_unordered_list">
                    Fresh, Hygienic And Sanitized Products
                  </ul>
                </li>
                <li className="list">
                  Great Deals
                  <ul className="inner_unordered_list">
                    Stunning And Exciting Offers on all products throughout the
                    year.
                  </ul>
                </li>
                <li className="list">
                  Easy to order
                  <ul className="inner_unordered_list">
                    Simply Signup, add the products you need in the cart, and
                    checkout. We'll deliver to your doorstep.
                  </ul>
                </li>
                <li className="list">
                  Fastest Delivery
                  <ul className="inner_unordered_list">
                    We deliver the orders within a day (24hrs from the time of
                    purchase)
                  </ul>
                </li>
                <li className="list">
                  Support And Easy Refund
                  <ul className="inner_unordered_list">
                    We are always ready to solve your concerns about the refund
                    And product issues easily.
                  </ul>
                </li>
              </ol>
            </div>
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
