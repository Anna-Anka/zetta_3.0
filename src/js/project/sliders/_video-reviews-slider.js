import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.video-reviews__swiper')) {
    new Swiper('.video-reviews__swiper', {
        loop: true,
        speed: 800,
        spaceBetween: 10,
        slidesPerGroup: 1,
        slidesPerView: 1,

        breakpoints: {
            992: {
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

                navigation: {
                    nextEl: '.video-reviews__button--next',
                    prevEl: '.video-reviews__button--prev',
                },
            },
            0: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        },
    });
}
