import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.product-about__swiper')) {
    new Swiper('.product-about__swiper', {
        loop: true,
        speed: 800,
        spaceBetween: 10,
        slidesPerGroup: 1,
        slidesPerView: 1,

        navigation: {
            nextEl: '.product-about__arrow--next',
            prevEl: '.product-about__arrow--prev',
        },

        pagination: {
            el: '.product-about__pagination',
            clickable: true,
        },
    });
}
