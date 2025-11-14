import React from "react";

/**
 * @function MenuSection
 * @description Section header for a menu category.
 */
const MenuSection: React.FC = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <div className="module-header">
          <h2 className="module-title">Popular Dishes</h2>
          <h3 className="module-subtitle">Our most popular menu</h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MenuSection);
