import { isMobile } from "../utils/isMobile.js";
import { lockPadding, unLockPadding } from "../utils/lockPadding.js";


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.hasAttribute('data-open-popup')) {
        e.preventDefault();
        const id = targetEl.getAttribute('data-id');
        const popup = document.querySelector(`.popup#${id}`);

        if (popup) {
            popup.classList.add('_open')

            if (!isMobile.any()) {
                lockPadding();
            }
        }
    }

    if (targetEl.classList.contains('popup')) {
        targetEl.classList.remove('_open')

        if (!isMobile.any()) {
            unLockPadding();
        }
    }

    if (targetEl.classList.contains('popup__close') || targetEl.hasAttribute('data-close-popup')) {
        const popup = targetEl.closest('.popup');
        popup.classList.remove('_open');

        if (!isMobile.any()) {
            unLockPadding();
        }
    }

    if (targetEl.classList.contains('phone-popup__open')) {
        targetEl.closest('.phone-popup').classList.toggle('_open');
    }

    if (!targetEl.closest('.phone-popup') && !targetEl.classList.contains('phone-popup') && document.querySelector('.phone-popup._open')) {
        document.querySelector('.phone-popup._open').classList.remove('_open');
    }

})