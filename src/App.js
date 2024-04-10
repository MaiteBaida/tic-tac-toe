import "./styles/_global.scss";
import Grid from "./components/Grid/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <h1>Tic-Tac-Toe</h1>
      {/* <Grid /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/play" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
