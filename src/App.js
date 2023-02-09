import logo from "./logo.svg";
import "./App.css";
import Properties from "./container/Properties";
import OwnerDashBoared from "./owner/OwnerDashBoared";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <h1>Manage Your Properties</h1>
        <OwnerDashBoared />
        {/* <Properties /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
