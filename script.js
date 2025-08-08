document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
    
    // Close nav when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });


    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointment-form');
    const formConfirmation = document.getElementById('form-confirmation');

    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Get form data
        const name = document.getElementById('name').value;
        
        // You can get all other data similarly if needed for a backend
        // const phone = document.getElementById('phone').value;
        // const service = document.getElementById('service').value;
        // const timing = document.getElementById('timing').value;

        // Display a confirmation message
        formConfirmation.textContent = `Thank you, ${name}! Your request has been received. We will call you shortly to confirm.`;

        // Clear the form
        appointmentForm.reset();
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            formConfirmation.textContent = '';
        }, 5000);
    });
    
    // Scroll Animation Observer
    const sections = document.querySelectorAll('.section-padding, .trust-banner');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add 'hidden' class initially and observe each section
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

});
