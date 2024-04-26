// const mapIconPath = '/img/icons/map-icon.svg';
// const mapIconClickedPath = '/img/icons/map-icon-clicked.svg';
const mapIconClickedPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon-clicked.svg';
const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const map = document.querySelector('#dealer-map');
const zoom = 8;
const coords = moscow_coords;
let clusterer = null;
const scrollElem = document.querySelector('.map-content .map-flex__right');
let geoObjects = [];



export const createMap = () => {
    if (!map) return;
    ymaps.ready(function () {
        dealersMap = new ymaps.Map('dealer-map', {
            center: coords[0]['coords'][0],
            zoom: zoom,
        });

        // clusterer = new ymaps.GeoObjectclusterer(null, {
        //     preset: 'default#image'
        // });
        clusterer = new ymaps.Clusterer({
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
        clusterer.add(geoObjects);
        dealersMap.geoObjects.add(clusterer);


        clusterer.events.add('click', function (e) {
            const obj = e.get('target');
            console.log(obj.options);
            // if click is on a placemark, not on the cluster
            if (typeof obj.getGeoObjects == 'undefined') {
                const objectId = obj.properties._data.parent_id;

                const geoObjects = clusterer.getGeoObjects();
                for (let i = 0; i < geoObjects.length; i++) {
                    geoObjects[i].options.set('iconImageHref', mapIconPath);
                };

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

            const geoObjects = clusterer.getGeoObjects();

            for (let i = 0; i < geoObjects.length; i++) {
                const obj = geoObjects[i]
                const objectId = obj.properties._data.parent_id;

                obj.options.set('iconImageHref', mapIconPath);
                if (objectId == index) {
                    obj.options.set('iconImageHref', mapIconClickedPath);
                    break;
                }
            };

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

            var geoObjects = clusterer.getGeoObjects();
            console.log(geoObjects[index]);
            geoObjects[index].options.set('iconImageHref', mapIconClickedPath);

            // const mapItem = targetEl.closest('.map-item');
            // const index = [...mapItem.parentElement.children].indexOf(mapItem);
        }
    })

    const searchBtn = document.querySelector('#map .map-search button');
    if (map && !searchBtn.hasAttribute('disabled')) {
        searchBtn.addEventListener('click', ajaxDealers);
    }

    function ajaxDealers() {
        const map = document.querySelector('#map');

        let cat = map.querySelector('.select-region').dataset.id;

        let vidTochki = '';

        const showroom = map.querySelector('.select-showroom');
        if (showroom.dataset.id != 0) {
            vidTochki = showroom.textContent;
        }

        const parent = map.querySelector('.map-items');
        const childs = parent.querySelectorAll('.map-item');

        childs.forEach(item => item.remove());

        let data = {
            'action': 'load_ajax_dealers',
            'cat': cat,
            'vid_tochki': vidTochki,
        }

        console.log(data);

        $.ajax({
            url: adminajaxurl.ajaxurl,
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {
                searchBtn.setAttribute('disabled', true)
                searchBtn.textContent = 'Загрузка...';
            },
            success: function (data) {
                data = JSON.parse(data);
                console.log(data);
                if (data.posts) {
                    if (typeof data.posts == "object" && data.posts.length) {
                        parent.insertAdjacentHTML('beforeend', (data.posts).join(''));

                        changeMapLocation(data.coords)
                    }
                    else {
                        parent.insertAdjacentHTML('beforeend', data.posts);
                    }
                }
            },
            complete: function () {
                searchBtn.removeAttribute('disabled')
                searchBtn.textContent = 'Найти';
            },
        });

        function changeMapLocation(coords) {
            if (dealersMap && dealersMap.geoObjects) {
                dealersMap.geoObjects.removeAll();
                geoObjects = []
                clusterer.removeAll();
            }

            dealersMap.setCenter(coords[0]['coords'][0]);
            dealersMap.setZoom(14)

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
            clusterer.add(geoObjects);
            dealersMap.geoObjects.add(clusterer);
        }
    }
}