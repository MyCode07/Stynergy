import { lockPadding, unLockPadding } from "../utils/lockPadding.js";



const openCatalogBtns = document.querySelectorAll('[data-open-catalog-menu]');
const catalogMenu = document.querySelector('.catalog-menu');

if (openCatalogBtns.length) {
    openCatalogBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('_active')
            catalogMenu.classList.toggle('_open')

            if (btn.classList.contains('_active')) {
                lockPadding();

            }
            else {
                unLockPadding();
            }
        })
    });
}



// const catalogCategories = document.querySelectorAll('.single-page [data-catalog-item]');
// const catalogCategoriesMenus = document.querySelectorAll('.single-page [data-catalog-menu]');

// if (catalogCategories.length) {
//     catalogCategories.forEach((cat) => {
//         const id = cat.dataset.catalogItem;

//         cat.addEventListener('click', (e) => {
//             e.preventDefault();

//             catalogCategories.forEach(item => {
//                 const currentId = item.dataset.catalogItem;

//                 if (currentId == id) {
//                     item.classList.add('_active');
//                 }
//                 else {
//                     item.classList.remove('_active');
//                 }
//             });

//             catalogCategoriesMenus.forEach(item => {
//                 const currentId = item.dataset.catalogMenu;

//                 if (currentId == id) {
//                     item.classList.add('_active');
//                 }
//                 else {
//                     item.classList.remove('_active');
//                 }
//             });
//         })
//     });
// }

// const replaceCatalogMenu = () => {
//     if (!catalogMenu) return;

//     let lockPosition = true;

//     const width = 768;
//     const newPosition = document.querySelector('.menu .open-catalog-btn');
//     const oldPosition = document.body;

//     const newPositionInsertType = 'afterend';
//     const oldPositionInsertType = 'afterbegin';


//     function replace() {
//         if (window.innerWidth <= width) {
//             if (lockPosition == true)
//                 newPosition.insertAdjacentElement(newPositionInsertType, catalogMenu)
//             lockPosition = false
//         }
//         else {
//             if (lockPosition == false)
//                 oldPosition.insertAdjacentElement(oldPositionInsertType, catalogMenu)
//             lockPosition = true
//         }

//     }

//     replace()
//     window.addEventListener('resize', replace)
// }

// replaceCatalogMenu();

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