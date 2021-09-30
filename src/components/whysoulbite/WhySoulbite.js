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
          <div>
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
