const formHoverAll = document.querySelectorAll('.form-hover');

if (formHoverAll.length) {
    formHoverAll.forEach(form => {
        const inputItems = [...form.querySelectorAll('input ')].concat([...form.querySelectorAll('textarea')])
        if (inputItems.length) {
            inputItems.forEach(input => {
                if (input.closest('.form__item')) {
                    input.addEventListener('input', () => {
                        if (input.value != '') input.classList.add('_active')
                        else input.classList.remove('_active')
                    })
                }
            })
        }
    });
}
