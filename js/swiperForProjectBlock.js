const swiper5 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    grid: {
        rows: 1,
        fill: "row   "
    },
    spaceBetween: 20,

    navigation: {
        nextEl: ".project__button-next",
        prevEl: ".project__button-prev"
    },
    loop: true,
    breakpoints: {
        441: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        1025: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },



}); {

}