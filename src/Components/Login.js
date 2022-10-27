import React from 'react';
import './Login.css'
import { useState, useEffect } from 'react'
import SignUp from './SignUp';
import { selectUser } from "../features/userSlice";
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const { user } = useSelector(selectUser)
    const [isSignIn, setIsSignIn] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            location.pathname = "/"
            navigate('/')
        }
    }, [])
    console.log('Location Login', location)
    const SignIn = () => {
        setIsSignIn(true)
    }

    return (
        <div className="loginScreen">
            <div className='loginScreen__background'>
                <img className="loginScreen__logo" src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456' alt='' />
            </div>
            <button onClick={SignIn} className='LoginScreen__button'> Sign In </button>
            <div className='loginScreen__gardient'></div>



            <div className='loginScreen__body'>
                {isSignIn ? <SignUp /> :
                    <>
                        <h1>Unlimited films, TV programmers and more.</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={SignIn} className='loginScreen__getStarted'>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>}
            </div>
        </div>
    );
}

export default Login;
