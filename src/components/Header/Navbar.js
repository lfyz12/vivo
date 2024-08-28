import React, {useState} from 'react';
import ButtonUI from "../ButtonUI/ButtonUI";
import Logo from "../../assets/Logo";
import Menu from "./Menu";
import OrderModal from "../Modal/OrderModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <button onClick={toggleMenu} className='burger_menu'>

            </button>

            <div className='logo_box'>
                <Logo/>
            </div>

            <div className='burger_phone'>

            </div>

            <div className='navbar_menu'>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link' href='#services'>Наши услуги</a>
                </span>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link' href='#brands'>Бренды</a>
                </span>
                <span className='navbar_menu_item'>
                    <a className='navbar_item_link' href='#feedbacks'>Отзывы</a>
                </span>
            </div>

            <div className='navbar_phone_box'>
                <span>+7 (343) 311-21-11</span>
            </div>

            <ButtonUI action={openModal} adds='nav'>
                Перезвонить мне
            </ButtonUI>
            <OrderModal isOpen={isModalOpen} onClose={closeModal}/>
            {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>}
        </div>
    );
};

export default Navbar;