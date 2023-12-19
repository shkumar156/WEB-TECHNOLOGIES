import React from "react";
import "./UserLoginDetails.css";

const UserLoginDetails = ({ userData }) => {
  return (
    <div className="UserDetailsContainer">
      <div className="UserDetailRow">
        <div className="UserDetailLabel">User id</div>:
        <div className="UserDetailValue">{userData?._id}</div>
      </div>
      <div className="UserDetailRow">
        <div className="UserDetailLabel">User email</div>:
        <div className="UserDetailValue">{userData?.email}</div>
      </div>
      <div className="UserDetailRow">
        <div className="UserDetailLabel">User gender</div>:
        <div className="UserDetailValue">{userData?.gender}</div>
      </div>
    </div>
  );
};

export default UserLoginDetails;
