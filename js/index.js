document.addEventListener('DOMContentLoaded', function() {
    const pathName = window.location.pathname;
    const aboutMeSection = document.querySelector('.container #index');
    const skillsSection = document.querySelector('.container #tech');
    const projectSection = document.querySelector('.container #projects');
    const contactSection = document.querySelector('.container #contact');

    function fadeIn(section) {
        section.style.display = 'block';
        section.classList.remove('fade-out');
        section.classList.add('fade-in');
    }

    function fadeOut(link, sectionOut) {
        sectionOut.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    }

    const sections = [aboutMeSection, skillsSection, projectSection, contactSection];
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        if (section) {
            if (pathName.endsWith(section.id + '.html')) {
                setTimeout(function() {
                    fadeIn(section);
                }, 500);
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            sections.forEach(section => {
                if (section) {
                    fadeOut(link, section);
                }
            });
        });
    });
});
