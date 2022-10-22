import React from 'react';
import '../Components/HomeScreen.css'
import Banner from './Banner';
import NavBar from './NavBar';

function HomeScreen() {
  return (
    <div className="home_screen">
        <NavBar />
        <Banner />

    {/* Body */}

    </div>
  );
}

export default HomeScreen;
