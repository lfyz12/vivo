import React from 'react';

const ServiceCard = () => {
    return (
        <div className='service_card'>
            <h4 className='service_card_title'>Замена light сенсора</h4>
            <div className='service_card_infobox'>
                <span className='service_card_date'>1-3 дня</span>
                <span className='service_card_price'>1 000 - 3 000 ₽</span>
            </div>
        </div>
    );
};

export default ServiceCard;