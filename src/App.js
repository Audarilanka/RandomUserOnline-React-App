import React     from "react";
import NameList  from "./components/NameList/NameList";
import HeaderBar from "./components/Headerbar/HeaderBar";
import Home      from "./components/pages/Home/Home";
import About     from "./components/pages/About/About";
//import "./App.css";

function App() {
  return (
    <div>
      <HeaderBar />
      <Home />
      <About />
      <NameList />
    </div>
  );
}

export default App;
