import React, { useEffect } from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
function KakaoMap() {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9b9d018706c8a7f7508294a621f3a307&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(35.17405417422078 , 129.1293928342763), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 중심 좌표에 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(35.17405417422078 , 129.1293928342763);
        const marker = new window.kakao.maps.Marker({ position: markerPosition });

        // 지도에 마커 표시
        marker.setMap(map);
      });

    };
    mapScript.addEventListener('load', onLoadKakaoMap);

  }, []);

  return (
    <div className='h-screen text-center items-center justify-center flex flex-col w-3/4 m-auto '>
      <h2 className='text-3xl mb-20 max-phone:mb-10 font-sanserif uppercase font-semibold' {...animatedItem[0]}>Offline Info</h2>
      <div className='flex flex-col md:flex-row w-full items-center justify-center md:justify-start'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <p style={{ wordBreak: 'keep-all' }} className='my-2' {...animatedItem[1]}>
            부산디자인진흥원
            <br />
            부산광역시 해운대구 센텀동로 57 부산디자인진흥원 1층
          </p>
          <p style={{ wordBreak: 'keep-all' }} className='my-2' {...animatedItem[2]}>DESIGN CENTER BUSAN 1F ExhibitionHall</p>
          <p  style={{ wordBreak: 'keep-all' }} {...animatedItem[3]}>2023.11.10 - 2023.11.12</p>
        </div>
        <div id="map" className="w-1/2 h-96 max-phone:w-72 max-phone:h-72 max-phone:mt-10"></div>
      </div>
    </div>
  );
}

export default KakaoMap;
