import { throttle } from '../utils/_throttle.js'

export const changeColorSideMenu = () => {
    const sideMenu = document.querySelector('.side-menu');
    const hero = document.querySelector('.hero-home');
    const menu = document.querySelector('.menu-categories');
    const burger = document.querySelector('.burger-menu');

    if (sideMenu && hero) {
        const blocks = sideMenu.querySelectorAll('[data-color]');
        
        const changeClasses = () => {
            const heroHeight = hero.offsetHeight;
            if (!menu?.classList.contains('menu-categories--active') &&             !burger?.classList.contains('burger-menu--active')) {
                if (blocks.length) {
                    const scrollDistance = window.scrollY;
                    blocks.forEach((block) => {
                        const topPosition = block.offsetTop

                        // scrollDistance - сколько проскролили

                        console.log(topPosition)
                        console.log(heroHeight)
                        console.log(scrollDistance)

                        if (topPosition + 120 > heroHeight && scrollDistance + topPosition < heroHeight) {
                            block.setAttribute('data-color', 'light')
                        } else {
                            if (scrollDistance > heroHeight - (topPosition + 120) && scrollDistance !== 0) {
                                block.setAttribute('data-color', 'dark')
                                console.log('a')
                            } else {
                                block.setAttribute('data-color', 'light')
                                console.log('b')
                            }
                        }
                    })
                }
            }
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
        window.addEventListener('resize', changeClassesTrottle);
    }
}