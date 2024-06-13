// Initialize Particles.js with the given settings
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});

// Example animation using Anime.js
anime({
    targets: 'h1, h2, h3, p',
    translateY: [-20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: anime.stagger(100, {start: 500})
});

// Example animation using GreenSock
gsap.from("section", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sync carousels
$('#photoCarousel').on('slide.bs.carousel', function(event) {
    $('#testimonialCarousel').carousel(event.to);
});