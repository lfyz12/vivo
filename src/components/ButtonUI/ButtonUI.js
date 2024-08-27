import React from 'react';
import './buttonUI.css'
const ButtonUi = ({children, adds, action}) => {
    return (
        <button className={`button_ui ${adds}`} onClick={action}>
            {children}
        </button>
    );
};

export default ButtonUi;