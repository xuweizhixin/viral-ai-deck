// Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Language Switching
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'zh';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update button text
        langToggle.textContent = lang === 'zh' ? 'EN' : '中文';

        // Update all translatable elements
        document.querySelectorAll('[data-zh][data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // Update document language
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }

    // Initialize language
    setLanguage(currentLang);

    // Toggle language on click
    langToggle.addEventListener('click', function() {
        setLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });
});
