document.addEventListener("DOMContentLoaded", function () {
    /*==================== Toggle Icon Navbar ====================*/
    const menuIcon = document.querySelector('#menu-icon');
    const closeIcon = document.querySelector('#close-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle Navbar on Menu Icon Click
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Toggle between menu and close icon
        closeIcon.style.display = 'block'; // Show close icon
        menuIcon.style.display = 'none'; // Hide menu icon
    });

    // Close Navbar on Close Icon Click
    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active');
        closeIcon.style.display = 'none'; // Hide close icon
        menuIcon.style.display = 'block'; // Show menu icon
    });

    // Close Navbar on Link Click
    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navbar.classList.remove('active');
            closeIcon.style.display = 'none'; // Hide close icon
            menuIcon.style.display = 'block'; // Show menu icon
        }
    });

    /*==================== Scroll Sections Active Link ====================*/
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const activeLink = document.querySelector(`header nav a[href*='${id}']`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        });

        /*==================== Sticky Navbar ====================*/
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    /*==================== Scroll Reveal ====================*/
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*==================== Typed.js ====================*/
    const typed = new Typed('.multiple-text', {
        strings: ["Full Stack Developer", "AI/ML Enthusiast", "Cloud Computing Practitioner", "Google Developer Student Club Member"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    /*==================== Contact Form Submission ====================*/
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent form from reloading the page

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
            const responseMessage = document.getElementById("responseMessage");

            // Reset response message
            responseMessage.innerText = "";
            responseMessage.style.color = "var(--main-color)";

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                responseMessage.innerText = "❌ Please enter a valid email address.";
                responseMessage.style.color = "red";
                return;
            }

            // Validate Phone Number (optional)
            if (phone && !/^\d{10}$/.test(phone)) {
                responseMessage.innerText = "❌ Please enter a valid 10-digit phone number.";
                responseMessage.style.color = "red";
                return;
            }

            // If validation passes, send the form data to the server
            responseMessage.innerText = "Sending message...";

            try {
                const response = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, phone, subject, message })
                });

                const data = await response.json();

                if (response.ok) {
                    responseMessage.innerText = "✅ Message sent successfully!";
                    responseMessage.style.color = "green";
                    contactForm.reset(); // Clear form fields
                } else {
                    responseMessage.innerText = "❌ Error: " + (data.error || "Something went wrong!");
                    responseMessage.style.color = "red";
                }
            } catch (error) {
                responseMessage.innerText = "❌ Server error! Please try again later.";
                responseMessage.style.color = "red";
            }
        });
    }
});