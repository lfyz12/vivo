import React from 'react';
import SettingsIcon from "../assets/SettingsIcon";
import DollarLabelIcon from "../assets/DollarLabelIcon";
import DetailIcon from "../assets/DetailIcon";
import '../styles/infoBar.css'
const InfoBar = () => {
    return (
        <section className='info_bar'>
            <div className='info_bar_content'>
                <div className='info_bar_item'>
                    <SettingsIcon/> <h3 className='info_bar_name'>Ремонт и консультация
                    на месте</h3>
                </div>

                <div className='info_bar_item'>
                    <DollarLabelIcon/> <h3 className='info_bar_name'>Нет скрытых платежей
                    и переплат</h3>
                </div>

                <div className='info_bar_item'>
                    <DetailIcon/> <h3 className='info_bar_name'>Собственный склад запчастей</h3>
                </div>
            </div>
        </section>
    );
};

export default InfoBar;