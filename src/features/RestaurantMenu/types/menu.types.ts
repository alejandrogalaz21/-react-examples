/**
 * @typedef {Object} MenuItemType
 * @property {string} title - Dish name.
 * @property {string} detail - Small description.
 * @property {string | number} price - Dish price.
 * @property {string=} label - Optional label (New, Recommended).
 */
export type MenuItemType = {
  title: string;
  detail: string;
  price: string | number;
  label?: string;
};
