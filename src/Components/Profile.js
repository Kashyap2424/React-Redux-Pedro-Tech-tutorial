import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userDetails.value);
  const themeColor = useSelector((state) => state.applicationTheme.value);

  return (
    <div style={{ color: themeColor }}>
      <h1>Hello, This is the profile page.</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
        <li>Phone Number: {user.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default Profile;
