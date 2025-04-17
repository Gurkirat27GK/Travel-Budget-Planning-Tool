// src/pages/Profile.js
import React from 'react';
import '../styles/profile.css';

function Profile() {
  // Replace with real user data from your auth state or Firebase
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "April 2025"
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=JD" alt="User Avatar" />
        </div>
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>
        <p className="joined">Member since: {user.joined}</p>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;