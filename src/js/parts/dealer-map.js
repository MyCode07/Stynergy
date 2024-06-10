import { lockPadding } from "../utils/lockPadding.js";
import { mapIconPath, mapIconClickedPath } from "./map.js";

const popup = document.querySelector('.popup#dealer-map-popup');
const map = document.querySelector('#popup-map');
const zoom = 12;
const dealerItems = document.querySelectorAll('.diller-item');
const coords = dealer_data;
let clusterer = null;
let geoObjects = [];


export const createDealerPopupMap = () => {
    if (!map || !dealerItems) return;

    ymaps.ready(function () {
        dealer_data_map = new ymaps.Map('popup-map', {
            center: coords['coords'][0],
            zoom: zoom,
        });

        clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedRedClusterIcons',
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
        });

        for (let i = 0; i < coords['coords'].length; i++) {
            const myPlacemark = new ymaps.Placemark(
                coords['coords'][i],
                {
                    id: i,
                    hintContent: `${coords['addresses'][i]}, id: ${i}`,
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: mapIconPath,
                    iconImageSize: [45, 70]
                }
            );
            geoObjects.push(myPlacemark)
        };
        clusterer.add(geoObjects);
        dealer_data_map.geoObjects.add(clusterer);
    });

    dealerItems.forEach((dealer, index) => {
        const btn = dealer.querySelector('button');
        btn.addEventListener('click', () => {
            dealer_data_map.setCenter(coords['coords'][index]);
            dealer_data_map.setZoom(zoom)

            popup.classList.add('_open')
            lockPadding();

            const geoObjects = clusterer.getGeoObjects();

            for (let i = 0; i < geoObjects.length; i++) {
                const obj = geoObjects[i]
                const objectId = obj.properties._data.id;

                obj.options.set('iconImageHref', mapIconPath);
                if (objectId == index) {
                    obj.options.set('iconImageHref', mapIconClickedPath);
                    break;
                }
            };

        })
    });
}