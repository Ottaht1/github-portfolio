import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";

function Card({ name, stars, status, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>
        {name}-{status}
      </h2>
      <div className="stars">
        <p>*</p>
        <p>{stars}</p>
      </div>
    </div>
  );
}

function App() {
  const [repos, setRepos] = useState();
  const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: new Headers({
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      }),
    }).then((res) => res.json());
    setRepos(response);
  };
  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div className="App">
      {repos &&
        repos.length &&
        repos.map((repo) => (
          <Card
            name={repo.name}
            stars={repo.open_issues}
            status={repo.language}
            onClick={() => {
              alert("hello");
            }}
          />
        ))}
    </div>
  );
}

export default App;
