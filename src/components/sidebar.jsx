import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {

  const[borderStyle, setBorderStyle]=useState("")

  const bStyle={
    normal:{},
    clicked:{border:'3px solid white', backgroundColor:'rgb(255, 166, 0)'}
  }
  


  return (
    <>
      <div className="sidebar d-none d-md-flex">
        <Link className="sidebar-link" to={"/marketplace"} onClick={()=>setBorderStyle("marketplace")} style={borderStyle==="marketplace" ? bStyle.clicked:bStyle.normal}>
          Marketplace
        </Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("city")} style={borderStyle==="city" ? bStyle.clicked:bStyle.normal} */>City</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("mining")} style={borderStyle==="mining" ? bStyle.clicked:bStyle.normal} */>Mining</Link>
        <Link className="sidebar-link" to={"/parking"} onClick={()=>setBorderStyle("parking")} style={borderStyle==="parking" ? bStyle.clicked:bStyle.normal}>Parking</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("profile")} style={borderStyle==="profile" ? bStyle.clicked:bStyle.normal} */>Profile</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("crafting")} style={borderStyle==="crafting" ? bStyle.clicked:bStyle.normal} */>Crafting</Link>
      </div>
    </>
  );
};
