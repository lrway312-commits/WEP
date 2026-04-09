// Classic Luxury Interactions

// Add a slight background change to the navbar on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'var(--glass-bg)';
        nav.style.boxShadow = 'none';
    }
});

// The model-viewer component handles all the complex 3D logic natively!
// No more raw Three.js "white eggs".
