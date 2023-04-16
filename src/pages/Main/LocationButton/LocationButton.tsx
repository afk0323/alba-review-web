import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationButton.scss';

function LocationButton() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    navigate(`/map?lat=${latitude}&lng=${longitude}`);
  };

  return (
    <div className="LocationButton">
      <button type="button" onClick={handleClick}>
        🧭 내 주변 장소 찾기
      </button>
    </div>
  );
}

export default LocationButton;
