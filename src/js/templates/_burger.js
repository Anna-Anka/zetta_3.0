import { disableScroll } from '../utils/_disable-scroll.js';
import { enableScroll } from '../utils/_enable-scroll.js';

export const burger = () => {
    const burgerButton = document.querySelector('[data-burger-button]');
    const menuBurgerButton = document.querySelector('.burger-menu .burger-button');
    const burgerButtonText = document.querySelector('[data-burger-button-text]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu-link]');
    const overlay = document.querySelector('[data-menu-overlay]');
    const header = document.querySelector('.header');
    let headerIsTransparent;

    const checkClass = () => {
        if (burgerButton?.classList.contains('burger-button--active')) {
            burgerButton?.setAttribute('aria-expanded', 'true');
            burgerButtonText.innerHTML = 'Закрыть';
            if (header?.classList.contains('header--transparent')) {
                header?.classList.remove('header--transparent');
                headerIsTransparent = true;
            }
            disableScroll();
        } else {
            burgerButton?.setAttribute('aria-expanded', 'false');
            burgerButtonText.innerHTML = 'Меню';
            headerIsTransparent && header.classList.add('header--transparent');
            enableScroll();
        }
    };

    const hideBurger = () => {
        burgerButton.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        header.classList.remove('header--burger');
    }

    burgerButton?.addEventListener('click', () => {
        burgerButton?.classList.toggle('burger-button--active');
        menu?.classList.toggle('burger-menu--active');
        overlay?.classList.toggle('overlay--active');
        header?.classList.toggle('header--burger');
        checkClass();
    });

    menuBurgerButton?.addEventListener('click', () => {
        hideBurger();
        checkClass();
    })

    overlay?.addEventListener('click', () => {
        hideBurger();
        checkClass();
    });

    menuLinks?.forEach((link) => {
        link.addEventListener('click', () => {
            hideBurger();
            enableScroll();
        });
    });
};
