const map = L.map('map-template').setView([51.505, -0.09], 3)

const socket = io()

const tileURL = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'

L.tileLayer(tileURL).addTo(map)

map.locate({enableHighAccuracy: true})
map.on('locationfound', e => {
    const cordenadas = [e.latlng.lat, e.latlng.lng]
    L.marker(cordenadas).addTo(map)
    .bindPopup('estas aqui')
    .openPopup();
    socket.emit('usuarioCordenada', e.latlng)
    // console.log(e);
})

socket.on('nuevoUsuarioCoordenadas', (coords) => {
    console.log('new user');
    const userCoords = [coords.lat, coords.lng]
    L.marker(userCoords).addTo(map)
    .bindPopup('Hola amigo')
    .openPopup();
})

// L.marker([51.505, -0.09]).addTo(map)
//     .bindPopup('Hola amigo')
//     .openPopup();