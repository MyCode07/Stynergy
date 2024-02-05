import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');
const headerBottom = document.querySelector('.header__bottom');
const mobileSearchOpenbtn = document.querySelector('.header-search__mobile-open');

const openCatalogMenuBtns = document.querySelectorAll('[data-open-catalog-menu]');
const catalogMenu = document.querySelector('.catalog-menu');


// open menu
if (burger) {
    burger.addEventListener('click', (е) => {
        closeOpenCatalogMenu();
        closeOpenHeaderSearch();

        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        if (headerBottom) {
            headerBottom.classList.toggle('_white')
        }

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}



// clsoe catalog menu if its open
function closeOpenCatalogMenu() {
    if (catalogMenu.classList.contains('_open')) {
        catalogMenu.classList.remove('_open')
        openCatalogMenuBtns.forEach(item => {
            item.classList.remove('_active')
        });
    }
}

// clsoe header search menu if its open
export function closeOpenHeaderSearch() {
    if (mobileSearchOpenbtn && mobileSearchOpenbtn.classList.contains('_active')) {
        mobileSearchOpenbtn.classList.remove('_active')
    }
}




// diler mobile header visible open search button
if (mobileSearchOpenbtn) {
    mobileSearchOpenbtn.addEventListener('click', (e) => {
        mobileSearchOpenbtn.classList.toggle('_active')
        closeOpenCatalogMenu();
    })
}



// close menu and unlock body clicking on menu items
if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any()) {
                if (menu.classList.contains('_open')) {
                    unLockPadding();
                }
                else {
                    lockPadding()
                }
            }

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');
            body.classList.toggle('_noscroll');
        })
    })
}



// menu arrow buttom
const arrow = `<button><svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" >
  <path d="M4.31216 5.30418L7.8722 1.51679C7.9546 1.42919 8 1.31225 8 1.18757C8 1.06288 7.9546 0.945947 7.8722 0.858349L7.61008 0.579434C7.43929 0.397941 7.1617 0.397941 6.99116 0.579434L4.00166 3.7598L1.00884 0.575905C0.926432 0.488307 0.816579 0.439941 0.699442 0.439941C0.582174 0.439941 0.472321 0.488307 0.38985 0.575905L0.127804 0.85482C0.0453982 0.942487 -2.70754e-08 1.05935 -3.25256e-08 1.18404C-3.79757e-08 1.30872 0.0453982 1.42566 0.127804 1.51326L3.69109 5.30418C3.77376 5.39199 3.88413 5.44022 4.00146 5.43994C4.11925 5.44022 4.22956 5.39199 4.31216 5.30418Z" />
</svg></button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                if ((btn.closest('.menu') || btn.closest('.header')) && isMobile.any()) {
                    btn.addEventListener('click', function () {
                        toggleMenu(li)
                    })
                }
                else {
                    btn.addEventListener('click', function () {
                        toggleMenu(li)
                    })
                }
            }

            const btnArrow = li.querySelector('.menu-arrow');
            if (btnArrow && isMobile.any()) {
                btnArrow.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}



// clsoe menu clicking not on document(not menu) area
document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if ((!targetEl.closest('header nav') || (targetEl.closest('header') && targetEl.tagName == 'NAV'))) {
        const activeMenuItems = document.querySelectorAll('nav li[data-open]');
    }

    if (targetEl.classList.contains('menu__close')) {
        burger.classList.remove('_active');
        menu.classList.remove('_open');

        document.body.classList.remove('_noscroll');
        if (!header.classList.contains('_scrolled')) {
            header.classList.remove('_open');
        }

        if (!menu.classList.contains('_open')) {
            unLockPadding();
        }
    }
})