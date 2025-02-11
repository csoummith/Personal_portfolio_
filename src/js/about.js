document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#skills-sphere');
    
    const skills = [
        'React','AI', 'Node.js', 'MySQL', 'Java', 'Python',
        'JavaScript','postman', 'Angular', 'HTML', 'CSS', 'AWS',
        'Docker', 'Kubernetes', 'Git', 'Azure', 'C#',
        'MongoDB', 'TypeScript', 'Linux','restapi' ,'Tableau'
    ];

    const options = {
        radius: window.innerWidth < 1024 ? 150 : 250,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
        containerClass: 'tagcloud'
    };

    // Initialize TagCloud
    const tc = TagCloud(container, skills, options);

    // After TagCloud is initialized, find all spans and add background images
    const spans = container.querySelectorAll('span');
    spans.forEach(span => {
        const skill = span.textContent;
        const imageName = skill.toLowerCase()
            .replace('#', 'sharp')
            .replace('.', '')
            .replace(' ', '') + '.png';
        span.style.backgroundImage = `url(/images/skills/${imageName})`;
        span.style.color = 'transparent';
    });

    // Responsive sphere size
    window.addEventListener('resize', () => {
        tc.destroy();
        options.radius = window.innerWidth < 1024 ? 150 : 250;
        TagCloud(container, skills, options);
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add animation to interest tags on hover
    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
