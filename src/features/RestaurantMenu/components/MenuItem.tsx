import React from "react";
import type { MenuItemType } from "../types/menu.types";

/**
 * @function MenuItem
 * @description Render a single menu item similar to the original template.
 * @param {MenuItemType} props - Dish properties.
 * @returns {JSX.Element}
 */
const MenuItem: React.FC<MenuItemType> = ({ title, detail, price, label }) => {
  return (
    <div className="menu">
      <div className="row">
        <div className="col-sm-8">
          <h4 className="menu-title">{title}</h4>
          <div className="menu-detail">{detail}</div>
        </div>

        <div className="col-sm-4 menu-price-detail">
          <h4 className="menu-price">${price}</h4>

          {label && <div className="menu-label">{label}</div>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MenuItem);
