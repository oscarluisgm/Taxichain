import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar d-none d-md-flex">
        <Link className="sidebar-link" to={"/marketplace"}>
          Marketplace
        </Link>
        <Link className="sidebar-link">City</Link>
        <Link className="sidebar-link">Mining</Link>
        <Link className="sidebar-link" to={"/parking"}>Parking</Link>
        <Link className="sidebar-link">Profile</Link>
        <Link className="sidebar-link">Crafting</Link>
      </div>
    </>
  );
};
