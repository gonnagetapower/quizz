import { Card, CardGrid } from "@vkontakte/vkui";
import React from "react";
import { Link } from "react-router-dom";

import './TestCard.css'

const TestCard = ({id}) => {
    return (
        <Link to={`/test/${id}`}>
        <CardGrid size="l">
            <Card mode="shadow">
                <div className="card-container">
                    <div className="card">
                        <h1 className="card__text">Тест по истории</h1>
                    </div>
                </div>
            </Card>
        </CardGrid>
        </Link>
    )
}

export default TestCard;