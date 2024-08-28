import React, {useState} from 'react';
import ButtonUI from "./ButtonUI/ButtonUI";

const FormToAdvice = () => {
    const [name,setName] = useState('')
    const [phone, setPhone] = useState('')

    const click = (e) => {
        e.preventDefault()
        setPhone('')
        setName('')
    }

    return (
        <div className='callback_form'>
            <div className='advice_bg'></div>
            <div className='callback_content'>
                <h2 className='callback_title'>Нужна консультация?</h2>
                <h3 className='callback_second_title'>Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.</h3>
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

export default FormToAdvice;