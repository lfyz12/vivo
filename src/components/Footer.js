import React, {useState} from 'react';
import Logo from "../assets/Logo";
import ButtonUI from "./ButtonUI/ButtonUI";
import '../styles/footer.css'
import OrderModal from "./Modal/OrderModal";
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='footer'>
            <div className='footer_content'>
                <div className='logo_box'>
                    <Logo/>
                </div>

                <div className='footer_menu'>
                <span className='footer_menu_item'>
                    <a className='footer_item_link'>Наши услуги</a>
                </span>
                    <span className='footer_menu_item'>
                    <a className='footer_item_link'>Бренды</a>
                </span>
                    <span className='footer_menu_item'>
                    <a className='footer_item_link'>Отзывы</a>
                </span>
                </div>

                <div className='footer_btn_box'>
                    <div className='footer_phone_box'>
                        <span>+7 (343) 311-21-11</span>
                    </div>

                    <ButtonUI action={openModal} adds='foot'>
                        Перезвонить мне
                    </ButtonUI>
                </div>

            </div>
            <OrderModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    );
};

export default Footer;