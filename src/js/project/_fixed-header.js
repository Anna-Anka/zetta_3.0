import {throttle} from '../utils/_throttle.js'

export const fixedHeader = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero-home');
    const menu = document.querySelector('.menu-categories');
    const burger = document.querySelector('.burger-menu');

    if (hero && header) {
        const heroHeight = hero.offsetHeight;

        const changeClasses = () => {
            const scrollDistance = window.scrollY;

            if (!menu?.classList.contains('menu-categories--active') && !burger?.classList.contains('burger-menu--active')) {
                if (scrollDistance > heroHeight) {
                    header.classList.add('header--fixed');
                    header.classList.remove('header--transparent');
                } else {
                    header.classList.remove('header--fixed');
                    header.classList.add('header--transparent');
                }
            }
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
    };
}