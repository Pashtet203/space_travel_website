$(function () {
    $('.prom__slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prom__slider-btnl',
        nextArrow: '.prom__slider-btnr'
    });

    $('.header__inner-btn').on('click', function () {
        $('.header__navigation').toggleClass('header__navigation--open');
    })
})
