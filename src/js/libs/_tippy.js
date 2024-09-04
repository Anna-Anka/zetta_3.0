import tippy from 'tippy.js';

tippy('[data-tippy-content]', {
    animation: 'shift-toward',
    duration: 100,
    placement: 'auto-end',
    hideOnClick: true,
    content: (reference) => {
        return reference.nextElementSibling;
    },
    appendTo: function () {
        return document.querySelector('[data-tippy-parent]')
    },
    interactive: true,
    trigger: 'click',
    arrow: false,
    zIndex: 4,
});
