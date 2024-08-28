import React, {useState} from 'react';
import Suscces from "./Suscces";
import ButtonUI from "../ButtonUI/ButtonUI";
import '../../styles/modal.css'
const EditPhoneModal = ({isOpen, onClose}) => {
    const [bool, setBool] = useState(false)

    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            {bool ?
                <Suscces close={() => {
                    setBool(false);
                    onClose()
                }}/> :
                <div className="modal-container edit" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                    <h2 className="modal-title">Заполните форму и с вами свяжутся в ближайшее время</h2>
                    <form className="modal-form edit">
                        <label htmlFor="name" className="modal-label">ВАШЕ ИМЯ:</label>
                        <input type="text" id="name" className="modal-input" placeholder="Александр"/>

                        <label htmlFor="phone" className="modal-label">ВАШ ТЕЛЕФОН:</label>
                        <input type="text" id="phone" className="modal-input" placeholder="+7 (000) 000-00-00"/>
                        <div className='select-box'>
                            <div className='technique-box'>
                                <label htmlFor="technique" className="modal-label select-label">ТЕХНИКА:</label>
                                <select id="technique" className="modal-select">
                                    <option>Смартфон</option>
                                    <option>Планшет</option>
                                    <option>Ноутбук</option>
                                </select>
                            </div>

                            <div className='brand-box'>
                                <label htmlFor="brand" className="modal-label select-label">БРЕНД:</label>
                                <select id="brand" className="modal-select spec">
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Xiaomi</option>
                                </select>
                            </div>

                            <div className='model-model-box'>
                                <label htmlFor="model" className="modal-label select-label">МОДЕЛЬ:</label>
                                <select id="model" className="modal-select spec">
                                    <option>iPhone 11</option>
                                    <option>iPhone 12</option>
                                    <option>iPhone 13</option>
                                </select>
                            </div>

                        </div>


                        <div className="modal-checkbox-container">
                            <input type="checkbox" id="agreement" className="modal-checkbox"/>
                            <label htmlFor="agreement" className="modal-agreement">
                                Я соглашаюсь на обработку персональных данных и с <a href="#">политикой
                                конфиденциальности</a>
                            </label>
                        </div>

                        <ButtonUI action={(e) => {
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

export default EditPhoneModal;