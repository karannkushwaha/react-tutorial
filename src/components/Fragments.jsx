import React from "react";
import { ListGroup } from "react-bootstrap";

const Fragments = () => {
  // let food = [];
  let food = ["dal", "green vege", "roti", "salad", "chawal"];
  if (food.length === 0) {
    return <h3>i'm hungry</h3>;
  }
  return (
    // <React.Fragment>
    <>
      <br />
      <h1>Heathy Food</h1>
      <ListGroup as="ol" numbered>
        {food.map((item) => (
          <ListGroup.Item key={item} as="li">
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
    // </React.Fragment>
  );
};

export default Fragments;
