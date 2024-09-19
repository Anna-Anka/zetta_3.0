import { disableScroll, enableScroll, globalVars } from '../utils/index.js';

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
            burgerButton.focus();
            
            if (header?.classList.contains('header--transparent')) {
                header?.classList.remove('header--transparent');
                headerIsTransparent = true;
            }

            document.addEventListener('keydown', keyHandler);
            disableScroll();
        } else {
            burgerButton?.setAttribute('aria-expanded', 'false');
            burgerButtonText.innerHTML = 'Меню';
            headerIsTransparent && header.classList.add('header--transparent');
            document.removeEventListener('keydown', keyHandler);
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

    const focusCatch = (e) => {
        const nodes = menu.querySelectorAll(globalVars.focusEl);
        const nodesArray = Array.prototype.slice.call(nodes);
        const focusedItemIndex = nodesArray.indexOf(document.activeElement)
        if (e.shiftKey && focusedItemIndex === 0) {
            nodesArray[nodesArray.length - 1].focus();
            e.preventDefault();
        }
        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
            nodesArray[0].focus();
            e.preventDefault();
        }
    }

    const keyHandler = (event) => {
        if (menu.classList.contains('burger-menu--active')) {
            if (event.key === 'Escape') {
                hideBurger();
                checkClass();
            }

            if (event.which) {
                focusCatch(event);
            }
        }
    }
};
