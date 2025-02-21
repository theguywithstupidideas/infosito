// Gestione del menu
import {listItems, highlightActiveMenuItem, navigateToPage} from "./menu.js";
listItems('.menu-item').then((menuItems) => {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            navigateToPage(page);
        });
    });
});

