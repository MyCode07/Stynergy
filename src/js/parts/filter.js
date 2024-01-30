import { isMobile } from '../utils/isMobile.js';
const filters = document.querySelectorAll('.catalog__filters-item');

if (filters.length && isMobile.any()) {

    filters.forEach(item => {
        const btn = item.querySelector('button');
        if (btn) {
            btn.addEventListener('click', (e) => {
                toggleTarget(item, filters, '_active');
            })
        }
    });
}

function toggleTarget(target, targets, classname) {
    if (!target.classList.contains(classname)) {
        targets.forEach(item => {
            if (item.classList.contains(classname)) item.classList.remove(classname)
        })

        target.classList.add(classname)
    }
    else {
        target.classList.remove(classname)
    }
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('.catalog__filters-item') && document.querySelector('.catalog__filters-item._active')) {
        const filter = document.querySelector('.catalog__filters-item._active');
        filter.classList.remove('_active')
    }

})


const filterOptons = document.querySelectorAll('.catalog__filters-item ul li');

filterOptons.forEach(option => {
    option.addEventListener('click', (e) => {
        const target = e.target

        filterOptons.forEach(element => {
            if (target.closest('.catalog__filters-item').querySelector('ul li ._selected')) {
                element.classList.remove('_selected')
            }
            else {
                option.classList.add('_selected')
            }
        });

        const filter = target.closest('.catalog__filters-item').querySelector('button span');
        filter.textContent = e.target.textContent

    })
});

const filterOpenBtn = document.querySelector('.filter-btn');
const filterBox = document.querySelector('.filter');

filterOpenBtn.addEventListener('click', (e) => {
    filterBox.classList.toggle('_active')
    filterOpenBtn.classList.toggle('_active')

})