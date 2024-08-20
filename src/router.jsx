import { Route, Routes } from "react-router-dom";
import Marketplace from "./pages/marketplace";

export default function Router() {
  return (
    <div className="route-class">
      <Routes>
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </div>
  );
}
