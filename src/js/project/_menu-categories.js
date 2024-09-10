import {disableScroll} from '../utils/_disable-scroll.js';
import {enableScroll} from '../utils/_enable-scroll.js';
import {throttle} from '../utils/_throttle.js';

export const manageMenuCategories = () => {
    const header = document.querySelector('.header')
    const button = document.querySelector('.header__button--menu')
    const menu = document.querySelector('.menu-categories')

    const headerIsTransparent = header.classList.contains('header--transparent');

    let menuIsOpen = false

    const documentActionOutHandler = (event) => {
        if (menu.classList.contains('menu-categories--active')) {

            if (!header.contains(event.target)) {
                hideMenu();
            }
        }
    }

    const documentKeyHandler = (event) => {
        if (menu.classList.contains('menu-categories--active')) {
            if (event.key === 'Escape') {
                hideMenu();
            }
        }
    }

    const showMenu = () => {
        headerIsTransparent && header.classList.remove('header--transparent');
        menu.classList.add('menu-categories--active');
        button.setAttribute('aria-expanded', true);
        menu.setAttribute('aria-hidden', false);

        document.addEventListener('mouseover', documentActionOutHandler);
        document.addEventListener('click', documentActionOutHandler);
        document.addEventListener('keydown', documentKeyHandler);

        menuIsOpen = true;
        disableScroll();
    }

    const hideMenu = () => {
        if (headerIsTransparent) {
            header.classList.add('header--transparent');
        }
    
        menu.classList.remove('menu-categories--active');
        button.setAttribute('aria-expanded', false);
        menu.setAttribute('aria-hidden', true);

        document.removeEventListener('mouseover', documentActionOutHandler);
        document.removeEventListener('click', documentActionOutHandler);
        document.removeEventListener('keydown', documentKeyHandler);

        menuIsOpen = false;
        enableScroll();
    }

    if (menu && button) {
        button.addEventListener('click', () => {
            menuIsOpen ? hideMenu() : showMenu()
        });

        button.addEventListener('mouseover', () => {
            !menuIsOpen && setTimeout(showMenu, 0)
        });
    }
}