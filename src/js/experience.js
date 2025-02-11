// Observer configuration for experience items
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Initialize intersection observer for experience items
const initExperienceObserver = () => {
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Observe all experience items for activation
    document.querySelectorAll('.experience-item').forEach(item => {
        experienceObserver.observe(item);
    });
};

// Scroll indicator functionality
const initScrollIndicator = () => {
    const mainContainer = document.querySelector('.main-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    mainContainer.addEventListener('scroll', () => {
        const footer = document.querySelector('.footer');
        const footerRect = footer.getBoundingClientRect();

        scrollIndicator.style.opacity = footerRect.top <= window.innerHeight ? '0' : '0.7';
    });
};

// Skills visibility management
const initSkillsVisibility = () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    const skillsContainers = document.querySelectorAll('.skills-ticker-container');

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const skillsId = entry.target.dataset.skills;
            const skillsContainer = document.getElementById(skillsId);

            if (entry.isIntersecting) {
                // Hide all skills containers first
                skillsContainers.forEach(container => {
                    container.classList.remove('visible');
                });
                // Show the relevant skills container
                if (skillsContainer) {
                    skillsContainer.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe each experience item
    experienceItems.forEach(item => {
        skillsObserver.observe(item);
    });
};

// Footer visibility handling
const initFooterObserver = () => {
    const skillsContainers = document.querySelectorAll('.skills-ticker-container');
    const footer = document.querySelector('.footer');

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsContainers.forEach(container => {
                    container.style.opacity = '0';
                });
            }
        });
    }, { threshold: 0.1 });

    footerObserver.observe(footer);
};

// Skills ticker animation control
const initSkillsTickerAnimation = () => {
    document.querySelectorAll('.skills-ticker').forEach(ticker => {
        ticker.addEventListener('mouseenter', () => {
            ticker.style.animationPlayState = 'paused';
        });

        ticker.addEventListener('mouseleave', () => {
            ticker.style.animationPlayState = 'running';
        });
    });
};

// Initialize all functionality
const initExperiencePage = () => {
    initExperienceObserver();
    initScrollIndicator();
    initSkillsVisibility();
    initFooterObserver();
    initSkillsTickerAnimation();
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initExperiencePage);

// Export for module usage
export { initExperiencePage };
