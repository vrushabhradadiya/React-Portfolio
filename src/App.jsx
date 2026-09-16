import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// https://totalwpthemedemo.com/base/homepage-2/
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/staff" element={<Staff/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
      
    </>
  )
}
