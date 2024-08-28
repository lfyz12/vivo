import React, {useState} from 'react';
import arrow from '../assets/arrow.svg'
import phone from '../assets/phoneIcon.svg'
import '../styles/action.css'
import EditPhoneModal from "./Modal/EditPhoneModal";
import OrderModal from "./Modal/OrderModal";
const ActionSection = () => {
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
    const openModalEdit = () => setIsModalEditOpen(true);
    const closeModalEdit = () => setIsModalEditOpen(false);

    const openModalOrder = () => setIsModalOrderOpen(true);
    const closeModalOrder = () => setIsModalOrderOpen(false);
    return (
        <div className='action_section'>
            <div className='action_bg'></div>
            <div className='action_section_content'>
                <div className='widget_box'>
                    <div onClick={openModalEdit} className='edit_widget'>
                        <h2 className='widget_title'>Слишком сильные повреждения?</h2>
                        <p className='widget_explain'>Сдайте ваше устройство на запчасти обратившись в наш
                            сервис</p>
                        <h3 className='widget_link'>Разобрать на запчасти <img alt='arrow' src={arrow} className='edit_widget_img'/></h3>
                        <div className='edit_widget_bg'></div>
                    </div>

                    <div className='info_widget' onClick={openModalOrder}>
                        <div className='info_widget_bg'></div>
                        <div className='info_widget_bg2'></div>
                        <h2 className='widget_title'>Ознакомится с более точными ценами</h2>
                        <div className='info_widget_phone_box'>
                            <img alt='phone' src={phone} className='info_widget_img'/>
                            <span className='info_widget_phone'>89610988111</span>
                        </div>
                    </div>
                </div>

                <div className='shop_widget'>
                    <div className='shop_widget_bg'></div>
                    <h2 className='widget_title'>Покупайте запчасти онлайн</h2>
                    <p className='widget_explain'>Комплектующие на различные девайсы прямо со склада</p>
                    <div className='widget_link'>
                        <span>Посмотреть</span>
                        <img alt='arrow' src={arrow} className='edit_widget_img'/>
                    </div>
                </div>
            </div>
            <EditPhoneModal isOpen={isModalEditOpen} onClose={closeModalEdit}/>
            <OrderModal isOpen={isModalOrderOpen} onClose={closeModalOrder}/>
        </div>
    );
};

export default ActionSection;