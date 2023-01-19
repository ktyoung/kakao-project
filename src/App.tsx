import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Page from "./pages/page/page";
import Culture from "./pages/page/kakao/kakaoCulture";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/kakaoCulture" element={<Culture />} />
      </Routes>
    </>
  );
}

export default App;
