import React from 'react';
import '../Components/NavBar.css'
import {useState, useEffect} from 'react'

function NavBar() {

    const [isShow, setIsShow] = useState(false)

    const transparentScrollFunc = () => {
        if(window.scrollY > 100) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',transparentScrollFunc)
        return () => window.removeEventListener('scroll',transparentScrollFunc)
    }, [])

  return (
    <div className={`nav ${isShow && 'nav__black'}`}>
        <div className='nav__content'> 
            <img className='nav__logo' src='https://toppng.com/uploads/preview/netflix-logo-png-11593869496jqso5gxgsy.png' alt='netflix image' />
            <img className='nav__avatar' src='https://ionicframework.com/docs/img/demos/avatar.svg' alt='avatar icon' />
        </div>
    </div>
  );
}

export default NavBar;
