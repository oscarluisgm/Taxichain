import {Route, Routes} from "react-router-dom"
import Marketplace from "./pages/marketplace"

export default function Router(){
    return (
        <Routes>
            <Route path="/marketplace" element={<Marketplace/>}/>
            
        </Routes>
    );
}
