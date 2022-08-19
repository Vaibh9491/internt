import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/todos";
import Userdetails from "./Components/userdetails";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Todos />
        <Userdetails />
      </div>
    </div>
  );
}

export default App;
