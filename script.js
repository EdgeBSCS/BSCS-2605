// JavaScript for index.html

document.addEventListener('DOMContentLoaded', function () {
    const email = document.querySelector('.section-content li u');

    email.addEventListener('mouseover', function () {
        email.classList.add('hovered');
    });

    email.addEventListener('mouseout', function () {
        email.classList.remove('hovered');
    });

    email.addEventListener('click', function () {
        // Add your desired action here, such as opening a mail client
        // For example: window.location.href = 'mailto:' + email.textContent;
    });
});
