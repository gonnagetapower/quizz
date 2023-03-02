import React, { useEffect, useState } from "react";
import { Button } from "./../../components/";
import bridge from '@vkontakte/vk-bridge'
import './Result.css'
import { PAGE_CATEGORY, router } from "../../router";

const Result = ({ correct, questions, refreshGame }) => {

    const [wathed, setWatched] = useState(false)

    useEffect(() => {
        bridge.send('VKWebAppCheckNativeAds', { ad_format: 'reward' })
            .then((data) => {
                if (data.result) {
                    // Предзагруженная реклама есть.
                    // Теперь можно создать кнопку
                    // "Посмотрите рекламу".   
                    // ...       
                } else {
                    console.log('Рекламные материалы не найдены.');
                }
            })
            .catch((error) => { console.log(error); /* Ошибка */ });
    }, [])

    function fooButtonClick() {
        // Показать рекламу
        bridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
            .then((data) => {
                if (data.result) // Успех
                    setWatched(true)
                else // Ошибка 
                    console.log('Ошибка при показе');
            })
            .catch((error) => { console.log(error); /* Ошибка */ });
    }

    return (
        <div className="result">
            <h2>Тест окончен</h2>
            {wathed ? (
                <>
                    <h2>Вы ответили на {correct} ответа из {questions.length}</h2>
                </>
            ) : (
                <>
                </>
            )}
            <div className="btn-container">
                <Button handleClick={fooButtonClick} title={'Узнать результат'} />
                <Button handleClick={() => router.popPage()} title={'Вернуться к квизам'} />
            </div>
        </div>
    );
}

export default Result;
