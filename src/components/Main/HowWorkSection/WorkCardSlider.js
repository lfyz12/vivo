import React, {useState} from 'react';
import WorkCard from "./WorkCard";
import WorkCardList from "./WorkCardList";
import Arrows from "./Arrows";

const WorkCardSlider = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (currentIndex + direction < 0) {
            slideNumber = cards.length - 1;
        } else {
            slideNumber = (currentIndex + direction) % cards.length;
        }

        setCurrentIndex(slideNumber);
    };

    const goToSlide = (number) => {
        setCurrentIndex(number % cards.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }


    return (
        <div className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <WorkCardList cards={cards}/>
            <Arrows currentIndex={currentIndex} goNext={() => changeSlide(1)} goPrev={() => changeSlide(-1)}/>
        </div>
    );
};

export default WorkCardSlider;