import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input[type="tel"]');
    if (inputs.length) {
        const im = new Inputmask('+7 (999) 999-99-99');
        im.mask(inputs);
    }
});

// if (document.querySelector('input[type="tel"]')) {
//     let inputs = document.querySelectorAll('input[type="tel"]')
//     let im = new Inputmask('+7 (999) 999-99-99')
//     im.mask(inputs)
// }
