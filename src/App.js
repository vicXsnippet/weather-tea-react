import React from "react";
import Credit from "./Credit";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col app-title">
            <h1>Weather Tea</h1>
          </div>
        </div>
        <Weather defaultCity="São Paulo" />
        <div className="row">
          <Credit />
        </div>
      </div>
    </div>
  );
}

export default App;
