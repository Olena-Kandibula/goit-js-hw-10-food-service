
import cards from './menu.json';

import menuCardsTemplate from '../templates/menu-cards-tmpl.hbs';

const menuEl = document.querySelector('.js-menu');
menuEl.innerHTML = menuCardsTemplate(cards);