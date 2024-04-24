// const mapIconPath = '/img/icons/map-icon.svg';
// const mapIconClickedPath = '/img/icons/map-icon-clicked.svg';
const mapIconClickedPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon-clicked.svg';
const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const map = document.querySelector('#dealer-map');
const zoom = 8;
const coords = moscow_coords;
let collection = null;
const scrollElem = document.querySelector('.map-content .map-flex__right');
const geoObjects = [];

export const createMap = () => {
    if (!map) return;
    ymaps.ready(function () {
        dealersMap = new ymaps.Map('dealer-map', {
            center: coords[0]['coords'][0],
            zoom: zoom,
        });

        // collection = new ymaps.GeoObjectCollection(null, {
        //     preset: 'default#image'
        // });
        collection = new ymaps.Clusterer({
            preset: 'islands#invertedRedClusterIcons',
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
        });

        for (let i = 0; i < coords.length; i++) {
            const marks = coords[i]['coords']
            const dealerName = coords[i]['dealer']

            for (let k = 0; k < marks.length; k++) {
                const placeMark = new ymaps.Placemark(
                    marks[k],
                    {
                        parent_id: i,
                        id: i,
                        hintContent: `${dealerName}, prant_id: ${i}, id: ${k}`,
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: mapIconPath,
                        iconImageSize: [45, 70]
                    }
                );

                geoObjects.push(placeMark)
            }

        };
        collection.add(geoObjects);
        dealersMap.geoObjects.add(collection);


        collection.events.add('click', function (e) {
            const obj = e.get('target');
            console.log(obj.options);
            // if click is on a placemark, not on the cluster
            if (typeof obj.getGeoObjects == 'undefined') {
                const objectId = obj.properties._data.parent_id;

                obj.options.set('iconImageHref', mapIconClickedPath);

                let parentTop = scrollElem.getBoundingClientRect().top;
                let currentChildTop = document.querySelectorAll('.map-item')[objectId].getBoundingClientRect().top;
                let position = Math.abs(parentTop - currentChildTop - scrollElem.scrollTop)

                scrollElem.scrollTop = position

                document.querySelectorAll('.map-item').forEach((item, i) => {
                    if (objectId == i) {
                        item.classList.add('_clicked')
                    }
                    else {
                        item.classList.remove('_clicked')
                    }
                });
            }
        });
    });

    document.addEventListener('click', function (e) {
        let targetEl = e.target;
        if (targetEl.classList.contains('map-item')) {
            const index = [...targetEl.parentElement.children].indexOf(targetEl);

            dealersMap.setCenter(coords[index]['coords'][0]);
            dealersMap.setZoom(14)

            var geoObjects = collection.getGeoObjects();
            console.log(geoObjects[index]);
            geoObjects[index].options.set('iconImageHref', mapIconClickedPath);

            document.querySelectorAll('.map-item').forEach(item => {
                item.classList.remove('_clicked')
            });
            targetEl.classList.add('_clicked')
        }

        if (targetEl.tagName == 'BUTTON' && targetEl.closest('.map-item__bottom')) {

            targetEl.closest('.map-item').classList.toggle('_open')

            if (targetEl.closest('.map-item').classList.contains('_open')) {
                targetEl.textContent = targetEl.dataset.textHide
            }
            else {
                targetEl.textContent = targetEl.dataset.textShow
            }
        }

        if (targetEl.tagName == 'BUTTON' && targetEl.closest('.map-item__hidden')) {
            const li = targetEl.closest('li');

            const perntIndex = [...targetEl.closest('.map-items').children].indexOf(targetEl.closest('.map-item'));
            const currentIndex = [...li.parentElement.children].indexOf(li);

            const allAddresses = document.querySelectorAll('.map-items li');
            const index = [...allAddresses].indexOf(li);
            console.log(perntIndex, currentIndex, coords[perntIndex]['coords'][currentIndex]);

            dealersMap.setCenter(coords[perntIndex]['coords'][currentIndex]);
            dealersMap.setZoom(14)

            var geoObjects = collection.getGeoObjects();
            console.log(geoObjects[index]);
            geoObjects[index].options.set('iconImageHref', mapIconClickedPath);

            // const mapItem = targetEl.closest('.map-item');
            // const index = [...mapItem.parentElement.children].indexOf(mapItem);
        }
    })
}