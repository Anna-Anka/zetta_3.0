import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.product-projects__swiper')) {
    new Swiper('.product-projects__swiper', {
        loop: true,
        speed: 800,
        spaceBetween: 20,

        pagination: {
            el: '.product-projects__pagination',
            clickable: true,
        },

        breakpoints: {
            992: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 20,

                pagination: {
                    el: '.product-projects__fraction',
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
                    nextEl: '.product-projects__button--next',
                    prevEl: '.product-projects__button--prev',
                },
            }, 
            768: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
}
