 // Автоматическое переключение слайдов
 setInterval(function () {
    var carousel = new bootstrap.Carousel(document.getElementById('brandCarousel'));
    carousel.next(); // Переключение на следующий слайд
}, 20000);