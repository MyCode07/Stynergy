import { lockPadding } from '../utils/lockPadding.js';
import { validateForm } from './forms.js';

document.addEventListener('DOMContentLoaded', function (e) {
    const forms = document.querySelectorAll('.wpcf7-form');
    if (forms) {
        forms.forEach(form => {
            const ulrField = form.querySelector('input[name="page-url"]');
            const singleProduct = form.querySelector('input[name="single-product"]');

            if (ulrField) {
                ulrField.value = window.location.href;
            }

            if (singleProduct) {
                singleProduct.value = document.querySelector('h1').textContent;
            }

            form.addEventListener('wpcf7submit', function (event) {
                let error = validateForm(form);
                console.log('error ' + error);
            }, false);

            form.addEventListener('wpcf7mailsent', function (event) {
                const activePopup = document.querySelector('.popup._open');
                if (activePopup) {
                    activePopup.classList.remove('_open');
                }

                submitEmail(document.querySelector('.popup#thanks'));


                ymGoal(form.querySelector('[data-ymgoal]'))
            }, false);

            form.addEventListener('wpcf7mailfailed', function (event) {
                submitEmail(document.querySelector('.popup#erorr'));
            }, false);
        })
    }
})

function ymGoal(elem) {
    console.log(elem);
    if (!elem) return;
    ym(elem.dataset.ymgoal, 'reachGoal', elem.textContent)
}
// ym(100002, 'reachGoal', 'zakaz')



function submitEmail(popup) {
    popup.classList.add('_open');
    lockPadding()
}