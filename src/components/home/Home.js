import React from "react";
import "../Styles.css";
import handImage from "../../assets/images/Hand.png";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_left_inner">
          <div className="heading_one">
            <h1>YOUR</h1>
            <h1>NEIGHBOURHOOD</h1>
          </div>
          <div className="heading_two">
            <h1>ONLINE</h1>
            <h1>GROCERY STORE</h1>
          </div>
          <div className="home_all_products_btn">
            <button className="all_products_btn">SHOP ALL PRODUCTS</button>
          </div>
          <div className="devices_btns">
            <button type="button" className="android_btn">
              Android
            </button>
            <button type="button" className="ios_btn">
              Ios
            </button>
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
