import React from "react";
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/Map3"


function App() {
  return (
    <div>
      <Home />
      <MapComponent />
    </div>
  );
}
export default App;
