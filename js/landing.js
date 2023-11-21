// Typewriter animation for the call to action
function typeWriter() {
    var typeText = document.getElementById("type-text");
    typeText.style.visibility = "hidden";
    setTimeout(function() {
        typeText.style.visibility = "visible";
    }, 4000);
}

window.addEventListener('load', typeWriter);

// Fade out animation for transition out of landing.html
document.addEventListener('DOMContentLoaded', function () {
    const transitionLink = document.querySelector('a[href="index.html"]');
    
    transitionLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = transitionLink.getAttribute('href');
        }, 1500);
    });
});