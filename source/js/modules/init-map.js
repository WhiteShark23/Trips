const map = document.querySelector('.map');
const iconOptions = {
  iconUrl: '../img/map-icon.svg',
  iconSize: [38, 50],
};
const customIcon = window.L.icon(iconOptions);
const layer = new window.L.TileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  minZoom: 10,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});
const markerOptions = {
  icon: customIcon,
};
const marker = window.L.marker([55.774836, 37.632664], markerOptions);
const mapOptions = {
  center: [55.774836, 37.632664],
  zoom: 16,
};

export const initMap = () => {
  const lMap = new window.L.Map(map, mapOptions);
  lMap.addLayer(layer);
  marker.addTo(lMap);

  return lMap;
};
