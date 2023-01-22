import React, { useState } from 'react'
import "./Login.css"
function Login(props) {

   const [signup, setSignUp] = useState(false);

   const handleRegister = (e)=>{
        e.preventDefault();
        const username = 'Aman';
        props.login(username);
   }

    return (
        <>
      
         <div className='loginScreen'>
            <img src='https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png'></img>

             {
                  signup === true ? (
                <form onSubmit={handleRegister}>

                <input type="text" placeholder='First Name'  />
                <input type="text" placeholder='Last Name' />
                <input type="email" placeholder='Email'  />
                <input type="password" placeholder='Password'   />
                <input type="submit" placeholder='Sign Up'/>
                <h4>Already a member ? <span onClick = {e => setSignUp(false)}>Login Here</span></h4>
             </form>)
             :
             (
             <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="submit" placeholder='Sign Up'/>
                <h4>Not a member ? <span onClick = {e => setSignUp(true)}>Register Here</span></h4>
             </form>)
    }
         </div>
         </>
  )
}

export default Login