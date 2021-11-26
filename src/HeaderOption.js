import { Avatar } from '@mui/material';
import React from "react";
import "./HeaderOption.css";
import "./Sidebar.css";import { useSelector,} from 'react-redux'
import { selectUser } from "./features/userSlice";

// usage of props (components)
function HeaderOption({ avatar, Icon, title,onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar&&(<Avatar className="HeaderOption__icon"  src={user?.photoURL}>{user?.email[0]}</Avatar>)}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
