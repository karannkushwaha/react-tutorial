import { useState } from "react";
import Items from "./Items";
const FoodItem = ({ foodItem }) => {
  let [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (items, event) => {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };
  return (
    <>
      {foodItem.map((items) => (
        <Items
          key={items}
          foodItem={items}
          bought={activeItems.includes(items)}
          handleBuyClicked={(event) => onBuyButton(items, event)}
        />
      ))}
    </>
  );
};
export default FoodItem;
