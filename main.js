// Initialize EmailJS with your Public Key
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

// Hamburger Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// 1. Handle Volunteer Form
document.getElementById('volunteer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const templateParams = {
        name: document.getElementById('vol-name').value,
        email: document.getElementById('vol-email').value,
        phone: document.getElementById('vol-phone').value,
        message: document.getElementById('vol-interest').value,
        form_type: "Volunteer Application"
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
            alert('Application sent successfully!');
            this.reset();
        }, (err) => {
            alert('Failed to send application. Please email mysociety@cig.ca directly.');
            console.error(err);
        });
});

// 2. Handle Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const templateParams = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        message: document.getElementById('contact-message').value,
        form_type: "General Contact"
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (err) => {
            alert('Failed to send message. Please email mysociety@cig.ca directly.');
            console.error(err);
        });
});
