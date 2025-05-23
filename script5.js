document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide4');
    const indicators = document.querySelectorAll('.indicator4');

    let currentSlide = 1;

    function updateSlider(index) {
        slides.forEach((slide, i) => {
            console.log("Слайд " + i + " - " + (i === index ? "Активный" : "Неактивный")); // Проверка
            slide.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        currentSlide = index;
    }

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            console.log("Клик по индикатору, индекс:", index); // Проверка работы клика
            updateSlider(index);
        });
    });

    console.log("JS загружен корректно!");
});
