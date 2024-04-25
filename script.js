document.addEventListener('DOMContentLoaded', function () {
    const email = document.querySelector('.section-content li u');

    email.addEventListener('mouseover', function () {
        email.classList.add('hovered');
    });

    email.addEventListener('mouseout', function () {
        email.classList.remove('hovered');
    });

    email.addEventListener('click', function () {
    });
});
