$(document).ready(function () {
    console.log('slider.init');

    $('.slider').append('<div class="slider-navigation"></div>')

    var currentSlide = 0;

    var slideWidth = $('.slider__slide').width();

    var slidesCount = $('.slider__slide').length;

    var containerWidth = slideWidth * slidesCount;

    $('.slider-container').css('width', containerWidth);

    $('.next').click(function () {
        currentSlide++;
        console.log(currentSlide + 1 === slidesCount);
        if (currentSlide + 1 === slidesCount) {
            console.log('last');
        }

        $('.slider-container').animate({
            left: '-=' + slideWidth + 'px'
        }, 1000);


        console.log(currentSlide);
    });

    $('.prev').click(function () {
        $('.slider-container').animate({
            left: '+=' + slideWidth + 'px'
        }, 1000);

        currentSlide--;
        console.log(currentSlide);
    });





});
