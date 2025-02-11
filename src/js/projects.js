// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random floating animation
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        particle.style.animation = `
            fadeIn ${duration}s ease-in-out ${delay}s infinite alternate,
            float ${duration}s ease-in-out ${delay}s infinite alternate
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when the page loads
document.addEventListener('DOMContentLoaded', createParticles);