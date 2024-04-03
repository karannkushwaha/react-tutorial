import { Button, ListGroup } from "react-bootstrap";

const Items = ({ foodItem, bought, handleBuyClicked }) => {
  return (
    <>
      <ListGroup as="ol" style={{ marginTop: "15px" }}>
        <ListGroup.Item
          key={foodItem}
          as="li"
          className={`${bought && "active"}`}
        >
          {foodItem}

          <Button
            variant="info"
            style={{ float: "right" }}
            onClick={handleBuyClicked}
          >
            Buy
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
// const handleBuyClicked = (foodItem) => {
//   console.log(`buy button click ${foodItem}`);
// };
export default Items;
