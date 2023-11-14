document.addEventListener('DOMContentLoaded', function() {
    var expand = document.querySelectorAll('.expand');

    expand.forEach(function(button) {
        button.addEventListener('click', function() {
            var workBox = button.closest('.work-box');
            toggleContentVisibility(workBox);
        });
    });

    function toggleContentVisibility(workBox) {
        var paragraph = workBox.querySelectorAll('p:not(#title)');
        var link = workBox.querySelector('a');

        paragraph.forEach(function (paragraph) {
            paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
        });

        link.style.display = (link.style.display === 'none' || link.style.display === '') ? 'block' : 'none';
    }
});