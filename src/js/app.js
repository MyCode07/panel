import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";
import { animateAction, animateStaggerAction } from "./parts/animations.js";

import "./parts/input-hover.js";
import "./parts/popup.js";
import "./parts/menu.js";

animateAction();
animateStaggerAction();
replaceDomElements();

maskInputs('+7 (999) 999-99-99', '[name="phone"]')

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});


document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})