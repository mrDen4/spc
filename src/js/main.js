$(document).ready(function () {
    $('.content__slider').slick({
        prevArrow: $('.btns__btn--l'),
        nextArrow: $('.btns__btn--r')
    });

    $('.hero .hero__btn').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.bg, .popup .popup__exit').on('click', function () {
        $('.popup').removeClass('popup--active');
        $('.bg').removeClass('bg--active');
    });
});