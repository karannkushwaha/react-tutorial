import { ListGroup } from "react-bootstrap";

const Fragments = () => {
  return (
    <>
      <br />
      <h1>Heathy Food</h1>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Fragments;
