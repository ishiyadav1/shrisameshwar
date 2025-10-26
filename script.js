// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function () {
    // Initialize any common functionality
    console.log('Ashram Initiative loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Form validation for donation page
function validateDonationForm() {
    const form = document.getElementById('donation-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const name = document.getElementById('name').value;

        if (!name || !amount) {
            alert('Please fill in all required fields');
            return;
        }

        if (isNaN(amount)) {
            alert('Please enter a valid donation amount');
            return;
        }

        // In a real app, you would process the donation here
        //alert(`Thank you, ${name}, for your donation of ₹${amount}! We appreciate your support in building this sacred space.`);
        form.reset();
    });
}

// Initialize form validation if on donation page
if (window.location.pathname.includes('/donate.html')) {
    document.addEventListener('DOMContentLoaded', validateDonationForm);
}