function checkMobileDisplay() {
    const textElements = document.querySelectorAll('.mobile-text'); // Select the text elements
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed

    if (isMobile) {
        // Hide text if on mobile
        textElements.forEach(el => el.style.display = 'none');
    } else {
        // Show text if not on mobile
        textElements.forEach(el => el.style.display = 'block');
    }
}

// Run on load and on resize
window.onload = checkMobileDisplay;
window.onresize = checkMobileDisplay;
