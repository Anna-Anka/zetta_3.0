import tippy from 'tippy.js';

export const showTooltipInProductCard = () => {
    const productCards = document.querySelectorAll('.product-card');
    const tippyElements = [];

    productCards.forEach((productCard) => {
        tippyElements.push(...productCard.querySelectorAll('[data-tippy-content]'));
    });

    tippy(tippyElements, {
        animation: 'shift-toward',
        duration: 400,
        placement: 'auto-end',
        hideOnClick: true,
        content: (reference) => {
            return reference.nextElementSibling;
        },
        appendTo: function () {
            return document.querySelector('[data-products-parent]')
        },
        interactive: true,
        trigger: 'click',
        arrow: false,
        zIndex: 4,
    });
}
