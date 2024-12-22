// about-us.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".about-item");

    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});

