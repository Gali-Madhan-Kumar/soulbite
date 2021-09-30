import React from "react";
import "../Styles.css";
import handImage from "../../assets/images/Hand.png";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_left_inner">
          <div className="heading_one">
            <h1>Minimum 5% off</h1>
            <h1>across all the products</h1>
          </div>
          <div className="heading_two">
            <h3>Free orders above &#8377;1000 INR purchases</h3>
          </div>
          <div className="home_all_products_btn">
            <a
              href="https://www.soulbite.in/home_"
              className="all_products_btn btn"
            >
              SHOP ALL PRODUCTS
            </a>
          </div>
          <div className="devices_btns">
            <a
              className="btn android_btn"
              href="https://play.google.com/store/apps/details?id=com.rodeodigital.soulbitesbc"
            >
              Android
            </a>
            <a
              href="https://apps.apple.com/in/app/soulbite-online-grocery-store/id1544748371"
              className="ios_btn btn"
            >
              Ios
            </a>
          </div>
        </div>
        <div className="home_right_inner">
          <img src={handImage} alt="" className="hand_image" />
        </div>
      </div>
    </>
  );
};

export default Home;
