import type { JSX } from "react/jsx-runtime";
import "./App.css";
import "./css/utilities.css";

function App(): JSX.Element {
  const message = "Hello World";
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
