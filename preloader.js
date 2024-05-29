document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    }, 6000); // 6000 milliseconds = 6 seconds
});
