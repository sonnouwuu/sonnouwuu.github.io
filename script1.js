document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const progressBar = document.querySelector('.progress-bar');
    
    let currentSlide = 0;
    let slideInterval;
    let progressInterval;
    let isAnimating = false;
    const slideDuration = 5000; // 5 секунд
    
    // Инициализация слайдера
    function initSlider() {
        slides[0].classList.add('active');
        dots[0].classList.add('active');
        startAutoSlide();
        animateContent();
    }
    
    // Показать слайд
    function showSlide(index) {
        if (isAnimating || index === currentSlide) return;
        
        isAnimating = true;
        
        // Скрываем текущий слайд
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Показываем новый слайд
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Сбрасываем и запускаем прогресс бар
        resetProgressBar();
        
        // Анимируем контент
        animateContent();
        
        // Разблокируем анимацию после завершения перехода
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    }
    
    // Анимация контента слайда
    function animateContent() {
        const activeSlide = slides[currentSlide];
        const elements = activeSlide.querySelectorAll('[data-animation]');
        
        elements.forEach(el => {
            const animation = el.getAttribute('data-animation');
            const delay = el.getAttribute('data-delay') || 0;
            
            el.style.animation = 'none';
            void el.offsetWidth; // Trigger reflow
            el.style.animation = `${animation} 0.6s ease ${delay}s forwards`;
        });
    }
    
    // Следующий слайд
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Предыдущий слайд
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Автопрокрутка
    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, slideDuration);
        startProgressBar();
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
        clearInterval(progressInterval);
    }
    
    // Прогресс бар
    function startProgressBar() {
        progressBar.style.width = '0';
        progressBar.style.transition = 'none';
        void progressBar.offsetWidth; // Trigger reflow
        
        let startTime = Date.now();
        progressBar.style.transition = `width ${slideDuration}ms linear`;
        progressBar.style.width = '100%';
    }
    
    function resetProgressBar() {
        progressBar.style.width = '0';
        void progressBar.offsetWidth; // Trigger reflow
        progressBar.style.transition = `width ${slideDuration}ms linear`;
        progressBar.style.width = '100%';
    }
    
    // Обработчики событий
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoSlide();
        });
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });
    
    // Пауза при наведении
    document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);
    
    // Инициализация
    initSlider();
    
    // Адаптация при изменении размера окна
    window.addEventListener('resize', function() {
        // Перезапускаем анимацию фона для корректного масштабирования
        slides.forEach(slide => {
            if (slide.classList.contains('active')) {
                const bg = slide.querySelector('.slide-bg');
                bg.style.transition = 'none';
                bg.style.transform = 'scale(1)';
                void bg.offsetWidth;
                bg.style.transition = 'transform 8s ease';
                bg.style.transform = 'scale(1.05)';
            }
        });
    });
});

