import React from "react";
import "../Styles.css";
import vectorImage from "../../assets/images/Vector.png";
import almondsImage from "../../assets/images/Almonds.png";

const Soulbite = () => {
  return (
    <>
      <div className="soulbite_container">
        <div className="soulbite_left_inner">
          <div className="soulbite_left_left_image">
            <img src={almondsImage} alt="" className="almonds_image" />
          </div>
          <div className="soulbite_left_image">
            <img src={vectorImage} alt="" className="vector_image" />
          </div>
        </div>
        <div className="soulbite_right_inner">
          <h1 className="section_heading soulbite_heading">
            What is Soulbite ?
          </h1>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-sub soulbite_content">
                Soulbite is the Largest Online Grocery Store in Bangalore for
                your daily grocery and essentials needs make it easy to shop
                online at your place. We have a wide range of products with
                unbeatable prices and deliver directly to your doorstep. We
                always strive to provide the best and premium quality products
                from our house to make your home happy and keep you healthy
                always.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soulbite;
