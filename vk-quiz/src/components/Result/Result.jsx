import React from "react";
import { useNavigate } from "react-router";

import './Result.css'

const Result = ({ correct , questions}) => {
    const navigate = useNavigate()
    return (
        <div className="result">
            <h2>Тест окончен</h2>
            <h2>Вы ответили на {correct} ответа из {questions.length}</h2>
            <button onClick={() => navigate(0)}>Попробовать снова</button>
        </div>
    );
}

export default Result;
