document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const modals = document.querySelectorAll(".modal");
    const closes = document.querySelectorAll(".close");

    // Открыть модальное окно при клике на карточку
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            const modalId = card.dataset.link; // Получение значения атрибута data-link
            const modal = document.getElementById(modalId); // Получение элемента по ID модального окна
            modal.style.display = "block"; // Открытие модального окна
        });
    });

    // Закрыть модальное окно при клике на крестик
    closes.forEach(function(close) {
        close.addEventListener("click", function() {
            const modalId = close.dataset.link; // Получение значения атрибута data-link
            const modal = document.getElementById(modalId); // Получение элемента по ID модального окна
            modal.style.display = "none"; // Закрытие модального окна
        });
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});

//полявление полоски под текстрм в меню навигации
document.querySelectorAll('.line-container').forEach(container => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.line-container').forEach(c => c.classList.remove('clicked'));
        container.classList.add('clicked');
    });
});

//появление 2 меню навигации
const originalNavbar = document.getElementById('menu');
const newNavbar = document.getElementById('nav');

function handleScroll() {
    if (window.scrollY > 100) {
        originalNavbar.classList.add('hidden-navbar');
        newNavbar.classList.remove('hidden-navbar');
    } else {
        originalNavbar.classList.remove('hidden-navbar');
        newNavbar.classList.add('hidden-navbar');
    }
}

//появление текста снизу вверх
window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', handleScroll);

let animated = false; // флаг, указывающий, была ли анимация уже запущена

