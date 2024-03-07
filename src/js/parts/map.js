// const mapIconPath = '/img/icons/map-icon.svg';
const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const map = document.querySelector('#dealer-map');
const zoom = 8;
const center = [55.660451, 37.741881];
const coords = moscow_coords;

export const createMap = () => {
    if (!map) return;
    ymaps.ready(function () {
        dealersMap = new ymaps.Map('dealer-map', {
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

            dealersMap.geoObjects.add(myPlacemark);
        };
    });
}