import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<List/>}></Route>
          <Route path="/hotels/:id" element={<Hotel/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
