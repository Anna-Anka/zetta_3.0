import vars from '../vars.js';

export const enableScroll = () => {
    const fixBlocks = document.querySelectorAll('.fix-block');
    if (fixBlocks) {
        fixBlocks.forEach((el) => {
            const fixBlock = el;
            fixBlock.style.paddingRight = '0';
        });
    }
    const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
    vars.bodyEl.style.paddingRight = '0';

    vars.bodyEl.style.top = 'auto';
    vars.bodyEl.classList.remove('disable-scroll');
    window.scroll({
        top: pagePosition,
        left: 0,
    });
    vars.bodyEl.removeAttribute('data-position');
};
