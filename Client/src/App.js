import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<List/>}></Route>
          <Route path="/hotels/:id" element={<Hotel/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
