import { Route, Routes } from "react-router-dom";
import Marketplace from "./pages/marketplace";
import Parking from "./pages/parking";


export default function Router() {
  return (
    <div className="route-class">
      <Routes>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/parking" element={<Parking />} />

      </Routes>
    </div>
  );
}
