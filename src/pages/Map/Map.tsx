/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Map.scss';

function Location() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const lat = query.get('lat');
  const lng = query.get('lng');

  useEffect(() => {
    let map: naver.maps.Map;
    let marker: naver.maps.Marker;
    let info: naver.maps.InfoWindow;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(Number(lat), Number(lng)),
        zoom: 16,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(Number(lat), Number(lng)),
        map: map,
      });

      info = new naver.maps.InfoWindow({
        content: `
          <div class="info">
          <div class="info-emoji">📍</div>
            <p class="info-name">현재 위치</p>
          </div>`,
        borderWidth: 0,
        disableAnchor: true,
        backgroundColor: 'transparent',
      });

      info.open(map, marker);
    };

    initMap();
  }, [lat, lng]);

  const mapStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className="Location">
      <div id="map" style={mapStyle} />
    </div>
  );
}

export default Location;
