import React from "react";
import Error from './Error';
import '../App.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Repos() {
  const [repos, setRepos] = useState();
  const [error, setError] = useState(false);
  const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: new Headers({
        Authorization: `Bearer ${
          process.env.REACT_APP_GITHUB_TOKEN
        }`,
      }),
    })
      .then((res) => res.json())
      .catch(() => setError(true));
    if (response) {
      setRepos(response);
    }
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  const handleOnClick = (repo) => {
    localStorage.setItem(String(repo.id), JSON.stringify(repo))
  }

  return (
      <div className="card-container">
        {error && <Error />}
        {repos &&
          repos.length &&
          repos.map((repo) => (
            <div className="card mb-3" key={repo.id} onClick={() => {handleOnClick(repo)}}>
              <Link to={"../" + repo.id}>
                  <img
                    src={repo.owner.avatar_url}
                    height={350}
                    className="card-img-top"
                    alt="repo"
                  ></img>
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
      </div>
  );
}

export default Repos;
