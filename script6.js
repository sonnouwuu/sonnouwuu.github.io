function toggleMenu() {
  const menu = document.querySelector(".nav");
  console.log("Бургер нажат"); // Проверяем, вызывается ли функция
  menu.classList.toggle("active");
}
