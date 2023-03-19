db.quizzes.insertOne(
    {
        category: "64085407a7658c7991d2fe35",
        game: {
            title: 'HISTORY TEST',
            available: true,
            price: 0,
            test: [{
                title: "Год основания Древней Руси",
                variants: ["1002", "805", "882"],
                correct: 1,
            },
            {
                title: "Укажите года правления Ивана грозного",
                variants: ["1446-1484", "1492-1515", "1533-1584", "1496-1533"],
                correct: 1,
            },
            {
                title: "К внутренней политике Екатерины II нельзя отнести?",
                variants: ["Принятие указа, заставившего всех дворян служить",
                    "Созыв Уложенной комиссии",
                    "Принятие «Жалованной грамоты дворянству"],
                correct: 1,
            },
            ]
        }
    }
)