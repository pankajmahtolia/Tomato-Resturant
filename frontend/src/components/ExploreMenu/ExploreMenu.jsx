import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  // State to track the selected category (default is "All")
  
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Delight your taste buds with a wide range of mouth-watering dishes,
        carefully crafted to bring out the best flavors. From savory starters to
        indulgent desserts, our menu offers something for everyone. Whether
        you're in the mood for a classic favorite or an adventurous new dish,
        you'll find it all here. Take your pick and enjoy a dining experience
        like no other!
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
