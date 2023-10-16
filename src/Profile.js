import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Button from "./Button";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch GitHub profile data here and set it in the state
    fetch("https://api.github.com/users/Ottaht1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((profileData) => {
        // Set the fetched profile data in the state
        setProfile(profileData);
      })
      .catch((error) => {
        console.error("Error fetching GitHub profile data:", error);
        
      });
  }, []); 

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
    <div className="profile">
      <img src={profile.avatar_url} alt="Profile" />
      <h2>{profile.login}</h2>
      <h2>{profile.name}</h2>
    <p>{profile.bio}</p>
    <p>Location: {profile.location}</p>
    {profile.email && <p>Email: {profile.email}</p>}

    <p>Followers: {profile.followers}</p>
    <p>Following: {profile.following}</p>
    <p>Repositories: {profile.public_repos}</p>
    <p>Twitter: <a href={`https://twitter.com/${profile.twitter_username}`}>{profile.twitter_username}</a></p>
    <p>LinkedIn: <a href={`https://www.linkedin.com/in/theresa-ottah/`}>Theresa Ottah</a></p>

    </div>
    <div className="additional-info">
        {/* Display additional information here */}
        <h2>Hi 👋, I'm Theresa!</h2>
        <p>A frontend developer from Nigeria</p>
        <p>🌱 I’m currently learning JavaScript and React</p>
        <p>👯 I’m looking to collaborate on interesting projects</p>
        <p>📫 How to reach me <a href="mailto:ottahtheresa@gmail.com">ottahtheresa@gmail.com</a></p>
        <p>Connect with me:</p>
        <ul style={{listStyle: "none"}}>
          <li><a href="https://twitter.com/__theressaa">__theressaa</a></li>
          <li><a href="https://www.linkedin.com/in/theresa-ottah/">theresa-ottah</a></li>
        </ul>
        <p>Languages and Tools:</p>
        <ul style={{listStyle: "none"}}>
          <li>html5</li>
          <li>css3</li>
          <li>javascript</li>
          <li>react</li>
          <li>vuejs</li>
          <li>git</li>
          <li>bootstrap</li>
          <li>typescript</li>
        </ul>
        
      </div>

      {/* Buttons to navigate to Repositories and back to Profile */}
      <Link to="/repos/home">
        <Button text="View Repositories  ➞" className="view-repositories-button" />
      </Link>

    </div>
  );
}

export default Profile;
