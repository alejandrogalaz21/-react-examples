import React from "react";
import "./../restaurant-menu.css";
import MenuSection from "./../components/MenuSection";
import MenuColumn from "./../components/MenuColumn";
import { leftColumn, rightColumn } from "./../data/menu.data";

/**
 * @function RestaurantMenu
 * @description Full restaurant menu module based on the original HTML template.
 */
const RestaurantMenu: React.FC = () => {
  return (
    <section id="popular" className="module">
      <div className="container">
        <MenuSection />

        <div className="row">
          <MenuColumn items={leftColumn} />
          <MenuColumn items={rightColumn} />
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 long-up text-center">
            <a href="/menu" className="btn btn-custom-1">
              View Menu
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="devider"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
