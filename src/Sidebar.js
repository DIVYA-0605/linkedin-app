import React from "react";
import { Avatar } from '@mui/material';
import "./Sidebar.css";import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);



  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=659&q=80"
          alt=""
        />
        <Avatar src={user.photoURL}className="sidebar__avatar" >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,546</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p> 
          <p className="sidebar__statNumber">2,446</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programmer")}
        {recentItem("software engineer")}
        {recentItem("full stack developer")}
        {recentItem("frontend developer")}
        {/* rendering jsx from functions  */}
        {/* we dont need always to have a componets we can use function */}
      </div>
    </div>
  );
}

export default Sidebar;
