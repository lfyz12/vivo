import React from 'react';

const Suscces = ({close}) => {
    return (
        <div onClick={close} className='succes'>
            <div className='close'></div>
            <h1 className='succes_title'>Спасибо за заявку!</h1>
            <div className='succes_img'></div>
            <h2 className='succes_text'>Наш менеджер свяжется с Вами</h2>
        </div>
    );
};

export default Suscces;