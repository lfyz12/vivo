import React from 'react';
import './buttonUI.css'
const ButtonUi = ({children}) => {
    return (
        <button className='button_ui' style={{
            height: '60px',
            width: '280px'
        }}>
            {children}
        </button>
    );
};

export default ButtonUi;