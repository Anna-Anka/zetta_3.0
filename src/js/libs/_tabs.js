import GraphTabs from 'graph-tabs';
import { throttle } from '../utils/_throttle.js'

if (document.querySelector('[data-tabs="addresses-block"]')) {
    new GraphTabs('addresses-block');
}

if (document.querySelector('[data-tabs="completed-projects-block"]')) {
    new GraphTabs('completed-projects-block');
}

class GraphTabsWithPagination extends GraphTabs {
    constructor(selector, options) {
        super(selector, options);
        this.currentIndex = 0;
        this.totalTabs = this.tabsBtns.length;
    }

    init() {
        super.init();

        this.counterTabCurrent = this.tabs.querySelector('.tabs__counter-current');
        this.counterTabTotal = this.tabs.querySelector('.tabs__counter-total');
        this.panels = this.tabs.querySelectorAll('.tabs__panel');
        this.wrappersPoints = this.tabs.querySelectorAll('.tabs__points');
        this.prevBtn = this.tabs.querySelector('.tabs__controls-btn--prev');
        this.nextBtn = this.tabs.querySelector('.tabs__controls-btn--next');
        this.prevBtn.disabled = true;

        this.initPoints();

        this.addPointActive();

        this.updateCounter();

        this.arrangeConveniencePoints()
    }

    check() {
        super.check()
    }

    events() {
        super.events();

        this.prevBtn.addEventListener('click', () => this.showPreviousTab());
        this.nextBtn.addEventListener('click', () => this.showNextTab());
    }

    initPoints() {
        this.panels.forEach((panel) => {
            const pointsWrapper = panel.querySelector('.tabs__points');

            for (let i = 0; i < this.panels.length; i++) {
                pointsWrapper.append(this.createPoint());
            };
        });
    }

    addPointActive() {
        this.wrappersPoints.forEach((wrapper) => {
            const points = wrapper.querySelectorAll('.tabs__point');
            points[0].classList.add('tabs__point--active');
        });
    }

    createPoint() {
        const fragment = document.createDocumentFragment();
        const point = document.createElement('span');
        point.classList.add('tabs__point');
        fragment.appendChild(point);
        return fragment;
    }

    arrangeConveniencePoints() {
        if (this.wrappersPoints?.length > 0 && this.wrappersPoints[0].querySelector('.tabs__point')) {
            this.updateCirclesPosition();

            const throttledUpdate = throttle(this.updateCirclesPosition);

            window.addEventListener('resize', throttledUpdate);
        }
    };

    updateCirclesPosition() {
        if (this.wrappersPoints?.length > 0) {
                    this.wrappersPoints.forEach((container) => {
            const circles = container.querySelectorAll('.tabs__point');
            const radius = this.wrappersPoints[0].offsetWidth / 2;
            const rotation = 360 / circles.length;

            circles.forEach((circle, i) => {
                const position = `rotate(${i * rotation}deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
                circle.style.transform = position;
            });
        });
        }
    }

    showPreviousTab() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCounter();
            this.updatePoints();
            this.switchTabs(this.tabsBtns[this.currentIndex]);
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = false;
        }
    }

    showNextTab() {
        if (this.currentIndex < this.totalTabs - 1) {
            this.currentIndex++;
            this.updateCounter();
            this.updatePoints();
            this.switchTabs(this.tabsBtns[this.currentIndex]);
            this.prevBtn.disabled = false;
            this.nextBtn.disabled = this.currentIndex === this.totalTabs - 1;
        }
    }

    updateCounter() {
        const currentTab = this.currentIndex ? this.currentIndex + 1 : 0 + 1
        this.counterTabCurrent.textContent = currentTab > 9 ? currentTab : `0${currentTab}`
        this.counterTabTotal.textContent = this.tabsBtns.length > 9 ? `/ ${this.tabsBtns.length}` : `/ 0${this.tabsBtns.length}`
    }

    updatePoints() {
        this.wrappersPoints.forEach((container) => {
            const points = container.querySelectorAll('.tabs__point')

            points.forEach((point, index) => {
                index === this.currentIndex ? point.classList.add('tabs__point--active') : point.classList.remove('tabs__point--active')
            })
        })
    }

    switchTabs(newTab) {
        super.switchTabs(newTab);

        this.currentIndex = Array.prototype.indexOf.call(this.tabsBtns, newTab);
        this.updateCounter();
        this.updatePoints();

        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.totalTabs - 1;
    }
}

if (document.querySelector('[data-tabs="convenience-block"]')) {
    new GraphTabsWithPagination('convenience-block');
}
