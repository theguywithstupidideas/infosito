export function navigateToPage(page) {
    fetch(page).then(response => {
        if (response.ok) {
            window.location.href = page;
        }
        console.error("Failed to fetch page: " + page);
        window.location.href = "notFound.html";
    })
}

export function attachComponent(component, item, pageName = 'noName') {
    component.id = 'test-id';
    component.setAttribute('page-name', pageName)
    item.appendChild(component);
}