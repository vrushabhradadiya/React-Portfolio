import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
// https://totalwpthemedemo.com/base/homepage-2/
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/staff" element={<Staff/>} />
      
    </Routes>
      
    </>
  )
}
