import { Routes, Route } from "react-router-dom";
import { Burger } from "./pages/Burger";
import { Home } from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Burger />} path="/burger" />
      </Routes>
    </>
  );
}

export default App;
