import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
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
        else if (slider.closest('.catalog-content__slider')) {
            const thumbs = new Swiper('.swiper[thumbsSlider]', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 4,
                spaceBetween: 8,
            });

            new Swiper('.catalog-content__slider-main .swiper', {
                modules: [
                    Navigation, Thumbs
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
        else if (slider.closest('.text-box__slider')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
            })
        }
        else if (slider.closest('.location-slider')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 11,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
            })
        }
        else if (slider.closest('.shop-slider')) {
            const pagination = slider.closest('.shop-slider').querySelector('.pagination');
            new Swiper(slider, {
                modules: [Pagination],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                },

            })
        }
        else if (slider.closest('.offer-slider')) {
            const pagination = slider.closest('.offer-slider').querySelector('.pagination');

            new Swiper(slider, {
                modules: [Pagination],
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            })
        }
        else if (slider.closest('#useful-articles') && window.innerWidth <= 1024) {
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
                breakpoints: {
                    300: {
                        spaceBetween: 8,
                    },
                    476: {
                        spaceBetween: 30,
                    },
                }
            })
        }
        else if (slider.closest('.single-product')) {
            const thumbs = new Swiper('.swiper[thumbsSlider]', {
                modules: [
                    FreeMode
                ],
                direction: 'vertical',
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 8,
            });

            new Swiper('.single-product__images-main .swiper', {
                modules: [
                    Thumbs, Pagination
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
    })
}