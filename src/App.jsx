import Router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import pictures from "../images/importer";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import useTostify from "./hooks/useTostify";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

function App() {
  const { ToastContainer } = useTostify();

  return (
    <>
      <ToastContainer />
      <Header pictures={pictures} />
      <div className="layout-taxichain">
        <Sidebar />
        <Router />       
      </div>
    </>
  );
}

export default App;
