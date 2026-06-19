import type { JSX } from "react/jsx-runtime";
import "./App.css";
import "./css/utilities.css";
import { BrowserRouter, Routes } from "react-router";

function App(): JSX.Element {
  const message = "Hello World";
  return (
    <BrowserRouter>
      <h1>{message}</h1>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
