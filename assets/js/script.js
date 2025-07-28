document.addEventListener('DOMContentLoaded', function() {
    // Handle the "login" form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            // In a real application, you'd send credentials to a server here.
            // For this static site, we simply redirect.
            window.location.href = 'dashboard.html';
        });
    }

    // Optional: Add a subtle animation or interaction for other elements
    // Example: Highlight navigation links on hover (CSS already handles this, but for JS demo)
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Add a class for JS-driven effects if needed
            // link.classList.add('hover-effect');
        });
        link.addEventListener('mouseleave', () => {
            // link.classList.remove('hover-effect');
        });
    });

    // Simple scroll-to-top button (if you decide to add one to your HTML)
    // const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    // if (scrollToTopBtn) {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 200) {
    //             scrollToTopBtn.style.display = 'block';
    //         } else {
    //             scrollToTopBtn.style.display = 'none';
    //         }
    //     });
    //     scrollToTopBtn.addEventListener('click', () => {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     });
    // }
});
