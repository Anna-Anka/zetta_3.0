import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.hero-home__swiper')) {
    new Swiper('.hero-home__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,

        navigation: {
            nextEl: '.hero-home__button--next',
            prevEl: '.hero-home__button--prev',
        },

        pagination: {
            el: '.swiper-pagination-fraction',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return number > 9 ? number : ('0' + number);
            },
            formatFractionTotal: function (number) {
                return number > 9 ? number : ('0' + number);
            },
            renderFraction: function (currentClass, totalClass) {
                return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`
            }
        },
    });
}
