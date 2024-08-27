import React from 'react';
import Navbar from "./Navbar";
import '../../styles/header.css'
import HeaderBackgound from "./HeaderBackgound";
import HeaderContent from "./HeaderContent";
const Header = () => {
    return (
        <header className='header'>
            <Navbar/>
            <div className='bg'></div>
            {/*<HeaderBackgound/>*/}
            <HeaderContent/>
        </header>
    );
};

export default Header;