// JavaScript for Coffee Shop Website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#primary-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        navToggle.querySelector('.sr-only').textContent = isExpanded ? 'Close menu' : 'Open menu';
        
        // Animate hamburger to X
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('#primary-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.querySelector('.sr-only').textContent = 'Open menu';
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('#primary-menu a[href^="#"]');
    
    function updateActiveNav() {
        let scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
        
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('error'));
        
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').textContent = 'Please enter your name';
            nameInput.parentElement.classList.add('error');
            isValid = false;
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            document.getElementById('email-error').textContent = 'Please enter your email';
            emailInput.parentElement.classList.add('error');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            emailInput.parentElement.classList.add('error');
            isValid = false;
        }
        
        // Subject validation
        const subjectInput = document.getElementById('subject');
        if (subjectInput.value.trim() === '') {
            document.getElementById('subject-error').textContent = 'Please enter a subject';
            subjectInput.parentElement.classList.add('error');
            isValid = false;
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            document.getElementById('message-error').textContent = 'Please enter your message';
            messageInput.parentElement.classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission (in real app, this would send to a server)
            formSuccess.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorId = this.id + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
            this.parentElement.classList.remove('error');
        });
    });
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Lazy loading for images (if we had real images)
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        // In a real implementation, we'd use a library like lazysizes
    }
    
    // Add focus outline styling for keyboard users
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
    
    // Intersection Observer for fade-in animations (optional enhancement)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});