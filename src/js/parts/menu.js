import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');


if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        document.body.classList.toggle('_noscroll');
        if (!header.classList.contains('_scrolled')) {
            header.classList.toggle('_open');
        }

        if (menu.classList.contains('_open')) lockPadding();
        else unLockPadding();
    })
}


if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any())
                if (menu.classList.contains('_open')) unLockPadding();
                else lockPadding()

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');
            body.classList.toggle('_noscroll');
        })
    })
}


const arrow = `<button><svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" >
<path d="M2.92578 2.32868L5.16199 -3.0436e-06L5.80078 0.6652L2.92578 3.65909L0.0507819 0.665201L0.690022 -2.65264e-06L2.92578 2.32868Z"/>
</svg></button>`;

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

        if (!menu.classList.contains('_open')) unLockPadding();
    }
})