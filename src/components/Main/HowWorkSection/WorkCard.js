import React from 'react';


const WorkCard = ({card, index, currentIndex}) => {
    return (
        <div className={`work_card ${index === currentIndex ? 'current' : ''}`}>
            <div className='work_card_img_box'>
                {card.image}
            </div>
            <div className='work_card_title_box'>
                <h3 className='work_card_title'>{card.title}</h3>
            </div>
            <div className='work_card_index'>0{index + 1}</div>
        </div>
    );
};

export default WorkCard;