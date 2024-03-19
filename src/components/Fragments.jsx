import React from "react";
import FoodItem from "./FoodItem";

const Fragments = () => {
  // let food = [];
  let food = ["dal", "green vege", "roti", "salad", "chawal"];

  // if conditional rendering
  // if (food.length === 0) {
  //   return <h3>i'm hungry</h3>;
  // }

  return (
    // <React.Fragment>
    <>
      <h1>Heathy Food</h1>
      {food.length === 0 ? <h3>i'm hungry</h3> : null}

      <FoodItem foodItem={food}></FoodItem>
    </>
    // </React.Fragment>
  );
};

export default Fragments;
