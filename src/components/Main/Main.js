import React from 'react';
import MainBackground from "./MainBackground";
import '../../styles/main.css'
import WorkSection from "./HowWorkSection/WorkSection";
import Products from "./Products/Products";
import Service from "./Service/Service";
const Main = () => {
    return (
        <div className='main'>
          <MainBackground/>
          <div className='bg_phone'></div>
          <WorkSection/>
          <Products/>
          <Service/>
        </div>
    );
};

export default Main;