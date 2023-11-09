// Fade in animation for transition into index and it's sections
document.addEventListener('DOMContentLoaded', function() {
    const pathName = window.location.pathname;
    const aboutMeSection = document.querySelector('.container #about-me');
    const skillsSection = document.querySelector('.container #tech');

    if (pathName.endsWith("index.html")) {
        setTimeout(function() {
            aboutMeSection.classList.add('fade-in');
        }, 500);
    } else if (pathName.endsWith("tech.html")) {
        setTimeout(function() {
            skillsSection.classList.add('fade-in');
        }, 500);
    }
});