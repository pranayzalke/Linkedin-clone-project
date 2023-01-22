import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BussinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";


function Header() {
  return (
    <div className="header">
        <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"/>
            <div className='header_search'>
                <SearchIcon/>
                
                <input type ="text" placeholder='Search'/>
            </div>
         </div>
   
        <div className='header_right'>
          <HeaderOption Icon ={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
          <HeaderOption Icon={BussinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar="https://cdn-icons-png.flaticon.com/512/147/147142.png" title="me"/>
        </div>
    </div>
   );
 }

 export default Header;
