import { Link } from "react-router-dom";
import Router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import pictures from "../images/importer";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import useTostify from "./hooks/useTostify";

function App() {
      const{ToastContainer} = useTostify()
  
  return (
    <>
      <ToastContainer/>
      <div className="header">
        <div className="home">
        <img src={pictures.logo} height="80px" />
        <button className="wallet-button"> <i className="bi bi-wallet wallet-icon"></i> Connect Wallet</button>
        </div>
      <div className="nav-bar d-flex d-md-none">
          <Link className="sidebar-link" to={"/marketplace"}>Marketplace</Link>
          <Link className="sidebar-link">City</Link>
          <Link className="sidebar-link">Mining</Link>
          <Link className="sidebar-link">Parking</Link>
          <Link className="sidebar-link">Profile</Link>
          <Link className="sidebar-link">Crafting</Link>
      </div>
      </div>
      <div className="layout-taxichain">
        <div className="sidebar d-none d-md-flex">
          <Link className="sidebar-link" to={"/marketplace"}>
            Marketplace
          </Link>
          <Link className="sidebar-link">City</Link>
          <Link className="sidebar-link">Mining</Link>
          <Link className="sidebar-link">Parking</Link>
          <Link className="sidebar-link">Profile</Link>
          <Link className="sidebar-link">Crafting</Link>
        </div>
        <div className="route-class">
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
