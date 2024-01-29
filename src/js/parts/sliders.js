import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Scrollbar, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let scrollbar = section.querySelector('.swiper-scrollbar')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('hero')) {
            new Swiper(slider, {
                modules: [Pagination, Autoplay],
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            })
        }
        else if (section.classList.contains('partners') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Pagination, Autoplay],
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            })
        }
        else if (section.classList.contains('guarante')) {
            new Swiper(slider, {
                modules: [Pagination, Autoplay, Navigation],
                spaceBetween: 40,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                    },
                    476: {
                        slidesPerView: "auto",
                    },
                }
            })
        }
        else if (section.classList.contains('single-page')) {
            let swiper = new Swiper(".product__slider-thumb", {
                slidesPerView: 4,
                spaceBetween: 8,
                freeMode: true,
                watchSlidesProgress: true,
            });
            new Swiper(".product__slider-swiper", {
                modules: [
                    Navigation, Thumbs
                ],
                navigation: {
                    nextEl: ".next",
                    prevEl: ".prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }

    })
}


