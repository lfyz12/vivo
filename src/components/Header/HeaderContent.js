import React, {useState} from 'react';
import ButtonUI from "../ButtonUI/ButtonUI";
import OrderModal from "../Modal/OrderModal";

const HeaderContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section className='header_content'>
            <div className='header_content_text'>
                <h1 className='header_title'>
                    Ремонт <span className='header_title_spec'>VIVO</span> в Екатеринбурге любой сложности
                </h1>

                <p className='header_explain'>
                    Ремонтируем устройства любой сложности в кратчайшие сроки и с гарантией до 3 месяцев
                </p>

                <ButtonUI action={openModal}>
                    Заказать ремонт
                </ButtonUI>
            </div>
            <div className='header_img_box'>
            </div>
            <OrderModal isOpen={isModalOpen} onClose={closeModal}/>
        </section>
    );
};

export default HeaderContent;