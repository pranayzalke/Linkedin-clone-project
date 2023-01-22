import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from "./Login";
// import './App.css';

 function App() {

  const [user, setUser] = React.useState(null);

  const handleLogin = (username) => {
    setUser(username);
  }

  return (
    <>
     {
      !user ? (<Login login={handleLogin}/>) : (
     

       <div className="app_wrapper">
         <Header/>
           <div className='app_body'>
            <Sidebar/>
               <Feed/>
                 <Widget/>
           </div>

        </div>
      )
    }

    </>
  );
}

export default App;
