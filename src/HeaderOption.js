import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar,Icon,title}) {
  return (
    <div className='header_options'>
       {
          Icon && <Icon/>
       }
       {
          avatar && <Avatar name={avatar}/>
       }

         <span>{title}</span>
    </div>
  )
}

export default HeaderOption
