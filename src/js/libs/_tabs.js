import GraphTabs from 'graph-tabs';
new GraphTabs('addresses-block');
new GraphTabs('completed-projects-block');

class GraphTabsWithPagination extends GraphTabs {
    constructor(selector, options) {
        super(selector, options);
        this.currentIndex = 0;
        this.totalTabs = this.tabsBtns.length;
    }

    init() {
        super.init();

        this.currentTabElement = this.tabs.querySelector('.tabs__counter-current');
        this.totalTabsElement = this.tabs.querySelector('.tabs__counter-total');

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
            this.switchTabs(this.tabsBtns[this.currentIndex]);
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = false;
        }
    }

    showNextTab() {
        if (this.currentIndex < this.totalTabs - 1) {
            this.currentIndex++;
            this.updateCounter();
            this.switchTabs(this.tabsBtns[this.currentIndex]);
            this.prevBtn.disabled = false;
            this.nextBtn.disabled = this.currentIndex === this.totalTabs - 1;
        }
    }

    updateCounter() {
        const currentTab = this.currentIndex ? this.currentIndex + 1 : 0 + 1
        this.currentTabElement.textContent = currentTab > 9 ? currentTab : `0${currentTab}`
        this.totalTabsElement.textContent = this.tabsBtns.length > 9 ? `/ ${this.tabsBtns.length}` : `/ 0${this.tabsBtns.length}`
    }

    switchTabs(newTab) {
        super.switchTabs(newTab);

        this.currentIndex = Array.prototype.indexOf.call(this.tabsBtns, newTab);
        this.updateCounter();

        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.totalTabs - 1;
    }
}

new GraphTabsWithPagination('convenience-block');
