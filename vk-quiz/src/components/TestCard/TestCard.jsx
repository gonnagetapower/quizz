import { Card, CardGrid } from "@vkontakte/vkui";
import React from "react";

import './TestCard.css'

const TestCard = () => {
    return (
        <CardGrid size="l">
            <Card>
                <div className="card-container">
                    <div className="card">
                        <h1 className="card__text">Тест</h1>
                    </div>
                </div>
            </Card>
        </CardGrid>
    )
}

export default TestCard;