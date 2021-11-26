import React,{useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser ,login,logout} from './features/userSlice';
import { auth } from "./firebase";

function App() {
useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
    
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,

      }))
   
      
    } else {
      dispatch(logout());
     
    }
  });
  

}, [])



  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="app">
   
   
     <Header/>




     {!user?(<Login />):(

<div className="app__body">
          <Sidebar/>
          <Feed />
          <Widgets />
        </div>
     )
     }
     
      

    </div>
  );
}

export default App;
