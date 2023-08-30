$(document).ready(function () {
    $.scrollUp({
        scrollImg: true,
    });
    $('.idea_slider_container').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: `<i class="fa-solid fa-angle-left prearrow"></i>`,
        nextArrow: `<i class="fa-solid fa-angle-right nextarrow"></i>`,
    });
    new VenoBox({
        selector: '.my-video-links',
    });
    $('.project_complated').counterUp();
});
