// document.addEventListener('DOMContentLoaded', function() {
//     var expand = document.querySelectorAll('.expand');

//     expand.forEach(function(button) {
//         button.addEventListener('click', toggleContent);
//         button.addEventListener('touchstart', toggleContent);
//     });

//     function toggleContent(event) {
//         event.preventDefault();

//         var button = event.target;
//         var workBox = button.closest('.work-box');
//         toggleContentVisibility(workBox);
//         toggleButtonText(button);
//     }

//     function toggleContentVisibility(workBox) {
//         var paragraph = workBox.querySelectorAll('.work-box p:not(#title)');
//         var link = workBox.querySelector('.work-box a');

//         paragraph.forEach(function(paragraph) {
//             paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
//         });

//         link.style.display = (link.style.display === 'none' || link.style.display === '') ? 'block' : 'none';
//     }

//     function toggleButtonText(button) {
//         button.textContent = (button.textContent === 'Show more') ? 'Show less' : 'Show more';
//     }
// });
