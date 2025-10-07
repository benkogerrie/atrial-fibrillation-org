// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Star rating functionality
    document.querySelectorAll('.star-rating').forEach(rating => {
        const stars = rating.querySelectorAll('input[type="radio"]');
        const labels = rating.querySelectorAll('label');
        
        // Handle star clicks
        labels.forEach((label, index) => {
            label.addEventListener('click', function() {
                // Check the corresponding radio button
                stars[index].checked = true;
                
                // Update visual state
                updateStarDisplay(labels, index);
            });
        });
        
        // Handle radio button changes
        stars.forEach((star, index) => {
            star.addEventListener('change', function() {
                updateStarDisplay(labels, index);
            });
        });
        
        function updateStarDisplay(labels, selectedIndex) {
            // Remove active class from all labels
            labels.forEach(label => label.classList.remove('active'));
            
            // Add active class to selected and previous stars
            for (let i = 0; i <= selectedIndex; i++) {
                labels[i].classList.add('active');
            }
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 70; // Height of fixed header
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual Formspree submission)
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent. We will get back to you as soon as possible.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.about-card, .trigger-card, .supplement-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Supplement card interactions
document.addEventListener('DOMContentLoaded', function() {
    const supplementCards = document.querySelectorAll('.supplement-card');
    
    supplementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Search functionality for supplements (if needed in future)
function searchSupplements(query) {
    const cards = document.querySelectorAll('.supplement-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Print functionality
function printPage() {
    window.print();
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Atrial Fibrillation - Information & Support',
            text: 'Reliable information about atrial fibrillation, triggers and supplements.',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy loading for images (if added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_type: this.className,
                page: window.location.pathname
            });
        });
    });
});

// Track navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('navigation_click', {
                link_text: this.textContent,
                link_href: this.getAttribute('href')
            });
        });
    });
});

// Load and render research studies
document.addEventListener('DOMContentLoaded', function() {
    const researchGrid = document.getElementById('research-grid');
    if (!researchGrid) return;

    function renderStudies(studies) {
        studies.forEach(study => {
            const card = document.createElement('article');
            card.className = 'research-card';

            const badges = `
                <div class="research-meta">
                    <span class="badge">${study.topic}</span>
                    <span class="badge">${study.type}</span>
                    ${study.population && study.population !== '—' ? `<span class=\"badge\">${study.population}</span>` : ''}
                    <span class="badge">Evidence: ${study.evidence}</span>
                </div>
            `;

            card.innerHTML = `
                ${badges}
                <h3 class="research-title">${study.title}</h3>
                <p class="research-journal">${study.journal}</p>
                <p class="research-summary">${study.summary}</p>
                <div class="research-actions">
                    <a class="research-link" href="${study.url}" target="_blank" rel="noopener noreferrer">Read study</a>
                </div>
            `;

            researchGrid.appendChild(card);
        });
    }

    function loadStudies() {
        const jsonUrl = new URL('research.json', window.location.href).toString();
        fetch(jsonUrl, { cache: 'no-store' })
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch research.json');
                return res.json();
            })
            .then(renderStudies)
            .catch(() => {
                // Retry with relative path as a fallback (handles some path edge cases)
                fetch('./research.json?cb=' + Date.now())
                    .then(res => res.ok ? res.json() : Promise.reject())
                    .then(renderStudies)
                    .catch(() => {
                        // Minimal inline fallback to avoid empty section if fetching fails on some hosts
                        const fallback = [
                            {
                                topic: 'Taurine',
                                title: 'Taurine and cardiac rhythm stability (overview)',
                                journal: 'Summary card',
                                url: 'https://pubmed.ncbi.nlm.nih.gov/28849502/',
                                summary: 'Preclinical and case evidence suggests taurine may stabilize cardiac rhythm and reduce remodeling; human AF trials are needed.',
                                type: 'Summary',
                                population: '—',
                                evidence: 'emerging'
                            },
                            {
                                topic: 'Citrulline/NO',
                                title: 'NO pathway and AF (overview)',
                                journal: 'Summary card',
                                url: 'https://pubmed.ncbi.nlm.nih.gov/15172469/',
                                summary: 'NO donors reduced post‑op AF in trials; citrulline improves NO bioavailability but AF outcome data remain limited.',
                                type: 'Summary',
                                population: '—',
                                evidence: 'moderate'
                            }
                        ];
                        renderStudies(fallback);
                    });
            });
    }

    loadStudies();
});
