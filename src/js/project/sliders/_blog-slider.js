import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.blog-block__swiper')) {
    new Swiper('.blog-block__swiper', {
        loop: true,
        speed: 800,

        pagination: {
            el: '.blog-block__pagination',
            clickable: true,
        },
        
        breakpoints: {
            992: {
                slidesPerGroup: 3,
                slidesPerView: 3,

                navigation: {
                    nextEl: '.blog-block__button--next',
                    prevEl: '.blog-block__button--prev',
                },

                pagination: {
                    el: null,
                },
            },
            768: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },

            576: {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },

            0: {
                slidesPerGroup: 1,
                slidesPerView: 1.2,
            },
        },
    });
}
