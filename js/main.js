// Gestione del menu
import {listMenu, highlightActiveMenuItem, navigateToPage} from "./menu.js";
listMenu('.menu-item').then((menuItems) => {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            navigateToPage(page);
        });
    });
});

