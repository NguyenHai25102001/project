function handlePage(event) {
    let pages = document.querySelectorAll('.order_summary + nav ul.pagination li .page-link');

    pages.forEach(page => {
        page.classList.remove('active');
    });
    event.classList.add('active');
}