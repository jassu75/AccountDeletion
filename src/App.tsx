import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import ArtsyWorld from "./ArtsyWorld/ArtsyWorld";
import SuccessDeletion from "./DirectAfterDelete/SuccessDeletion";
import ErrorDeletion from "./DirectAfterDelete/ErrorDeletion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ArtsyWorld" element={<ArtsyWorld />} />
        <Route path="/success" element={<SuccessDeletion />} />
        <Route path="/error" element={<ErrorDeletion />} />
      </Routes>
    </>
  );
}

export default App;
