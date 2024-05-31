document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const preloaderAnimation = document.getElementById('preloader-animation');
    const minimumDuration = 6000; // 6000 milliseconds = 6 seconds
    let pageLoaded = false;
    const startTime = Date.now();

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
        if (Date.now() - startTime >= minimumDuration) {
            fadeOutPreloader();
        }
    });

    // Refresh preloader image source only when the page is refreshed
    window.addEventListener('beforeunload', () => {
        const imageUrl = preloaderAnimation.src.split('?')[0]; // Remove any existing query string
        const timestamp = new Date().getTime(); // Generate new timestamp
        preloaderAnimation.src = `${imageUrl}?t=${timestamp}`; // Append timestamp as query string to force refresh
    });
});
