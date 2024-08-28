import React from 'react';

const Arrows = ({prevSlide, nextSlide}) => {
    return (
        <div>
            <button className="prev" onClick={prevSlide}>
                ←
            </button>
            <button className="next" onClick={nextSlide}>
                →
            </button>
        </div>
    );
};

export default Arrows;