import { lockPadding, unLockPadding } from "../utils/lockPadding.js";
import { closeOpenHeaderSearch } from "./menu.js";


const openCatalogBtns = document.querySelectorAll('[data-open-catalog-menu]');
const catalogMenu = document.querySelector('.catalog-menu');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');

// open catalog btns
if (openCatalogBtns.length) {
    openCatalogBtns.forEach(btn => {
        const label = btn.querySelector('label');

        btn.addEventListener('click', (e) => {
            if (!btn.closest('.menu')) {
                closeOpenMenu();
                closeOpenHeaderSearch();
            }

            btn.classList.toggle('_active')
            catalogMenu.classList.toggle('_open')

            if (btn.classList.contains('_active')) {
                lockPadding();

                if (btn.classList.contains('open-catalog-btn')) {
                    label.textContent = label.dataset.textHide
                }
            }
            else {
                unLockPadding();

                if (btn.classList.contains('open-catalog-btn')) {
                    label.textContent = label.dataset.textShow
                }
            }
        })
    });
}


// clsoe catalog menu if its open
function closeOpenMenu() {
    if (menu.classList.contains('_open')) {
        menu.classList.remove('_open')
        burger.classList.remove('_active')
    }
}



// catalog sidebar
const catalogCategories = document.querySelectorAll('[data-catalog-item]');
const catalogCategoriesMenus = document.querySelectorAll('[data-catalog-menu]');
if (catalogCategories.length) {
    catalogCategories.forEach((cat) => {
        const id = cat.dataset.catalogItem;

        cat.addEventListener('click', (e) => {
            e.preventDefault();

            catalogCategories.forEach(item => {
                const currentId = item.dataset.catalogItem;

                if (currentId == id) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });

            catalogCategoriesMenus.forEach(item => {
                const currentId = item.dataset.catalogMenu;

                if (currentId == id) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });
        })
    });
}



// replace diller side catalog menu on mobile
const replaceCatalogMenu = () => {
    const dillerCatagMenu = document.querySelector('#catalog-menu');

    if (!dillerCatagMenu) return;

    let lockPosition = true;

    const width = 768;
    const newPosition = document.querySelector('.menu .open-catalog-btn');
    const oldPosition = document.body;

    const newPositionInsertType = 'afterend';
    const oldPositionInsertType = 'afterbegin';


    function replace() {
        if (window.innerWidth <= width) {
            if (lockPosition == true)
                newPosition.insertAdjacentElement(newPositionInsertType, dillerCatagMenu)
            lockPosition = false
        }
        else {
            if (lockPosition == false)
                oldPosition.insertAdjacentElement(oldPositionInsertType, dillerCatagMenu)
            lockPosition = true
        }

    }

    replace()
    window.addEventListener('resize', replace)
}

replaceCatalogMenu();


// shop catalog
const shopCatalogButtons = document.querySelectorAll('.catalog-menu__column button');
const shopCatalogNav = document.querySelectorAll('.catalog-menu__column nav');
if (shopCatalogButtons.length) {
    shopCatalogButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let nav = e.target.closest('nav');
            nav.classList.toggle('_active')

            if (nav.closest('.catalog-menu__column').querySelector('._active')) {
                shopCatalogNav.forEach(item => {
                    item.classList.remove('_active')
                });
                nav.classList.toggle('_active')
            }
            else {
            }
        })
    });
}


// catalog tags
const tagsOpenBtn = document.querySelector('.catalog-tags ._btn');
const tagsList = document.querySelector('.catalog-tags ul');
if (tagsOpenBtn && tagsList) {
    const span = tagsOpenBtn.querySelector('span');

    tagsOpenBtn.addEventListener('click', () => {
        tagsList.classList.toggle('_open')
        tagsOpenBtn.classList.toggle('_active')

        if (tagsOpenBtn.classList.contains('_active')) {
            span.textContent = span.dataset.textHide
        }
        else {
            span.textContent = span.dataset.textShow
        }
    })
}