import React from "react";
import { Carousel, Col } from "react-bootstrap";
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
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <Col lg="12" className="cat_item_col">
            <img
              className="d-block w-25 cat_images badge"
              src={babyCareImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Baby</span>
                <span>Care</span>
              </div>
            </div>

            <img
              className="d-block w-25 cat_images"
              src={beveragesImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Beverages</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={bioDegradableImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Bio</span>
                <span>Degradable</span>
                <span>Products</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col lg="12" className="cat_item_col">
            <img
              className="d-block w-25 position-relative cat_images"
              src={personalCareImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Personal</span>
                <span>Care</span>
              </div>
            </div>
            <img
              className="d-block w-25 position-relative cat_images"
              src={homeCareImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Home</span>
                <span>Care</span>
              </div>
            </div>
            <img
              className="d-block w-25 position-relative cat_images"
              src={poojaNeedsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Pooja</span>
                <span>Needs</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col lg="12" className="cat_item_col">
            <img
              className="d-block w-25 cat_images"
              src={pulsesImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Pulses</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={readyToCoolImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Ready</span>
                <span>To</span>
                <span>Cool</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={riceProductsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Rice</span>
                <span>Products</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col lg="12" className="cat_item_col">
            <img
              className="d-block w-25 cat_images"
              src={snacksImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Snacks</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={dryFruitsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Dry</span>
                <span>Fruits</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={cookingEssentialsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Cooking</span>
                <span>Essentials</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col lg="12" className="cat_item_col">
            <img
              className="d-block w-25 cat_images"
              src={edibleOilsAndGhee}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Edible Oils</span>
                <span>And</span>
                <span>Ghee</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={masalaAndSpicesImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Masala And</span>
                <span>Spices</span>
              </div>
            </div>
            <img
              className="d-block w-25 cat_images"
              src={nutriCerealsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_green">
              <div className="category_name_rounded_green">
                <span>Nutri</span>
                <span>Cereals</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col lg="12" style={{ display: "flex" }}>
            <img
              className="d-block w-25 cat_images"
              src={brandedFoodsImage}
              alt="First slide"
            />
            <div className="position-relative rounded_orange">
              <div className="category_name_rounded_orange">
                <span>Branded</span>
                <span>Foods</span>
              </div>
            </div>
          </Col>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CustomCarousel;
