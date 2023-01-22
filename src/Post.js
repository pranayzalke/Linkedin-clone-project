import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description,message,photoURL}) {

   const [like, setLike] = React.useState(false)

   const handleLike = () => {
    setLike(!like)
} 
  return (
    <div className='posts'>
        <div className='post_header'>
            <div className='post_headerLeft'>
                <Avatar src={photoURL}/>
                <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

           <MoreVertIcon/>

        </div>
                  <div className='post_body'>
                      <p>{message}</p>
                  </div>
                       <div className='post_footer'>
                             <div className='post_footer_option'onClick={handleLike}>
                             <ThumbUpAltIcon color={like ? 'primary' : 'disabled'}/>
                             <span>{like ? 'Liked' : 'Like'}</span>
                             </div>
                             <div className='post_footer_option'>
                                <CommentIcon/>
                                <span>Comment</span>
                             </div>
                             <div className='post_footer_option'>
                                <ShareIcon/>
                                <span>Share</span>
                             </div>
                             <div className='post_footer_option'>
                                <SendIcon/>
                                <span>Send</span>
                             </div>
                             
                 
                        </div>
    </div>
  )
}

export default Post
