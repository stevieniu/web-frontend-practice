// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation works
const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
})


// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);

        // scroll back to top
        if(href === '#') window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Scroll to other links
        if(href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'});
        }

        // Close mobile navigation
        if(link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open');
        }
    });
});


// Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false) {
        document.querySelector('body').classList.add('sticky');
    } else {
        document.querySelector('body').classList.remove('sticky');
    }
}, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});
obs.observe(sectionHeroEl);
