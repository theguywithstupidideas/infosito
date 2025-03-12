// Gestione del menu
import {highlightActiveMenuItem, listItems, loadMenuView} from "./menu.js";
import {SaneCheck} from "./sanity.js";

loadMenuView('my-home');

listItems('.menu-item').then((menuItems) => {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            highlightActiveMenuItem(menuItems, item);
            const loadView = item.getAttribute("data-page");
            const nameView = item.getAttribute("page-name");
            if(SaneCheck('string', loadView, nameView)) {
                loadMenuView(loadView, nameView);
                console.log("done");
            } else {
                console.error('Sanity check failed.')
            }
        });
    });
});