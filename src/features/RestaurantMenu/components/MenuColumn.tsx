import React from "react";
import MenuItem from "./MenuItem";
import type { MenuItemType } from "../types/menu.types";

/**
 * @function MenuColumn
 * @description Displays multiple menu items inside a column.
 * @param {{ items: MenuItemType[] }} props
 */
const MenuColumn: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  return (
    <div className="col-sm-6">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default React.memo(MenuColumn);
