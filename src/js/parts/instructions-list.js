const hideenListsOnMobile = document.querySelectorAll('.instructions .hide-on-mobile');
const btn = document.querySelector('.see-more-lists');

if (hideenListsOnMobile.length && btn) {
    btn.addEventListener('click', () => {
        hideenListsOnMobile.forEach(list => {
            list.classList.toggle('_active')

            if (list.classList.contains('_active')) {
                btn.textContent = btn.dataset.textHide
            }
            else {
                btn.textContent = btn.dataset.textShow
            }
        })
    })
}