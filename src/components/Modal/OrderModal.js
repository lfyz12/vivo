import React, {useState} from 'react';
import '../../styles/modal.css'
import Suscces from "./Suscces";
import ButtonUI from "../ButtonUI/ButtonUI";
const OrderModal = ({isOpen, onClose}) => {
    const [bool, setBool] = useState(false)

    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            {bool ?
                <Suscces close={() => {setBool(false); onClose()}}/> :
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                    <h2 className="modal-title">Заполните форму и с вами свяжутся в ближайшее время</h2>
                    <form className="modal-form">
                        <label htmlFor="name" className="modal-label">ВАШЕ ИМЯ:</label>
                        <input type="text" id="name" className="modal-input" placeholder="Александр"/>

                        <label htmlFor="phone" className="modal-label">ВАШ ТЕЛЕФОН:</label>
                        <input type="text" id="phone" className="modal-input" placeholder="+7 (000) 000-00-00"/>

                        <label htmlFor="comment" className="modal-label">КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):</label>
                        <input type="text" id="comment" className="modal-input" placeholder="Введите ваши пожелания"/>

                        <div className="modal-checkbox-container">
                            <input type="checkbox" id="agreement" className="modal-checkbox"/>
                            <label htmlFor="agreement" className="modal-agreement">
                                Я соглашаюсь на обработку персональных данных и с <a href="#">политикой
                                конфиденциальности</a>
                            </label>
                        </div>

                        <ButtonUI  action={(e) => {
                            e.preventDefault()
                            setBool(true)
                        }} className="modal-submit">Отправить
                        </ButtonUI>
                    </form>
                </div>
            }

        </div>
    );
};

export default OrderModal;