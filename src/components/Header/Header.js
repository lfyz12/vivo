import React from 'react';
import Navbar from "./Navbar";
import '../../styles/header.css'
import HeaderContent from "./HeaderContent";
const Header = () => {
    return (
        <header className='header'>
            <div className='bg'></div>
            <Navbar/>
            <HeaderContent/>
        </header>
    );
};

export default Header;