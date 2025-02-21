export function listItems(listarg) {
    return new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", () => {
            let items = document.querySelectorAll(listarg);
            console.log(items);
            resolve(items);
        });
    });
}

export function navigateToPage(page) {
    fetch(page).then(response => {
        if (response.ok) {
            window.location.href = page;
        }
        console.error("Failed to fetch page: " + page);
        window.location.href = "notFound.html";
    })
}

export function highlightActiveMenuItem(menuItems) {
    const currentPage = window.location.pathname.split('/').pop();
    if (menuItems) {
        menuItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (`${page}.html` === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}