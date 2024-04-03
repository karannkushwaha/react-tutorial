import { Form } from "react-bootstrap";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter Food here...."
        // onChange={(event) => console.log(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInput;
