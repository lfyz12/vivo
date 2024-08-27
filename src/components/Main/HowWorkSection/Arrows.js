import React from 'react';

const Arrows = ({currentIndex, goNext, goPrev}) => {
    return (
        <div>
            <button onClick={goPrev}>
                &lt;
            </button>
            <span>{currentIndex} / 4</span>
            <button onClick={goNext}>
                &gt;
            </button>
        </div>
    );
};

export default Arrows;