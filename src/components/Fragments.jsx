import React, { useState } from "react";
import FoodItem from "./FoodItem";
import FoodInput from "./FoodInput";

const Fragments = () => {
  // let food = [];
  // let food = ["dal", "green vege", "roti", "salad", "chawal"];

  // if conditional rendering
  // if (food.length === 0) {
  //   return <h3>i'm hungry</h3>;
  // }

  // let [getText, setText] = useState("food item entered by user");
  // let [food, setFood] = useState([
  //   "dal",
  //   "green vege",
  //   "roti",
  //   "salad",
  //   "chawal",
  // ]);
  let [food, setFood] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodVal = event.target.value;
      event.target.value = "";
      let newItems = [...food, newFoodVal];
      setFood(newItems);
    }

    // setFood(event.target.value);
  };
  return (
    // <React.Fragment>
    <>
      <h1>Heathy Food</h1>
      {food.length === 0 ? <h3>i'm hungry</h3> : null}
      {/* <FoodInput handleOnChange={handleOnChange} /> */}
      <FoodInput handleKeyDown={onKeyDown} />
      {/* <p>{getText}</p> */}

      <FoodItem foodItem={food}></FoodItem>
    </>
    // </React.Fragment>
  );
};

export default Fragments;
