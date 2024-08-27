import React from 'react';
import ButtonUI from "../ButtonUI/ButtonUI";

const HeaderContent = () => {
    return (
        <section className='header_content'>
            <div className='header_content_text'>
                <h1 className='header_title'>
                    Ремонт <span className='header_title_spec'>VIVO</span> в Екатеринбурге любой сложности
                </h1>

                <p className='header_explain'>
                    Ремонтируем устройства любой сложности в кратчайшие сроки и с гарантией до 3 месяцев
                </p>

                <ButtonUI>
                    Заказать ремонт
                </ButtonUI>
            </div>
            <div className='header_img_box'>
            </div>
        </section>
    );
};

export default HeaderContent;