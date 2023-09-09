const map = document.querySelector('.map');
const iconOptions = {
  iconUrl: '../img/map-icon.svg',
  iconSize: [38, 50],
};
const customIcon = window.L.icon(iconOptions);
const layer = new window.L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const markerOptions = {
  icon: customIcon,
};
const marker = window.L.marker([59.968322, 30.317359], markerOptions);
const mapOptions = {
  center: [59.968322, 30.317359],
  zoom: 100,
};

export const initMap = () => {
  const lMap = new window.L.Map(map, mapOptions);
  lMap.addLayer(layer);
  marker.addTo(lMap);

  return lMap;
};


