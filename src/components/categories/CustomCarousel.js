import React from "react";
import babyCareImage from "../../assets/images/BabyCare.jpg";
import beveragesImage from "../../assets/images/Beverages.jpeg";
import bioDegradableImage from "../../assets/images/BioDegradbleProducts.jpg";
import personalCareImage from "../../assets/images/PersonalCare.jpg";
import homeCareImage from "../../assets/images/HomeCare.jpg";
import poojaNeedsImage from "../../assets/images/PoojaNeeds.jpg";
import pulsesImage from "../../assets/images/Pulses.jpg";
import readyToCoolImage from "../../assets/images/ReadyToCool.jpeg";
import riceProductsImage from "../../assets/images/RiceProducts.jpg";
import nutriCerealsImage from "../../assets/images/NutriCereals.jpg";
import snacksImage from "../../assets/images/Snacks.jpg";
import masalaAndSpicesImage from "../../assets/images/MasalaAndSpices.jpg";
import edibleOilsAndGhee from "../../assets/images/EdibleOilsAndGhee.jpeg";
import dryFruitsImage from "../../assets/images/Dryfruits.jpeg";
import cookingEssentialsImage from "../../assets/images/CookingEssentials.jpeg";
import brandedFoodsImage from "../../assets/images/BrandedFoods.png";

const CustomCarousel = () => {
  return (
    <>
      <section className="slider">
        <ul id="autoWidth" className="cs-hidden">
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Baby</span>
                  <span>Care</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={babyCareImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Beverages</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={beveragesImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Bio</span>
                  <span>Degradable</span>
                  <span>Products</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={bioDegradableImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Personal</span>
                  <span>Care</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={personalCareImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Home</span>
                  <span>Care</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={homeCareImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Pooja</span>
                  <span>Needs</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={poojaNeedsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Pulses</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={pulsesImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Ready</span>
                  <span>To</span>
                  <span>Cool</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={readyToCoolImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Rice</span>
                  <span>Products</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={riceProductsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Nutri</span>
                  <span>Cereals</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={nutriCerealsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Snacks</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={snacksImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Masal</span>
                  <span>And</span>
                  <span>Spices</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={masalaAndSpicesImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Edible Oils</span>
                  <span>And Ghee</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={edibleOilsAndGhee} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Dry</span>
                  <span>Fruits</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={dryFruitsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_orange">
                <div className="category_name_rounded_orange">
                  <span>Cooking</span>
                  <span>Essentials</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={cookingEssentialsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="item-a">
            <div className="box">
              <div className="rounded_green">
                <div className="category_name_rounded_green">
                  <span>Branded</span>
                  <span>Foods</span>
                </div>
              </div>
              <div className="slide-img">
                <img alt="" src={brandedFoodsImage} />
                <div className="overlay">
                  <a href="/#" className="buy-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CustomCarousel;
