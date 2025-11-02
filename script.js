document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    
    const setActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; 
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    };
    
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});

