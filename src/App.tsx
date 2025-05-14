import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import ArtsyWorld from "./ArtsyWorld/ArtsyWorld";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ArtsyWorld" element={<ArtsyWorld />} />
      </Routes>
    </>
  );
}

export default App;
