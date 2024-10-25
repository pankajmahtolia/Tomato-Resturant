import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite here</h2>
        <p>
          Welcome to Tomato Resturant, where every meal is crafted with passion
          and fresh ingredients! Whether you're craving a quick bite or a hearty
          feast, our menu is packed with delicious options to satisfy your taste
          buds. Order now and enjoy the flavors of your favorite dishes,
          delivered right to your door!
        </p>
        <button ><a href="#explore-menu">View Menu</a></button>      
      </div>
    </div>
  );
};

export default Header;
