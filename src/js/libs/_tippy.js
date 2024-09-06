import tippy from 'tippy.js';
import {throttle, getWindowWidth} from '../utils/index.js'

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

if (document.querySelector('[data-interactive-tippy-content]')) {
    const checkWidth = () => {
        const width = getWindowWidth();
        const instances = setTooltip('[data-interactive-tippy-content]', baseTippySettings)

        if (width < 768) {
            instances.forEach((instance) => {
                instance.disable();
            })
        }
    }

    checkWidth();

    const checkWidthThrottle = throttle(checkWidth)

    document.addEventListener('resize', checkWidthThrottle)
}

if (document.querySelector('[data-tippy-content]')) {
    setTooltip('[data-tippy-content]');
}

