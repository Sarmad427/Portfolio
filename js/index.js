document.addEventListener('DOMContentLoaded', () => {
    const skillBars = [
        { id: 'skillBar1', targetWidth: 80 },
        { id: 'skillBar2', targetWidth: 80 },
        { id: 'skillBar3', targetWidth: 70 },
        { id: 'skillBar4', targetWidth: 60 },
    ];

    skillBars.forEach(skill => {
        const skillBar = document.getElementById(skill.id);
        let width = 0;

        const interval = setInterval(() => {
            if (width >= skill.targetWidth) {
                clearInterval(interval);
            } else {
                width++;
                skillBar.style.width = width + '%';
                skillBar.setAttribute('aria-valuenow', width);
                skillBar.textContent = width + '%';
            }
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    new Typed('.txt', {
        strings: ['Freelancer.','Front-End Developer.', 'Back-End Developer.'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});