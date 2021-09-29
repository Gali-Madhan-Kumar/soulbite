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
              WHY SOULBITE ?
            </h1>
          </div>
          <div className="why_soulbite_left_bottom_image">
            <img src={biscuitsImage} alt="" className="biscuits_image" />
          </div>
        </div>
        <div className="why_soulbite_right_inner">
          <div className="why_soulbite_right_inner_rounded">
            <img src={milkImage} alt="" className="milk_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySoulbite;
