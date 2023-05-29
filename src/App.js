import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from "./Screens/ProfileScreen";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import {logout, login, selectUser} from "./features/userSlice"


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //check if user is logged in
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
       console.log(userAuth)
       dispatch(login({
        uid:userAuth.uid,
        email: userAuth.email
       }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
    

        <Router>
          <Routes>
            {/* {!user ? <Route path="/" element={<LoginScreen/>}/> : <Route path="/" element={<HomeScreen />}/> } */}

            <Route path="/" element={ !user ? <LoginScreen /> : <HomeScreen/>}/>  
            <Route path="/profile" element={ !user ? <LoginScreen /> : <ProfileScreen/>}/>  

          </Routes>
      </Router>

    </div>
  );
}

export default App;
