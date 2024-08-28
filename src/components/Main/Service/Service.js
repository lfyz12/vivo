import React, {useState} from 'react';
import '../../../styles/service.css'
import ServiceList from "./ServiceList";
import ServiceModal from "../../Modal/ServiceModal";
const Service = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='service' id='services'>
            <h2 className='service_title'>Наши услуги</h2>
            <h3 className='service_explain'>Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</h3>
            <ServiceList open={openModal}/>
            <ServiceModal onClose={closeModal} isOpen={isModalOpen} service={'Замена light сенсора'}/>
        </div>
    );
};

export default Service;