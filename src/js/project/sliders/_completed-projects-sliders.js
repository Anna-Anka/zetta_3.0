import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation]);

if (document.querySelector('.completed-projects__swiper')) {
    const allSwipers = document.querySelectorAll('.completed-projects__swiper')
    allSwipers.forEach(swiper => {
        new Swiper(swiper, {
            speed: 800,
            spaceBetween: 40,
            slidesPerGroup: 2,
            slidesPerView: 2,

            navigation: {
                nextEl: swiper.querySelector('.completed-projects__button--next'),
                prevEl: swiper.querySelector('.completed-projects__button--prev'),
            },

            breakpoints: {
                768: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,

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
                },

                560: {
                    slidesPerGroup: 1,
                    slidesPerView: 1.2,
                    spaceBetween: 40,
                },

                0: {
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                    spaceBetween: 15,

                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
            },
        });
    })
}