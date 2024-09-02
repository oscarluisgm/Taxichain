import { Link } from "react-router-dom";

export const Header = ({pictures, borderStyle, bStyle, styleHandler}) => {
  

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
        <Link className="sidebar-link" to={"/home"} onClick={()=>styleHandler("home")} style={borderStyle==="home" ? bStyle.clicked:bStyle.normal}>Home</Link>  
        <Link className="sidebar-link" to={"/marketplace"} onClick={()=>styleHandler("marketplace")} style={borderStyle==="marketplace" ? bStyle.clicked:bStyle.normal}>
          Marketplace
        </Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("city")} style={borderStyle==="city" ? bStyle.clicked:bStyle.normal} */>City</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("mining")} style={borderStyle==="mining" ? bStyle.clicked:bStyle.normal} */>Mining</Link>
        <Link className="sidebar-link" to={"/parking"} onClick={()=>styleHandler("parking")} style={borderStyle==="parking" ? bStyle.clicked:bStyle.normal}>Parking</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("profile")} style={borderStyle==="profile" ? bStyle.clicked:bStyle.normal} */>Profile</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("crafting")} style={borderStyle==="crafting" ? bStyle.clicked:bStyle.normal} */>Crafting</Link>
        </div>
      </div>
    </>
  );
};
