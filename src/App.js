import React                            from "react";
import NameList                         from "./components/NameList/NameList";
import HeaderBar                        from "./components/Headerbar/HeaderBar";
import Home                             from "./components/pages/Home/Home";
import About                            from "./components/pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<NameList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
