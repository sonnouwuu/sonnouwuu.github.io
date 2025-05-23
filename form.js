// 1. Валидация email
        document.getElementById("email").addEventListener("blur", function() {
            let email = this.value;
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) {
                alert("Введите корректный email!");
            }
        });

        // 2. Автозаполнение имени
        document.getElementById("name").addEventListener("focus", function() {
            this.value = "Иванов Иван";
        });

        // 3. Генерация пароля
        document.getElementById("password").addEventListener("click", function() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let password = "";
    
        for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
        }

        this.value = password;
        });

        // 4. Маска ввода телефона
        document.getElementById("phone").addEventListener("input", function() {
        let num = this.value.replace(/\D/g, "").slice(0, 12);
        if (num.startsWith('375')) {
        this.value = num.replace(/^375(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4');
    } else if (num.startsWith('80')) {
        this.value = num.replace(/^80(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4');
    }
});

       document.getElementById("iphone").addEventListener("input", function() {
        let num = this.value.replace(/\D/g, "").slice(0, 12);
        if (num.startsWith('375')) {
        this.value = num.replace(/^375(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4');
    } else if (num.startsWith('80')) {
        this.value = num.replace(/^80(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4');
    }
});


        // 5. Ограничение минимальной даты рождения
        document.getElementById("birthdate").setAttribute("min", "1900-01-01");

        // 6. Изменение фона при фокусе на поле
        let inputs = document.querySelectorAll("input1");
        inputs.forEach(input => {
            input.addEventListener("focus", () => {
                input.style.backgroundColor = "#da3f0c";
            });
            input.addEventListener("blur", () => {
                input.style.backgroundColor = "";
            });
        });

        // 7. Предотвращение отправки формы без заполнения всех полей
        document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Останавливаем стандартное поведение
    
                let inputs = this.querySelectorAll("input");
                let emptyFields = Array.from(inputs).some(input => input.value.trim() === "");
    
            if (emptyFields) {
                    alert("Заполните все поля!");
            } else {
                     alert("Форма успешно отправлена!"); // Вместо перезагрузки можно сделать AJAX-запрос
            }

        });

        // 8. Отображение текущей даты при клике на дату рождения
        document.getElementById("birthdate").addEventListener("click", function() {
            this.value = new Date().toISOString().split("T")[0];
        });

        //9. Скрыть или посмотреть пароль
       document.getElementById("togglePassword").addEventListener("click", function() {
            let passwordInput = document.getElementById("password");
             if (passwordInput.type === "password") {
                 passwordInput.type = "text";
                this.innerText = "🔒 Скрыть";
            } else {
                passwordInput.type = "password";
                this.innerText = "👁 Показать";
             }
        });


//10. Отобрадение имени загрженного файла
document.getElementById('file').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name || 'Файл не выбран';
    document.querySelector('.file-label').textContent = fileName;
});

//11. Анимация 
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});


