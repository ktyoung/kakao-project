import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Page from "./pages/page/page";

function App() {
  return (
    <>
      <Page />
    </>
  );
}

export default App;
