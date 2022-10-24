import React from 'react';
import '../Components/SignUp.css'
import { auth } from '../fireBaseApp';
import { useState, useRef, useEffect } from 'react'

function SignUp() {
    const emailRef = useRef(null)
    const passwordlRef = useRef(null)
    
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordlRef.current.value
        ).then((authUser)=>{console.log(authUser)}).catch((error)=> {
            alert(error.message)
        })
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordlRef.current.value
        ).then((authUser)=>{console.log(authUser)}).catch((error)=> {
            alert(error.message)
        })
    }


    return (
        <div className='signInScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordlRef} placeholder='Password' type='password' />
                <button onClick={signIn} type='submit'>Sign In</button>

                <h4>
                    <span className='signupScreen_gray'>New to Netflix ? </span>
                    <span onClick={register} className='signupScreen__link'>Sign Up now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUp;
