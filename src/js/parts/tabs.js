const tabs = document.querySelectorAll('.single-page [data-info-tab]');
const content = document.querySelectorAll('.single-page [data-info-content]');

if (tabs.length) {
    tabs.forEach((cat) => {
        const id = cat.dataset.infoTab;

        cat.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach(item => {
                const currentId = item.dataset.infoTab;

                if (currentId == id) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });

            content.forEach(item => {
                const currentId = item.dataset.infoContent;

                if (currentId == id) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });
        })
    });
}