document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playMusic');
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const birthdayVideo = document.getElementById('birthdayVideo');
    
    const playAnotherVideoButton = document.getElementById('playAnotherVideoButton');
    const anotherVideoMessage = document.getElementById('anotherVideoMessage');
    const anotherVideo = document.getElementById('anotherVideo');

    // Handle music play/pause button
    playButton.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
            playButton.textContent = 'Jeda Musik';
        } else {
            music.pause();
            playButton.textContent = 'Putar Musik';
        }
    });

    // Surprise Button
    surpriseButton.addEventListener('click', function() {
        surpriseMessage.classList.toggle('hidden');
        
        if (!surpriseMessage.classList.contains('hidden')) {
            birthdayVideo.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        } else {
            birthdayVideo.pause();
        }
    });

    // Play Another Video Button
    playAnotherVideoButton.addEventListener('click', function() {
        anotherVideoMessage.classList.toggle('hidden');
        
        if (!anotherVideoMessage.classList.contains('hidden')) {
            anotherVideo.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        } else {
            anotherVideo.pause();
        }
    });

    // Lightbox for Gallery
    const lightbox = new SimpleLightbox('.gallery-item', { /* options */ });

    // Particles.js Initialization
    particlesJS('background', {
        // Configuration of particles.js
    });
});
