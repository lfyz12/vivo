import React from 'react';
import ButtonUI from "../ButtonUI/ButtonUI";
import Logo from "../../assets/Logo";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo_box'>
                <Logo/>
            </div>

            <div className='navbar_menu'>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link'>Наши услуги</a>
                </span>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link'>Бренды</a>
                </span>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link'>Отзывы</a>
                </span>
            </div>

            <div className='navbar_phone_box'>
                <span>+7 (343) 311-21-11</span>
            </div>

            <ButtonUI adds='nav'>
                Перезвонить мне
            </ButtonUI>
        </div>
    );
};

export default Navbar;