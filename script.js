// MAKE SURE TEXT DOESNT DOUBLE ON MOBILE DEVICES

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



// SO VIDEOS DON'T APPEAR ON MOBILE DEVICES

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return window.matchMedia("(max-width: 767px)").matches;
}

function insertRandomMedia() {
    const container = document.createElement('div');
    container.classList.add('media-collage-container');
    document.body.appendChild(container);

    const shuffledMedia = shuffleArray(mediaFiles);

    shuffledMedia.forEach((mediaName) => {
        // Skip video elements on mobile devices
        if (isMobileDevice() && mediaName.endsWith('.mp4')) {
            return; // Skip adding the video to the DOM
        }

        const mediaElement = document.createElement(mediaName.endsWith('.mp4') ? 'video' : 'img');
        mediaElement.src = `TheWeatherRoom/${mediaName}`;
        mediaElement.style.width = `${getRandomSize()}px`;
        mediaElement.style.height = 'auto';

        if (mediaElement.tagName.toLowerCase() === 'video') {
            mediaElement.controls = false; // Remove video controls
            mediaElement.autoplay = true; // Autoplay the video
            mediaElement.muted = true; // Mute the video
            mediaElement.loop = true; // Loop the video
        }

        // Add event listener for click to show the modal
        mediaElement.addEventListener('click', function () {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-image");
            const modalVideo = document.getElementById("modal-video");

            if (this.tagName.toLowerCase() === 'img') {
                modalImg.src = this.src;
                modalImg.style.display = "block";
                modalVideo.style.display = "none";
            } else if (this.tagName.toLowerCase() === 'video') {
                modalVideo.src = this.src;
                modalVideo.style.display = "block";
                modalImg.style.display = "none";

                // Ensure modal video has no controls and loops
                modalVideo.controls = false;
                modalVideo.loop = true;
                modalVideo.muted = false; // Unmute the video when opened in modal
                modalVideo.play(); // Play the video on modal open
            }

            modal.style.display = "block";
        });

        container.appendChild(mediaElement);
    });
}

window.onload = insertRandomMedia;


