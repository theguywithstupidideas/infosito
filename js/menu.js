import {attachComponent} from "./nav.js";
import {SaneCheck} from "./sanity.js";

export function listItems(listarg) {
    return new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", () => {
            let items = document.querySelectorAll(listarg);
            console.log(items);
            resolve(items);
        });
    });
}

export function highlightActiveMenuItem(menuItems, menuItem) {
    menuItems.forEach((item) => {
        item.classList.remove('active');
    })
    menuItem.classList.add('active');
}

export function loadMenuView(component, nameView = "Set view name!"){
    const view = document.getElementById("panel");
    const oldView = document.getElementById("test-id");
    oldView?.remove();
    if(SaneCheck('HTML-Element', view)){
        console.log(view);
        attachComponent(document.createElement(component), view, nameView);
    }
}