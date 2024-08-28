import React, {useState} from 'react';
import WorkCard from "./WorkCard";
import WorkCardList from "./WorkCardList";
import Arrows from "./Arrows";

const WorkCardSlider = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slider"  >
            <div className='slider_box'>
                <WorkCardList cards={cards} slide={'slideList'} currentIndex={currentIndex}/>
            </div>

            <Arrows currentIndex={currentIndex} goNext={nextSlide} goPrev={prevSlide}/>
        </div>
    );
};

export default WorkCardSlider;