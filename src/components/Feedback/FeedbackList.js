import React, {useState} from 'react';
import FeedbackCard from "./FeedbackCard";
import Arrows from "./Arrows";

const FeedbackList = ({feedbacks}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? feedbacks.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === feedbacks.length - 1 ? 0 : currentIndex + 1);
    };


    return (
        <div className='slider'>
            <div className='slider_box'>
                <div className='feedback_list' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {feedbacks.map((card, index) =>
                        <FeedbackCard card={card} index={index} key={index}/>)}
                </div>
            </div>
            <Arrows nextSlide={nextSlide} prevSlide={prevSlide}/>
        </div>
    );
};

export default FeedbackList;