import React from "react";

import './Result.css'

const Result = ({ correct, questions, refreshGame }) => {
    return (
        <div className="result">
            <h2>Тест окончен</h2>
            <h2>Вы ответили на {correct} ответа из {questions.length}</h2>
            <button onClick={() => refreshGame()}>Попробовать снова</button>
        </div>
    );
}

export default Result;
