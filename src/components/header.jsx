import { Link } from "react-router-dom";

export const Header = ({ pictures }) => {
  return (
    <>
      <div className="header">
        <div className="home">
          <div className="header-brand">
            <img src={pictures?.logo} height="80px" />
            <h1 className="taxichain-title d-none d-sm-flex">TaxiChain</h1>
          </div>
          <button className="wallet-button">
            <i className="bi bi-wallet wallet-icon"></i> Connect Wallet
          </button>
        </div>
        <div className="nav-bar d-flex d-md-none">
          <Link className="sidebar-link" to={"/marketplace"}>
            Marketplace
          </Link>
          <Link className="sidebar-link">City</Link>
          <Link className="sidebar-link">Mining</Link>
          <Link className="sidebar-link">Parking</Link>
          <Link className="sidebar-link">Profile</Link>
          <Link className="sidebar-link">Crafting</Link>
        </div>
      </div>
    </>
  );
};
