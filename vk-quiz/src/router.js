// Кастомный роутер

import { Page, Router } from '@happysanta/router'
import { Home, Quiz } from './panels'
// import Category from './panels/Category/Category'

export const VIEW_MAIN = 'view_main'

export const PAGE_MAIN = '/'
export const PANEL_MAIN = 'panel_main'

// export const PAGE_CATEGORY = '/category/:id([0-9]+)'
// export const PANEL_CATEGORY = 'panel_category'

export const PAGE_QUIZ = '/quiz/:id([0-9]+)'
export const PANEL_QUIZ = 'panel_quiz'

const routes = {
    [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
    // [PAGE_CATEGORY]: new Page(PAGE_CATEGORY, VIEW_MAIN),
    [PAGE_QUIZ]: new Page(PANEL_QUIZ, VIEW_MAIN)
}

export const router = new Router(routes)

export const appRoutes = [{
        panel: PANEL_MAIN,
        Component: Home,
    },
    // {
    //     panel: PANEL_CATEGORY,
    //     Component: Category,
    // },
    {
        panel: PANEL_QUIZ,
        Component: Quiz
    }
]



router.start()