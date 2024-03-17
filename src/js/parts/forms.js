"use strict"

import { lockPadding } from "../utils/lockPadding.js";

const url = adminajaxurl.ajaxurl;
const sentPopup = document.querySelector('.popup#thanks');
const errorPopup = document.querySelector('.popup#error');

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form')

    if (forms.length) {
        forms.forEach(form => {
            if (form.closest('.form') && (form.closest('.section') || form.closest('.popup'))) {
                let titleElem = '';

                if (form.closest('.section')) {
                    titleElem = form.closest('.section').querySelector('n2');

                    if (!titleElem) {
                        titleElem = form.closest('.section').querySelector('h3');
                    }
                }
                else {
                    titleElem = form.closest('.popup').querySelector('h4');
                }

                form.addEventListener('submit', async function (e) {
                    e.preventDefault();

                    let error = validateForm(form)

                    let formData = new FormData(form);

                    if (formFile && formFile.files[0]) {
                        formData.append('file', formFile.files[0]);
                    }

                    formData.append('title', titleElem.textContent);
                    formData.append('page_url', window.location.href);
                    formData.append('action', 'ajax_forms');

                    if (error === 0) {
                        form.classList.add('_sending');

                        let response = await fetch(url, {
                            method: 'POST',
                            body: formData
                        });

                        let result = await response.json();

                        if (response.ok) {
                            console.log(result);
                            sentMessage(form)
                            form.reset();
                            resetForm();
                            form.classList.remove('_sending');
                        }
                        else {
                            console.log(result);
                            failMessage(form)
                            resetForm();
                            form.classList.remove('_sending');
                        }
                    }
                    else {
                        fillAllFields(form)
                        resetForm();
                        form.classList.remove('_sending');
                    }
                })

                checkCheckBoxes(form)
            }
        })
    }

    function validateForm(form) {
        let error = 0;
        const formReq = [...form.querySelectorAll('[data-required] input')].concat([...form.querySelectorAll('[data-required] textarea')])

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i]

            formRemoveError(input);
            validateInput()

            input.addEventListener('input', function () {
                formRemoveError(input);
                validateInput()
            })

            function validateInput() {
                if (input.getAttribute('type') === 'email') {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                }
                else {
                    if (input.getAttribute('name') === 'phone') {
                        if (/[_]/.test(input.value) || input.value.length < 18) {
                            formAddError(input);
                            error++;
                        }

                    }
                    else {
                        if (input.value.length < 2) {
                            formAddError(input);
                            error++;
                        }
                    }
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.closest('.form__item').classList.add('_error');
    }

    function formRemoveError(input) {
        input.closest('.form__item').classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function sentMessage(form) {
        const activePopup = document.querySelector('.popup._open');
        if (activePopup) {
            activePopup.classList.remove('_open')
        }

        sentPopup.classList.add('_open')
        lockPadding();
    }

    function failMessage(form) {
        errorPopup.classList.add('_open')
        lockPadding();
    }

    function fillAllFields(form) {
        console.log('Запольните все поля');
    }

    function resetForm() {
        if (formFile) {
            const fileElem = formFile.closest('.file')
            const fileNameElem = fileElem.querySelector('.filename span');
            const deleteFileElem = fileElem.querySelector('._delete-file');

            fileNameElem.innerHTML = 'Прикрепить файл';
            formFile.value = '';

            deleteFileElem.style.display = 'none';
        }
    }

    const allowedFileTypes = [
        'image/x-png',
        'image/png',
        'image/avif',
        'image/webp',
        'image/png',
        'image/jpg',
        'image/jpeg',
        'text/plain',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        '.csv',
        'text/csv',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/pdf',
        'application/vnd.ms-powerpoint',
    ];

    const formFile = document.querySelector('input[name="file"]');

    if (formFile) {
        const fileElem = formFile.closest('.file')
        const fileNameElem = fileElem.querySelector('.filename span');
        const deleteFileElem = fileElem.querySelector('._delete-file');

        formFile.addEventListener('change', () => {
            uploadFile(formFile.files[0]);
        });

        deleteFileElem.addEventListener('click', () => {
            fileNameElem.innerHTML = 'Прикрепить файл';
            formFile.value = '';

            deleteFileElem.style.display = 'none';
        })

        function uploadFile(file) {
            console.log(file.type);

            if (!allowedFileTypes.includes(file.type)) {
                alert('Разрешены только текстовые документы и изображения.');
                fileNameElem.innerHTML = 'Прикрепить файл';
                formFile.value = '';

                deleteFileElem.style.display = 'none';
                return;
            }
            if (file.size > 20 * 1024 * 1024) {
                alert('Файл должен быть менее 20 МБ.');

                deleteFileElem.style.display = 'none';
                return;
            }

            deleteFileElem.style.display = 'block';

            var reader = new FileReader();

            reader.onload = function (e) {
                fileNameElem.innerHTML = file.name;
            };

            reader.onerror = function (e) {
                alert('Ошибка');
            };

            reader.readAsDataURL(file);
        }
    }


});

function checkCheckBoxes(form) {
    const checkBoxContainers = form.querySelectorAll('[data-checkbox-container]')
    if (checkBoxContainers.length) {
        checkBoxContainers.forEach(container => {
            const cehckboxes = container.querySelectorAll('input[type="checkbox"]')

            if (cehckboxes.length) {
                cehckboxes.forEach(checkbox => {
                    checkbox.addEventListener('input', () => {
                        cehckboxes.forEach(item => {
                            if (item != checkbox) {
                                item.checked = false
                            }
                        })
                    })
                })
            }
        })
    }
}