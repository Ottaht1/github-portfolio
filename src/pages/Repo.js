import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button";

/* Getting the repoId from the URL and then getting the data from the localStorage. */
function Repo() {
  const { repoId } = useParams();
  const data = JSON.parse(localStorage.getItem(repoId));

  /* Returning the data from the localStorage. */
  return (
    <div className="repo-container">
      {/* <Link to="../home">Back to home page</Link> */}
      <Link to="../home">
        <Button text="Back to home page" className="back-to-home-page-button" />
      </Link>
      <div className="card p-5 main-repo-container">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.owner.avatar_url}
              className="img-fluid rounded-start"
              alt="repo"
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <strong>{data.name}</strong>
              </h5>
              <p className="card-text">
                language: {data.language || "JavaScript"}
              </p>
              <p className="card-text">Forks: {data.forks}</p>
              <p className="card-text">Size: {data.size}</p>
              <p className="card-text">SSH URL: {data.ssh_url}</p>
              <p className="card-text">Pushed At (Date): {data.pushed_at}</p>
              <p className="card-text">Visibility: {data.visibility}</p>
              <p className="card-text">Watchers: {data.watchers}</p>
              <p className="card-text">Teams URL: {data.teams_url}</p>
              <p className="card-text">Node ID: {data.node_id}</p>
              <p className="card-text">Hooks URL: {data.hooks_url}</p>
              <p className="card-text">
                License key: {data.license ? data.license.key : "default"}
              </p>
              <p className="card-text">
                License name: {data.license ? data.license.name : "default"}
              </p>
              <p className="card-text">
                License node ID:{" "}
                {data.license ? data.license.node_id : "default"}
              </p>
              <p className="card-text">
                License SPDX ID:{" "}
                {data.license ? data.license.spdx_id : "default"}
              </p>
              <p className="card-text">
                License URL: {data.license ? data.license.url : "default"}
              </p>
              <p className="card-text">Default branch: {data.default_branch}</p>
              <p className="card-text">Blobs URL: {data.blobs_url}</p>
              <p className="card-text">Clone URL: {data.clone_url}</p>
              <p className="card-text">Contents URL: {data.contents_url}</p>
              <p className="card-text">Created At: {data.created_at}</p>
              <p className="card-text">
                <small className="text-muted">
                  Stars: {data.stargazers_count}*
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repo;
