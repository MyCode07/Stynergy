const catalogBtns = document.querySelectorAll('.catalog-desktop');
const catalogBox = document.querySelector('.catalog__box');

if (catalogBtns.length) {
    catalogBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('_active')
            catalogBox.classList.toggle('_open')
            document.body.classList.toggle('_noscroll');

        })
    });
}

const catalogBtnMobile = document.querySelector('.catalog-mobile');
const catalogBoxContainer = document.querySelector('.catalog__box-container');

if (catalogBtnMobile) {
    catalogBtnMobile.addEventListener('click', (e) => {
        catalogBtnMobile.classList.toggle('_active')
        catalogBoxContainer.classList.toggle('_open')

    })
}


const catalogItems = document.querySelectorAll('.catalog__box-right nav');

if (catalogItems.length) {
    catalogItems.forEach(item => {
        item.addEventListener('click', (e) => {

            catalogItems.forEach(item => {
                item.classList.remove('_open');
            });

            item.classList.toggle('_open')

        })
    });
}

const catalogCategories = document.querySelectorAll('.catalog__box-left a');

if (catalogCategories.length) {
    catalogCategories.forEach(categori => {
        categori.addEventListener('click', (e) => {
            e.preventDefault();

            catalogCategories.forEach(item => {
                item.classList.remove('_selected');
            });

            categori.classList.add('_selected');

        })
    });
}