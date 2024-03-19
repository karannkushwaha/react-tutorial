import { ListGroup } from "react-bootstrap";

// const FoodItem = (props) => {
const FoodItem = ({ foodItem }) => {
  //   let { foodItem } = props;
  return (
    <>
      <ListGroup as="ol" numbered>
        {/* {props.foodItem.map((item) => ( */}
        {foodItem.map((item) => (
          <ListGroup.Item key={item} as="li">
            {item}
           </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default FoodItem;
