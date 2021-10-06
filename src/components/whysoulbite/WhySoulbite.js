import React from "react";
import milkImage from "../../assets/images/Milk.png";
import biscuitsImage from "../../assets/images/Biscuits.png";
import dalImage from "../../assets/images/Dal.png";

const WhySoulbite = () => {
  return (
    <>
      <div className="why_soulbite_container">
        <div className="why_soulbite_left_inner">
          <div className="why_soulbite_left_top_image">
            <img src={dalImage} alt="" className="dal_image" />
          </div>
          <div className="why_soulbite_left_content">
            <h1 className="section_heading why_soulbite_section_heading">
              Why Soulbite ?
            </h1>
            <div className="why_soulbite_content">
              Discover the new products of your daily needs from your
              comfortable place and We are so passionate to provide the best
              services to our customers.
            </div>
            <div className="why_soulbite_content why_soulbite_content_section_two">
              Our prime focus area is freshness And hygiene to maintain customer
              satisfaction and we constantly monitor shopping trends to react
              quickly And effectively based on customer suggestions and
              feedback.
            </div>
            <div className="why_soulbite_left_bottom_image">
              <img src={biscuitsImage} alt="" className="biscuits_image" />
            </div>
          </div>
        </div>
        <div className="why_soulbite_right_inner">
          <div className="rounded_inner">
            <img src={milkImage} alt="" className="milk_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySoulbite;
