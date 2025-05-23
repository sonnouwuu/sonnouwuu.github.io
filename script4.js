document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider2");
    const slides = document.querySelectorAll(".slide2");
    const prevBtn = document.querySelector(".prev2");
    const nextBtn = document.querySelector(".next2");
    const dotsContainer = document.querySelector(".slider-dots2");
    let currentIndex = 0;

    // Создаём точки для переключения групп по 4 письма
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot2");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        document.querySelectorAll(".dot2").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);

    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
    });
});
