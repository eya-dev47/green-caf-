document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Slider functionality
    const slides = document.querySelectorAll(".slides img");
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        slides[currentSlide].classList.add("active");
    }

    // Change slide every 3 seconds
    setInterval(showNextSlide, 3000);
});

