document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Email submission logic would go here
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});