let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 2,
    grid: {
        rows: 2,
        fill: "row"
    },
    spaceBetween: 20,
    pagination: {
        el: ".test-section .gallery__swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 1
            },
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            grid: {
                rows: 2
            },

        },
        777: {
            slidesPerView: 2,
            grid: {
                rows: 2
            },
            spaceBetween: 34
        },

        1125: {
            slidesPerView: 3,
            grid: {
                rows: 2
            },
            spaceBetween: 50
        }
    },

    a11y: false
});