import "./styles/_global.scss";
import Grid from "./components/Grid/Grid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Play from "./pages/Play/Play";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <h1>Tic-Tac-Toe</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
