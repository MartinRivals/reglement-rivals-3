document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Animation when sections come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
