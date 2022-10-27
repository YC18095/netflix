import React from "react";
import NavBar from '../Components/NavBar'
import { selectUser } from "../features/userSlice";
import {useSelector} from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";
import {auth} from '../fireBaseApp'

function ProfileScreen() {
  const { user } = useSelector(selectUser)
  let location = useLocation()
  console.log('LOCATION', location)
  return (
    <div className="profileScreen">
      <NavBar />
      <h1>Edit Profile</h1>
      <div className="profile__body">
        <img className="profile__logo" src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="NetFlix Logo" />
        <div className="profile__details">
          <h2>{user.email}</h2>
          <div className="profile__plans">
            <button onClick={()=>auth.signOut()} className="profile__logout">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen