import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </>
  );
}

export default App;
