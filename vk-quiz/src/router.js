// Кастомный роутер

import { Page, Router } from '@happysanta/router';

export const VIEW_MAIN = 'view_main';

export const PAGE_WELCOME = '/';
export const PANEL_WELCOME = 'panel_welcome';

export const PAGE_MAIN = '/main';
export const PANEL_MAIN = 'panel_main';

export const PAGE_CATEGORY = '/category/:id([0-9]+)';
export const PANEL_CATEGORY = 'panel_category';

export const PAGE_QUIZ = '/category/:id([0-9]+)/quiz/:id([0-9]+)';
export const PANEL_QUIZ = 'panel_quiz';

//modals

export const MODAL_TERMS = 'modal_terms';

const routes = {
  [PAGE_WELCOME]: new Page(PANEL_WELCOME, VIEW_MAIN),
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_CATEGORY]: new Page(PANEL_CATEGORY, VIEW_MAIN),
  [PAGE_QUIZ]: new Page(PANEL_QUIZ, VIEW_MAIN),
};

export const router = new Router(routes);

router.start();
