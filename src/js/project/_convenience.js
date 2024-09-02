import { throttle } from '../utils/_throttle.js'

export const createConveniencePoints = () => {
    if (document.querySelector('[data-tabs="convenience-block"]')) {
        const tabs = document.querySelector('[data-tabs="convenience-block"]')
        const panels = tabs.querySelectorAll('.tabs__panel')

        const createPoint = () => {
            const fragment = document.createDocumentFragment();
            const point = document.createElement('span');
            point.classList.add('convenience__point');
            fragment.appendChild(point);
            return fragment;
        }

        panels.forEach((panel) => {
            const pointsWrapper = panel.querySelector('.convenience__points');

            for (let i = 0; i < panels.length; i++) {
                pointsWrapper.append(createPoint());
            }
        })
    }
}

export const arrangeConveniencePoints = () => {
    const containers = document.querySelectorAll('.convenience__points');

    const updateCirclesPosition = () => {
        containers.forEach((container) => {
            const circles = container.querySelectorAll('.convenience__point');
            const radius = containers[0].offsetWidth / 2;
            const rotation = 360 / circles.length;

            circles.forEach((circle, i) => {
                const position = `rotate(${i * rotation}deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
                circle.style.transform = position;
            });
        });
    };

    if (containers.length > 0 && containers[0].querySelector('.convenience__point')) {
        updateCirclesPosition();

        const throttledUpdate = throttle(updateCirclesPosition);

        window.addEventListener('resize', throttledUpdate);
    }
};

// export const changeActiveConveniencePoint = () => {
//     if (document.querySelector('.convenience__point')) {
//         const tabs = document.querySelector('[data-tabs="convenience-block"]')
//         const panels = tabs.querySelectorAll('.tabs__panel')
//         panels.forEach((panel, index) => {
//             const points = panel.querySelectorAll('.convenience__point')
//             if (panel.contains.classList('tabs__panel--active')) {

//             } else {

//             }
//         })
//     }
// }