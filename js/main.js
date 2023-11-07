// // Typewriter style animation for text display
// var index = 0;
// var displaySpeed = 50;

// function typeEntry() {
//     var callToAction = "Let's explore";
//     var cursor = "|";

//     if (index < callToAction.length) {
//         document.getElementById("cta").innerHTML += callToAction.charAt(index);
//         index++;
//         setTimeout(typeEntry, displaySpeed);
//     } 
// }

// // Call the function on landing page load
// window.addEventListener('load', function() {
//     setTimeout(typeEntry, 4500);
// });

function typeWriter() {
    var typeText = document.getElementById("type-text");
    typeText.style.visibility = "hidden";
    setTimeout(function() {
        typeText.style.visibility = "visible";
    }, 4000);
}

window.addEventListener('load', typeWriter)