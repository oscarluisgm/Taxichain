import { Route, Routes/* , Switch  */} from "react-router-dom";
import Marketplace from "./pages/marketplace";
import Parking from "./pages/parking";
import Home from "./pages/home"


export default function Router() {
  return (
    <div className="route-class">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/parking" element={<Parking />} />
      </Routes>
    </div>
  );
}
