document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("playButton");
    let overlay = document.getElementById("overlay");
    let video = document.getElementById("video");

    // Скрываем кнопку и оверлей, если видео играет
    video.addEventListener("play", function () {
        overlay.classList.add("hidden");
    });

    // Показываем кнопку снова, если видео ставят на паузу
    video.addEventListener("pause", function () {
        overlay.classList.remove("hidden");
    });

    // При клике на кнопку видео запускается и скрывается оверлей
    button.addEventListener("click", function () {
        video.play();
        overlay.classList.add("hidden");
    });
});
