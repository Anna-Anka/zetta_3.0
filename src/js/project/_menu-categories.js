import { disableScroll, enableScroll, globalVars } from '../utils/index.js';

export const manageMenuCategories = () => {
    const header = document.querySelector('.header')
    const button = document.querySelector('.header__button--menu')
    const menu = document.querySelector('.menu-categories')

    const headerIsTransparent = header?.classList.contains('header--transparent');

    let menuIsOpen = false;
    let previousActiveElement = false;

    const focusTrap = () => {
        const nodes = menu.querySelectorAll(globalVars.focusEl);
        if (menuIsOpen) {
            if (nodes.length) nodes[0].focus();
        } else {
            previousActiveElement.focus();
        }
    }

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

            if (event.which) {
                focusCatch(event);
            }
        }
    }

    const showMenu = () => {
        previousActiveElement = document.activeElement;

        headerIsTransparent && header.classList.remove('header--transparent');
        menu.classList.add('menu-categories--active');
        button.setAttribute('aria-expanded', true);
        menu.setAttribute('aria-hidden', false);

        document.addEventListener('mouseover', documentActionOutHandler);
        document.addEventListener('click', documentActionOutHandler);
        document.addEventListener('keydown', documentKeyHandler);

        const nodes = menu.querySelectorAll(globalVars.focusEl);
        const nodesArray = Array.prototype.slice.call(nodes);
        nodesArray[0].focus();

        menuIsOpen = true;
        disableScroll();
        focusTrap();
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
        focusTrap();
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