import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/Login";
import { auth } from "./fireBaseApp";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Components/ProfileScreen";

function App() {
  const dispatch = useDispatch()
  const { user }= useSelector(selectUser)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log('USER AUTH', userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        {!user ?( <Login />) 
         : (<Routes>
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes> )}
      </BrowserRouter>
    </div>
  );
}

export default App;
