import Router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import pictures from "../images/importer";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import useTostify from "./hooks/useTostify";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { useState } from "react";
function App() {
  const { ToastContainer } = useTostify();
  const[borderStyle, setBorderStyle]=useState("")

  const bStyle={
    normal:{},
    clicked:{border:'3px solid white', backgroundColor:'rgb(255, 166, 0)'}
  }

  return (
    <>
      <ToastContainer />
      <Header pictures={pictures} bStyle={bStyle} borderStyle={borderStyle} setBorderStyle={setBorderStyle}/>
      <div className="layout-taxichain">
        <Sidebar bStyle={bStyle}  borderStyle={borderStyle} setBorderStyle={setBorderStyle}/>
        <Router />       
      </div>
    </>
  );
}

export default App;
