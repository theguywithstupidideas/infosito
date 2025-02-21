export function listMenu(menuarg) {
    return new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", () => {
            let menuItems = document.querySelectorAll(menuarg);
            console.log(menuItems);
            resolve(menuItems);
        });
    });
}

export function navigateToPage(page) {
    fetch(page).then(response => {
        if (response.ok) {
            window.location.href = page;
        }
        console.error("Failed to fetch page: " + page);
    })
}

export function highlightActiveMenuItem(menuItems) {
    const currentPage = window.location.pathname.split('/').pop();
    if (menuItems) {
        menuItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if ((page === 'home' && currentPage === 'index.html') || `${page}.html` === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}