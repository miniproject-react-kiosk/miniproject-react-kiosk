import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

// import Router from './shared/Router';
function App() {
  return <>{<Outlet />}</>;
}

export default App;
