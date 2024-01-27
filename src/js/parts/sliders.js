import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Scrollbar } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let scrollbar = section.querySelector('.swiper-scrollbar')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('projects')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Scrollbar
                ],
                slidesPerView: 'auto',

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                scrollbar: {
                    el: scrollbar,
                    hide: false,
                },

                breakpoints: {
                    300: {
                        spaceBetween: 20
                    },
                    769: {
                        spaceBetween: 30
                    }
                }
            })
        }
        else if (section.classList.contains('gallery-slider')) {
            const thumbs = new Swiper('.slider-thumbs .swiper', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    300: {
                        spaceBetween: 4,
                        slidesPerView: 'auto',
                    },
                    769: {
                        spaceBetween: 17,
                        slidesPerView: 9,
                    }
                }
            });

            new Swiper('.slider-main .swiper', {
                modules: [
                    Navigation, Pagination, Scrollbar, Thumbs
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
        else if (section.classList.contains('single-car')) {
            const thumbs = new Swiper('.slider-thumbs .swiper', {
                modules: [
                    FreeMode, Pagination
                ],
                freeMode: true,
                watchSlidesProgress: true,
                pagination: {
                    el: pagination,
                    type: 'fraction',
                },
                breakpoints: {
                    300: {
                        spaceBetween: 7,
                        direction: 'horizontal',
                        slidesPerView: 6,
                    },
                    993: {
                        spaceBetween: 12,
                        direction: 'vertival',
                        slidesPerView: 'auto',
                    }
                },
                on: {
                    resize: () => {

                    }
                }
            });

            new Swiper('.slider-main .swiper', {
                modules: [
                    Navigation, Pagination, Scrollbar, Thumbs
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                    type: 'fraction',
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
    })
}