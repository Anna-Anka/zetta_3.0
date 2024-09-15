import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.reviews__swiper')) {
    new Swiper('.reviews__swiper', {
        loop: true,
        speed: 800,
        spaceBetween: 15,

        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },

        breakpoints: {
            992: {
                slidesPerGroup: 4,
                slidesPerView: 4,

                navigation: {
                    nextEl: '.reviews__button--next',
                    prevEl: '.reviews__button--prev',
                },

                pagination: {
                    el: null,
                },
            },

            768: {
                slidesPerGroup: 2,
                slidesPerView: 2.2,
                spaceBetween: 15,
            },

            360: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 10,
            },

            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
}
