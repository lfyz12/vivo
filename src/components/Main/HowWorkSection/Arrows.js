import React from 'react';
import nextArrow from '../../../assets/nextArrow.svg'
import backArrow from '../../../assets/backArrow.svg'
const Arrows = ({currentIndex, goNext, goPrev}) => {
    return (
        <div className='arrow'>
            <button className='prev' onClick={goPrev}>
                <img alt='вперед' src={backArrow}/>
            </button>
            <span className='slide_count'>{currentIndex} / 4</span>
            <button className='next' onClick={goNext}>
                <img alt='вперед' src={nextArrow}/>
            </button>
        </div>
    );
};

export default Arrows;