import React from 'react';
import MainBackground from "./MainBackground";
import '../../styles/main.css'
import WorkSection from "./HowWorkSection/WorkSection";
import Products from "./Products/Products";
const Main = () => {
    return (
        <div className='main'>
          <MainBackground/>
          <div className='bg_phone'></div>
          <WorkSection/>
          <Products/>
        </div>
    );
};

export default Main;