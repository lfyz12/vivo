import React, {useEffect, useState} from 'react';
import WorkCardList from "./WorkCardList";
import '../../../styles/workSection.css'
import CardImg1 from "../../../assets/CardImg1";
import CardImg2 from "../../../assets/CardImg2";
import CardImg3 from "../../../assets/CardImg3";
import CardImg4 from "../../../assets/CardImg4";
import WorkCardSlider from "./WorkCardSlider";
const WorkSection = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [cards, setCards] = useState([
        {
            image: <CardImg1/>,
            title: 'Уточняем проблему и проводим диагностику'
        },
        {
            image: <CardImg2/>,
            title: 'Согласовываем цену и сроки ремонта'
        },
        {
            image: <CardImg3/>,
            title: 'Осуществляем ремонт'
        },
        {
            image: <CardImg4/>,
            title: 'Отдаем устройство с ноыми деталями'
        }
    ])

    useEffect(() => {
        function checkSize() {
            window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
            return width
        }

        checkSize()
    }, [width]);


    return (
        <div className='work_section'>
            <h2 className='work_section_title'>Как мы работаем?</h2>
            {/*{width < 1299 ?*/}
            {/*    <WorkCardSlider cards={cards}/> :*/}
                <WorkCardList cards={cards}/>
            {/*}*/}


        </div>
    );
};

export default WorkSection;