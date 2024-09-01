import { Link } from "react-router-dom";

export const Sidebar = ({borderStyle, bStyle, styleHandler}) => {

  
  return (
    <>
      <div className="sidebar d-none d-md-flex">
        <Link className="sidebar-link" to={"/marketplace"} onClick={()=>styleHandler("marketplace")} style={borderStyle==="marketplace" ? bStyle.clicked:bStyle.normal}>
          Marketplace
        </Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("city")} style={borderStyle==="city" ? bStyle.clicked:bStyle.normal} */>City</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("mining")} style={borderStyle==="mining" ? bStyle.clicked:bStyle.normal} */>Mining</Link>
        <Link className="sidebar-link" to={"/parking"} onClick={()=>styleHandler("parking")} style={borderStyle==="parking" ? bStyle.clicked:bStyle.normal}>Parking</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("profile")} style={borderStyle==="profile" ? bStyle.clicked:bStyle.normal} */>Profile</Link>
        <Link className="sidebar-link" /* onClick={()=>styleHandler("crafting")} style={borderStyle==="crafting" ? bStyle.clicked:bStyle.normal} */>Crafting</Link>
      </div>
    </>
  );
};
