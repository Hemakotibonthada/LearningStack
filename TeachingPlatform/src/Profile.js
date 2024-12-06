import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`/api/profile/${userId}`)
      .then(response => setProfile(response.data))
      .catch(err => console.error(err));
  }, [userId]);

  if (!profile.name) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profile.profileImage} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Education:</strong> {profile.education}</p>
          <p><strong>Experience:</strong> {profile.experience}</p>
          <p><strong>Skills:</strong> {profile.skills?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
