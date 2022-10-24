import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/login" element={<Login />} />
          <Route exact path="/" element={<HomeScreen />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
