// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});
// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Project Filtering

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
// Contact Form Validation

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            event.preventDefault();
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            event.preventDefault();
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            event.preventDefault();
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

    });

}