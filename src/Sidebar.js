import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

function Sidebar(){
  return (
    <div className='sidebar'>
        <div className='sidebar_profile'>
             <img src='https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            
                   <div className='profile_details'>
                   <Avatar src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>

                        <h4>Pranay Zalke</h4>
                        <p>Frontend Developer</p>
                   </div>
       

             <div className='profile_stats'>
                  <span>Connection<br/><b>  Grow Your Network</b></span>
                  <span className='stat_number'>20</span>
             </div> 
       </div> 

       <div className='sidebar_recent'>
        <p>Recent</p>
        <p className='hash'><span>#</span>programming</p>
        <p className='hash'><span>#</span>webdevelopment</p>
        <p className='hash'><span>#</span>react.js</p>
        <p className='hash'><span>#</span>reduxtoolkit</p>
        <p className='hash'><span>#</span>marketing</p>
        <p className='hash'><span>#</span>branding</p>
       </div>
    </div>
      
  );
}

export default Sidebar;
