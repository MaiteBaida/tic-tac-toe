import "./styles/_global.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Play from "./pages/Play/Play";

function App() {
  return (
    <BrowserRouter>
      <Link to="/tic-tac-toe">
        <h1>Tic-Tac-Toe</h1>
      </Link>
      <Routes>
        <Route path="/tic-tac-toe" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
