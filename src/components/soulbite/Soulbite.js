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
        </div>
      </div>
    </>
  );
};

export default Soulbite;
