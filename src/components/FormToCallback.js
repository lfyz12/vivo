import React, {useState} from 'react';
import '../styles/callback.css'
import ButtonUI from "./ButtonUI/ButtonUI";
const FormToCallback = () => {
    const [name,setName] = useState('')
    const [phone, setPhone] = useState('')

    const click = (e) => {
        e.preventDefault()
        setPhone('')
        setName('')
    }

    return (
        <div className='callback_form'>
            <div className='callback_bg'></div>
            <div className='callback_bg_2'></div>
            <div className='callback_content'>
                <h2 className='callback_title'>Заберем ваш сломанный смартфон прямо из дома</h2>
                <h3 className='callback_second_title'>Оставьте Ваш номер телефона и мы перезвоним Вам <b>прямо сейчас</b>.</h3>
                <form className='callback_realy_form'>
                    <input
                        type='text'
                        placeholder='Имя'
                        className='callback_name'
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <input
                        type='text'
                        maxLength={12}
                        placeholder='+7 --- --- -- --'
                        className='callback_phone'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}/>
                    <ButtonUI action={click}>Перезвонить мне</ButtonUI>
                </form>
            </div>
        </div>
    );
};

export default FormToCallback;