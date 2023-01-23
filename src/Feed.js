import React, { useState,useEffect } from 'react'
import {Avatar} from "@material-ui/core"
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TodayIcon from "@material-ui/icons/Today";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./Feed.css"
import Post from "./Post";



function Feed() {
    const[posts, setPosts] = useState([]);
    const[input, setInput] = useState("");

    useEffect(() => {
        const postsFromLocalStorage = localStorage.getItem("posts");
        if(postsFromLocalStorage){
            setPosts(JSON.parse(postsFromLocalStorage));
        }
        //This code will remove the posts from the localStorage. 
        //localStorage.removeItem("posts");
    }, [])

  const submitPost=(e) => {
      e.preventDefault();
      const post = {
          name: "Pranay Zalke",
          description:"This is test",
          message:input,
          photoURL:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
       
      }
      setPosts([post, ...posts]);
      localStorage.setItem("posts",JSON.stringify([post, ...posts]));
  }
  useEffect(() => {
   
    const postsFromStorage = localStorage.getItem("posts");
    if (postsFromStorage) {
        setPosts(JSON.parse(postsFromStorage));
    }
}, []);
  return (
    <div className='feed'>
        <div className='feed_input'>
        <div className='feed_form'>
            <Avatar src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>

            <form onSubmit={submitPost}>
                <input type="text" placeholder='start a post' value = {input} onChange={e=>setInput(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
        
        <div className='feed_options'>
            <div className='option'>
                <PhotoIcon style ={{color:'#70b5f9'}}/>
                <span>Photo</span>
            </div>
            <div className='option'>
                <YouTubeIcon style ={{color:'#7fc15e'}}/>
                <span>Video</span>
            </div>
            <div className='option'>
                <TodayIcon style ={{color:'#e7a33e'}}/>
                <span>Event</span>
            </div>
            <div className='option'>
                <AssignmentIcon style ={{color:'#fc9295'}}/>
                <span>Write Article</span>
            </div>
        </div>
    </div>
    {
        posts.map(post => (
            <Post name={post.name} description={post.description} message={post.message} photoURL={post.photoURL}/>
        ))
    }

    </div>
  )
}
export default Feed