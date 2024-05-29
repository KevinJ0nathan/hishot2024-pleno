document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const minimumDuration = 6000; // 6000 milliseconds = 6 seconds
    let pageLoaded = false;

    // Function to fade out the preloader
    const fadeOutPreloader = () => {
        preloader.classList.add('fade-out');
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, { once: true }); // Ensure the listener is only added once
    };

    // Set a timeout for the minimum duration
    setTimeout(() => {
        if (pageLoaded) {
            fadeOutPreloader();
        } else {
            // If the page is not yet fully loaded, wait for it
            window.addEventListener('load', fadeOutPreloader, { once: true });
        }
    }, minimumDuration);

    // Listen for the page load event
    window.addEventListener('load', () => {
        pageLoaded = true;
        if (Date.now() >= minimumDuration) {
            fadeOutPreloader();
        }
    });
});
