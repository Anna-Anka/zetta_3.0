import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.other-solutions__swiper')) {
    new Swiper('.other-solutions__swiper', {
        loop: true,
        speed: 800,
        spaceBetween: 10,
        slidesPerGroup: 1,
        slidesPerView: 1,

        navigation: {
            nextEl: '.other-solutions__button--next',
            prevEl: '.other-solutions__button--prev',
        },

        breakpoints: {
            768: {
                pagination: {
                    el: '.other-solutions__fraction',
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
