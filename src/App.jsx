import Fragments from "./components/Fragments";
import Container from "./components/Container";

function App() {
  // let myName = "Karan Kushwaha";
  return (
    <>
      {/* <h1>{myName}</h1> */}
      {/* <div className="card"> */}
      {/* <Button
          variant="warning"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button> */}
      {/* </div> */}

      <Container>
        <Fragments />
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          perspiciatis odio, cum, id adipisci incidunt hic ducimus
          exercitationem debitis quis eveniet corporis neque autem? Iste sunt
          quam libero consectetur harum.
        </p>
      </Container>
    </>
  );
}

export default App;
