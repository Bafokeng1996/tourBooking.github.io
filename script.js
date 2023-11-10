// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Example JavaScript for the home page
    if (document.body.id === 'home') {
        // Your home page specific functionality

        // Bouncing animation for the product image
        const productImage = document.getElementById('productImage');
        if (productImage) {
            productImage.addEventListener('mouseover', function () {
                productImage.style.animation = 'bounce 0.5s ease infinite';
            });

            productImage.addEventListener('mouseout', function () {
                productImage.style.animation = '';
            });
        }

        console.log('Home Page JavaScript loaded.');
    }

    // Example JavaScript for the contact page
    if (document.body.id === 'contact') {
        const submitButton = document.getElementById('submitBtn');
        if (submitButton) {
            // Adding a pulsating animation on form submission
            submitButton.addEventListener('click', function (event) {
                event.preventDefault();

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                alert(`Form submitted!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
                submitButton.style.animation = 'pulse 0.5s ease';

                // Reset animation after a delay
                setTimeout(() => {
                    submitButton.style.animation = '';
                }, 500);
            });
        }
        console.log('Contact Page JavaScript loaded.');
    }
});

// Bounce animation keyframes
const bounceKeyframes = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-20px)' },
    { transform: 'translateY(0)' },
];

// Pulse animation keyframes
const pulseKeyframes = [
    { transform: 'scale(1)' },
    { transform: 'scale(1.1)' },
    { transform: 'scale(1)' },
];

// Add keyframes to the styles
const bounceAnimation = document.styleSheets[0].insertRule('@keyframes bounce {' +
    '0%, 100% { transform: translateY(0); }' +
    '40% { transform: translateY(-20px); }' +
    '60% { transform: translateY(-10px); }' +
    '}', document.styleSheets[0].cssRules.length);

const pulseAnimation = document.styleSheets[0].insertRule('@keyframes pulse {' +
    '0%, 100% { transform: scale(1); }' +
    '50% { transform: scale(1.1); }' +
    '}', document.styleSheets[0].cssRules.length);
