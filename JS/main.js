//слайдер
let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const text = document.querySelectorAll('.text');

    text.forEach(t => {
        t.style.opacity = '0';
        t.style.transition = 'opacity 0.5s ease';
    });

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    slides.forEach(slide => slide.style.transform = `translateX(${offset}%)`);

    setTimeout(() => {
        text[slideIndex].style.opacity = '1';
    }, 500);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);


//реагирование текста на движения мыши
function moveText(event) {
    const container = event.currentTarget;
    const text = container.querySelector('.text');
    const containerRect = container.getBoundingClientRect();
    const offsetX = (event.clientX - containerRect.left) / containerRect.width - 0.5;
    const offsetY = (event.clientY - containerRect.top) / containerRect.height - 0.5;
    const maxOffset = 20;

    text.style.transform = `translate(${offsetX * maxOffset}px, ${offsetY * maxOffset}px)`;
}


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

window.addEventListener('scroll', () => {
    const container = document.querySelector('.container-bi');
    const distanceToTop = container.getBoundingClientRect().top;

    if (!animated && distanceToTop <= window.innerHeight / 2) {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
        animated = true; // устанавливаем флаг в true, чтобы предотвратить повторное выполнение анимации
    }
});

// 

document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var popRolls = document.querySelector('.pop-rolls');
    var leftCards = document.querySelectorAll('.pop-rolls .left .card');
    var rightCards = document.querySelectorAll('.pop-rolls .right .card');
  
    leftCards.forEach(function(card) {
      if (scrollTop > (card.offsetTop - windowHeight / 2)) {
        card.classList.add('visible');
      }
    });
  
    rightCards.forEach(function(card) {
      if (scrollTop > (card.offsetTop - windowHeight / 2)) {
        card.classList.add('visible');
      }
    });
  });

  
// 

document.addEventListener("DOMContentLoaded", function() {
    var premium = document.getElementById("premium");
    var sake = document.getElementById("sake");
    var rolls = document.getElementById("rolls");
    var setsContainer = document.getElementById("setsContainer");
    var titles = document.querySelectorAll('.title li');

    var premiumContent = document.getElementById("premiumContent").innerHTML;
    var sakeContent = document.getElementById("sakeContent").innerHTML;
    var rollsContent = document.getElementById("rollsContent").innerHTML;

    // Переменная для хранения контента первого сета
    var initialContent = premiumContent;

    // Отображаем контент первого сета при загрузке страницы
    setsContainer.innerHTML = premiumContent;
    premium.classList.add('active'); // Добавляем класс active для первого элемента

    function setActive(listItem) {
        // Удаляем класс active у всех элементов списка
        titles.forEach(function(item) {
            item.classList.remove('active');
        });
        // Добавляем класс active только выбранному элементу списка
        listItem.classList.add('active');
    }

    premium.addEventListener("click", function() {
        setsContainer.classList.add('hide'); // Добавляем класс hide для скрытия
        setTimeout(function() {
            setsContainer.innerHTML = premiumContent;
            setsContainer.classList.remove('hide'); // Убираем класс hide для показа
        }, 300); // После завершения анимации
        setActive(premium); // Вызываем функцию для установки активного элемента
    });

    sake.addEventListener("click", function() {
        setsContainer.classList.add('hide'); // Добавляем класс hide для скрытия
        setTimeout(function() {
            setsContainer.innerHTML = sakeContent;
            setsContainer.classList.remove('hide'); // Убираем класс hide для показа
        }, 300); // После завершения анимации
        setActive(sake); // Вызываем функцию для установки активного элемента
    });

    rolls.addEventListener("click", function() {
        setsContainer.classList.add('hide'); // Добавляем класс hide для скрытия
        setTimeout(function() {
            setsContainer.innerHTML = rollsContent;
            setsContainer.classList.remove('hide'); // Убираем класс hide для показа
        }, 300); // После завершения анимации
        setActive(rolls); // Вызываем функцию для установки активного элемента
    });

    // Возвращаемся к первому сету при повторном клике
    premium.addEventListener("click", function() {
        setsContainer.innerHTML = initialContent;
    });
});

// Ссылка с div
document.addEventListener("DOMContentLoaded", function() {
    const cardDivs = document.querySelectorAll(".categories");
    cardDivs.forEach(function(cardDiv) {
        cardDiv.addEventListener("click", function() {
            const link = cardDiv.dataset.link;
            window.location.href = link;
        });
    });
});