document.addEventListener('DOMContentLoaded', function () {
    // Координаты и радиус
    const latitude = 41.368823;  // Замените на ваши координаты
    const longitude = 69.303732;  // Замените на ваши координаты
    const radius = 1000;      // Радиус в метрах

    const showMapButton = document.getElementById('showMapButton');
    const mapContainer = document.getElementById('map');

    showMapButton.addEventListener('click', function () {
        // Показываем карту
        mapContainer.style.display = 'block';

        // Инициализация карты
        const map = L.map('map').setView([latitude, longitude], 13);

        // Подключение карты из OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Добавление круга
        const circle = L.circle([latitude, longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: radius
        }).addTo(map);

        // Добавление маркера в центре круга
        const marker = L.marker([latitude, longitude]).addTo(map);

        // Добавление попапа с информацией
        circle.bindPopup(`Радиус: ${radius} метров(Солнышко спрятолось где-то здесь)`);
        marker.bindPopup(`Координаты: [${latitude}, ${longitude}]`);

        // Открытие попапа по умолчанию
        circle.openPopup();
    });
});
