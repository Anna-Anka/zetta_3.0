import tippy from 'tippy.js';

export const baseTippySettings = {
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
}

export const setTooltip = (attr, settings) => {
    return tippy(attr, settings ? settings : baseTippySettings);
}

if (document.querySelector('[data-tippy-content]')) {
    setTooltip('[data-tippy-content]');
}

