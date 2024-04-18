import { lockPadding } from "../utils/lockPadding.js";

const mapIconPath = '/img/icons/map-icon.svg';
// const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const popup = document.querySelector('.popup#dealer-map-popup');
const map = document.querySelector('#popup-map');
const zoom = 12;
const coords = dealer_data;
const dealerItems = document.querySelectorAll('.diller-item');

export const createDealerPopupMap = () => {
    if (!map && !dealerItems) return;
    ymaps.ready(function () {
        dealer_data_map = new ymaps.Map('popup-map', {
            center: moscow_coords[0],
            zoom: zoom,
        });

        for (let i = 0; i < coords.length; i++) {
            const myPlacemark = new ymaps.Placemark(
                coords[i],
                {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: mapIconPath,
                    iconImageSize: [45, 70]
                }
            );

            dealer_data_map.geoObjects.add(myPlacemark);
        };
    });

    dealerItems.forEach((dealer, i) => {
        const btn = dealer.querySelector('button');
        btn.addEventListener('click', () => {
            dealer_data_map.setCenter(coords[i]);
            popup.classList.add('_open')
            lockPadding();
        })
    });
}