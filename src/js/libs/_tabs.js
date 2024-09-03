import GraphTabs from 'graph-tabs';

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
        this.wrappersPoints = this.tabs.querySelectorAll('.convenience__points');
        this.wrappersPoints.forEach((wrapper) => {
            setTimeout(() => {
                const points = wrapper.querySelectorAll('.convenience__point')
                points[0].classList.add('convenience__point--active')
            })
        })

        this.updateCounter();

        this.prevBtn = this.tabs.querySelector('.tabs__controls-btn--prev');
        this.nextBtn = this.tabs.querySelector('.tabs__controls-btn--next');
        this.prevBtn.disabled = true;
    }

    check() {
        super.check()
    }

    events() {
        super.events();

        this.prevBtn.addEventListener('click', () => this.showPreviousTab());
        this.nextBtn.addEventListener('click', () => this.showNextTab());
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
            const points = container.querySelectorAll('.convenience__point')
            console.log(points)

            points.forEach((point, index) => {
                index === this.currentIndex ? point.classList.add('convenience__point--active') : point.classList.remove('convenience__point--active')
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
