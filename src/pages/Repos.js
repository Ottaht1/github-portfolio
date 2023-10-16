import React from "react";
import Error from "./Error";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

/* This is a function that is fetching the repos from the github api. */
function Repos({ page, pageSize }) {
  const [repos, setRepos] = useState();
  const [error, setError] = useState(false);
  const fetchRepos = async () => {
    const response = await fetch(
      `https://api.github.com/user/repos?page=${page}&per_page=${pageSize}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        }),
      }
    )
      /**
       * The function fetches the data from the API and sets the state of the repos to the response.
       * @param repo - {
       */
      .then((res) => res.json())
      .catch(() => setError(true));
    if (response) {
      setRepos(response);
    }
  };
  useEffect(() => {
    fetchRepos();
  });

  const handleOnClick = (repo) => {
    localStorage.setItem(String(repo.id), JSON.stringify(repo));
  };
  /* Returning the repos from the github api. */

  return (
    <div className="card-container">
      {error && <Error />}
      {repos &&
        repos.length &&
        repos.map((repo) => (
          <div
            className="card mb-3"
            key={repo.id}
            onClick={() => {
              handleOnClick(repo);
            }}
          >
            <Link to={"../" + repo.id}>
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">
                  Language: {repo.language || "JavaScript"}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Stars: {repo.stargazers_count}*
                  </small>
                </p>
              </div>
            </Link>
          </div>
        ))}

      <Link to="/profile">
        <Button text="Back to Profile" className="back-to-profile-button" />
      </Link>
    </div>
  );
}

export default Repos;
