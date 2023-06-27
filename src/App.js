import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />  {/* If you need Link, you have to put it into Router */}
      <Route path="/" exact={true} Component={Home} /> {/* exact: not render */}
      <Route path="/about" Component={About} />
    </HashRouter>
  );
}

export default App;