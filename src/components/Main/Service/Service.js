import React from 'react';
import '../../../styles/service.css'
import ServiceList from "./ServiceList";
const Service = () => {
    return (
        <div className='service'>
            <h2 className='service_title'>Наши услуги</h2>
            <h3 className='service_explain'>Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</h3>
            <ServiceList/>
        </div>
    );
};

export default Service;