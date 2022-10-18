import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { myRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {myRoutes.map((e) => {
            return <Route path={e.path} element={<e.component />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
