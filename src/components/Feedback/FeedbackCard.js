import React from 'react';
import person from '../../assets/person.svg'
const FeedbackCard = ({card, index, currentIndex}) => {
    return (
        <div className={`feedback_card ${index === currentIndex ? 'current' : ''}`}>
            <div className='feedback_card_name_box'>
                <div className='feedback_card_person'>
                    <img alt='pers' src={person}/>
                </div>
                <h2 className='feedback_name'>{card.name}</h2>
            </div>
            <p className='feedback_text'>
                {card.text}
            </p>
        </div>
    );
};

export default FeedbackCard;