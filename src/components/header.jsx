import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = ({ pictures, borderStyle, bStyle, setBorderStyle }) => {
  

  return (
    <>
      <div className="header">
        <div className="home">
          <div className="header-brand" >
            <img src={pictures?.logo} height="80px" />
            <h1 className="taxichain-title d-none d-sm-flex">TaxiChain</h1>
          </div>
          <button className="wallet-button">
            <i className="bi bi-wallet wallet-icon"></i> Connect Wallet
          </button>
        </div>
        <div className="nav-bar d-flex d-md-none">
        <Link className="sidebar-link" to={"/marketplace"} onClick={()=>setBorderStyle("marketplace")} style={borderStyle==="marketplace" ? bStyle.clicked:bStyle.normal}>
          Marketplace
        </Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("city")} style={borderStyle==="city" ? bStyle.clicked:bStyle.normal} */>City</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("mining")} style={borderStyle==="mining" ? bStyle.clicked:bStyle.normal} */>Mining</Link>
        <Link className="sidebar-link" to={"/parking"} onClick={()=>setBorderStyle("parking")} style={borderStyle==="parking" ? bStyle.clicked:bStyle.normal}>Parking</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("profile")} style={borderStyle==="profile" ? bStyle.clicked:bStyle.normal} */>Profile</Link>
        <Link className="sidebar-link" /* onClick={()=>setBorderStyle("crafting")} style={borderStyle==="crafting" ? bStyle.clicked:bStyle.normal} */>Crafting</Link>
        </div>
      </div>
    </>
  );
};
