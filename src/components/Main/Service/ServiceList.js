import React from 'react';
import ServiceCard from "./ServiceCard";

const ServiceList = ({open}) => {
    const services = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='service_list'>
            {services.map((service, index) =>
            <ServiceCard key={index} open={open}/>)}
        </div>
    );
};

export default ServiceList;