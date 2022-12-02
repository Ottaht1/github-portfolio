import React from "react";
import "./App.css";
import { useState, useEffect,lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repo from "./pages/Repo";
import Repos from "./pages/Repos";
import ReposHome from "./pages/ReposHome";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/repos" element={<ReposHome />}>
            <Route path="home" element={<Repos />} />
            <Route path=":repoId" element={<Repo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
