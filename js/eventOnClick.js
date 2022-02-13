const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 3,
    spaceBetween: 20,

    grid: {
        rows: 1,
        fill: "row"
    },

    pagination: {
        el: '.js-event-pagination',
        type: 'fraction'
    },

    navigation: {
        nextEl: ".events__button-next",
        prevEl: ".events__button-prev",

    },
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 34
        },
        971: {
            slidesPerView: 2,
            spaceBetween: 27
        },
        1281: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },

    a11y: false

});