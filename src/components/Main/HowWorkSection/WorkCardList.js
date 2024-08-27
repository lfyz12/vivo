import React, {useState} from 'react';

import WorkCard from "./WorkCard";

const WorkCardList = ({cards}) => {

    return (
        <div className='work_card_list'>
            {cards.map((card, index) =>
            <WorkCard key={index} card={card} index={index}/>)}
        </div>
    );
};

export default WorkCardList;