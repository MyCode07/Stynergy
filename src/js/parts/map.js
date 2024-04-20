const mapIconPath = '/img/icons/map-icon.svg';
// const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const map = document.querySelector('#dealer-map');
const zoom = 8;
const center = [55.660451, 37.741881];
const coords = moscow_coords;
let collection = null;
const scrollElem = document.querySelector('.map-content .map-flex__right');


export const createMap = () => {
    if (!map) return;
    ymaps.ready(function () {
        dealersMap = new ymaps.Map('dealer-map', {
            center: moscow_coords[0],
            zoom: zoom,
        });

        collection = new ymaps.GeoObjectCollection(null, {
            preset: 'default#image'
        });

        for (let i = 0; i < coords.length; i++) {
            const myPlacemark = new ymaps.Placemark(
                coords[i],
                { id: i, hintContent: "Дилер  " + i, },
                {
                    iconLayout: 'default#image',
                    iconImageHref: mapIconPath,
                    iconImageSize: [45, 70]
                }
            );

            collection.add(myPlacemark);
        };
        dealersMap.geoObjects.add(collection);

        collection.events.add('click', function (e) {
            const obj = e.get('target')
            const objectId = collection.indexOf(obj);

            collection.each((item, i) => {
                if (objectId == i) {
                    item.options.set('visible', true);
                }
                else {
                    item.options.set('visible', false);
                }
            })

            const position = document.querySelectorAll('.map-item')[objectId].getBoundingClientRect().top;
            scrollElem.scrollTo(0, position)

            document.querySelectorAll('.map-item').forEach((item, i) => {
                if (objectId == i) {
                    item.classList.add('_clicked')
                }
                else {
                    item.classList.remove('_clicked')
                }
            });
        });

    });

    document.addEventListener('click', function (e) {
        let targetEl = e.target;
        if (targetEl.classList.contains('map-item') || targetEl.closest('.map-item')) {
            const index = [...targetEl.parentElement.children].indexOf(targetEl);

            dealersMap.setCenter(coords[index]);

            collection.each((item, i) => {
                if (index == i) {
                    item.options.set('visible', true);
                }
                else {
                    item.options.set('visible', false);
                }
            })
        }
    })
}