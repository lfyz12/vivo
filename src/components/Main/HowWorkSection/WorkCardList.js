import React, {useState} from 'react';

import WorkCard from "./WorkCard";

const WorkCardList = ({cards, slide, currentIndex}) => {

    return (
        <div className={`work_card_list ${slide}`} style={{transform: `translateX(-${currentIndex * (240 - 15)}px)`}}>
            {cards.map((card, index) =>
            <WorkCard key={index} card={card} index={index} currentIndex={currentIndex}/>)}
        </div>
    );
};

export default WorkCardList;