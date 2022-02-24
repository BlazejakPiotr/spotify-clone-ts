import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import PlayerApp from "./components/player/PlayerApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as dotenv from "dotenv";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="player/*" element={<PlayerApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
