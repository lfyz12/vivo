import React from 'react';
import ButtonUI from "../ButtonUI/ButtonUI";

const Menu = ({isOpen, toggleMenu}) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <button className="close_button" onClick={toggleMenu}>
                &times;
            </button>
            <div className='navbar_menu_open'>
                    <span className='navbar_menu_item_open'>
                        <a className='navbar_item_link_open'>Наши услуги</a>
                    </span>
                <span className='navbar_menu_item_open'>
                        <a className='navbar_item_link_open'>Бренды</a>
                    </span>
                <span className='navbar_menu_item_open'>
                        <a className='navbar_item_link_open'>Отзывы</a>
                    </span>
            </div>

            <div className='navbar_phone_box_open'>
                <span>+7 (343) 311-21-11</span>
            </div>

            <ButtonUI adds='nav'>
                Перезвонить мне
            </ButtonUI>
        </div>
    );
};

export default Menu;