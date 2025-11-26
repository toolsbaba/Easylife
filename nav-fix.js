// nav-fix.js - Universal Navigation Fix for Easy Life
console.log('Easy Life Navigation Fix Loaded');

// Fix navigation when page loads
document.addEventListener('DOMContentLoaded', function() {
    fixAllNavigation();
});

function fixAllNavigation() {
    console.log('Fixing navigation on:', window.location.href);
    
    // Get current page
    const currentPage = window.location.pathname;
    const isHomePage = currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/');
    
    // Fix HOME button
    const homeButtons = document.querySelectorAll('.nav-home');
    homeButtons.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            if (isHomePage) {
                // On home page - scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // On tool page - go to home page
                window.location.href = 'index.html';
            }
        };
    });
    
    // Fix TOOLS button
    const toolsButtons = document.querySelectorAll('.nav-tools');
    toolsButtons.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            if (isHomePage) {
                // On home page - scroll to tools section
                const toolsSection = document.getElementById('tools');
                if (toolsSection) {
                    toolsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // On tool page - go to home page tools section
                window.location.href = 'index.html#tools';
            }
        };
    });
    
    // Fix CONTACT button
    const contactButtons = document.querySelectorAll('.nav-contact');
    contactButtons.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            if (isHomePage) {
                // On home page - scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // On tool page - go to home page contact section
                window.location.href = 'index.html#contact';
            }
        };
    });
    
    // Fix LOGO
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.onclick = function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        };
    }
    
    // Fix mobile menu
    setupMobileMenu();
    
    console.log('Navigation fixed successfully!');
}

function setupMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.onclick = function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = '#ffffff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                navLinks.style.gap = '15px';
                mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
            }
        };
    }
}