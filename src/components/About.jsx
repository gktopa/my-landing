import React from 'react'
import vacuum from '../assets/images/vacuum.png'
import eco from '../assets/images/eco.png'
import check2 from '../assets/images/check2.png'
import reciept from '../assets/images/reciept.png'
import InfoCard from './InfoCard'

export default function About() {
    const handleCall = () => {
        window.location.href = "tel:+1234567890"; // Замените на нужный номер
      };
    return (
        <div className='container about__p'>
            <div className="card card__about">
                <h2 className='text-center'>Почему мы?</h2>

                <InfoCard
                    title="Индивидуальный подход к ценообразованию"
                    image={reciept}
                    description="Мы относимся к каждому клиенту. В исключительных случаях составляем смету индивидуально, учитывая специфику объекта и требования."
                    bgColor="#43AAFF"
                />
                <InfoCard
                    title="Профессиональное оборудование"
                    image={vacuum}
                    description="Наши машинные решения гарантируют высокое качество выполненных работ."
                    bgColor="#FFC24D"
                />
                <InfoCard
                    title="Экологические меры"
                    image={eco}
                    description="Наша комания использует только экологически безопасную продукцию"
                    bgColor="#43AAFF"
                />
                <InfoCard
                    title="Гибкость"
                    image={check2}
                    description="Адаптируем график и объем услуг под потребности клиента"
                    bgColor="#FFC24D"
                />

                <button onClick={handleCall} className=" about__btn">Узнать стоимость</button>

            </div>

        </div>
    )
}
