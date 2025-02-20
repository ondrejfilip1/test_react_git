import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/info";
import About from "./pages/About";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
