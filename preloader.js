document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');

    // Ensure no-scroll class is applied initially
    document.body.classList.add('no-scroll');

    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            preloader.addEventListener('transitionend', () => {
                preloader.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }, { once: true }); // Ensure the listener is only added once
        }, 1000); // Delay for visual effect, adjust as needed
    });
});
