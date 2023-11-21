// Mobile menu
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const lines = document.querySelectorAll('.line');

    mobileNav.classList.toggle('active');
    lines.forEach(line => {
        line.classList.toggle('active');
    });
}