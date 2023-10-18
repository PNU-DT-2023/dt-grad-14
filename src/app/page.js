'use client'
import React, {useRef, useEffect, useState} from 'react'; // Add React import
import { useScrollFadeIn } from '@/components/Hooks/useScrollFadeIn';
import Footer from '@/components/Footer/Footer.js';
import KakaoMap from '@/components/KakaoMap/KakaoMap.js';

export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  //스크롤 애니메이션 start
  const animatedItem1 = useScrollFadeIn('up', 1, 0.2);
  const animatedItem2 = useScrollFadeIn('up', 1, 0.2);
  //스크롤 애니메이션 end

  // 버튼 클릭시 스크롤 start
  const element1 = useRef(null); // useRef에 타입을 지정하지 않습니다.
  const onMoveBox = () => {
    element1.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  // 스크롤 end
  //fadeIn animation start
  const element = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(-32px)';
            entry.target.style.transition = 'transform 1s ease, opacity 1s ease';
          }, index * 1000);
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'none';
          entry.target.style.transition = 'opacity 1s ease';
        }
      });
    });

    const spanElements = document.querySelectorAll('span');
    spanElements.forEach((span, index) => {
      span.style.opacity = 0;
      span.style.transform = 'none';
      span.style.transition = 'none';
      span.dataset.index = index.toString();
      observer.observe(span);
    });

    setIsVisible(true);

    return () => {
      spanElements.forEach((p) => {
        observer.unobserve(p);
      });
    };
  }, []);
  //fadeIn animation end
  return (
    <>
    
    <div className="w-full min-h-screen font-sans overflow-x-hidden flex flex-col justify-between">
      <h1 className="text-3xl md:text-6xl font-bold mt-10 ml-5 md:ml-10 -pt-6" >
        HOMMAGE
      </h1>
      <div className="flex mt-5">
        <p className="font-sans ml-5 md:ml-10 mt-3 md:w-2/3">
          Pusan National Univ. Design & Technology
          <br />
          14th Graduation Exhibition
        </p>
        <p className="mt-3 md:mr-10 md:w-1/3 md:flex md:justify-end max-phone:hidden">
          Design Center Pusan 1F Exhibition hall
          <br />
          11.10 - 11.12 10am-6pm
        </p>
      </div>
      {/* 모바일 이미지 */}
      <div className="relative overflow-hidden space-between md:pt-32 hidden max-phone:block">
        <img src="/hommage-home-mobile.svg" alt="hommage_home" />
      </div>
      <div className="flex flex-wrap items-center justify-center max-phone:hidden flex-grow">
        <img src="/hommage-home.svg" alt="hommage_home" className="w-screen scale-105" />
        <img src="/ArrowIcon.png" alt="ArrowIcon" className="mb-10 cursor-pointer" onClick={onMoveBox} />
      </div>
    </div>

      {/* 전시소개 start*/}
      <div className='h-screen flex flex-col text-center items-center justify-center max-phone:mx-7' ref={element1}>
      <span className='text-3xl mb-10'>Intro</span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
      &apos;나&apos;는 살아가며 사랑하는, 존경하는 것들로 &apos;나&apos;를 채워나가고, <br />그들에게 경의를 담아 진심어린 애정을 표하는 일을 반복합니다.
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
        그렇게 &apos;나&apos;는 내가 사랑하는 것들의 총체가 됩니다. <br/> 이번 전시에서 &apos;나&apos;는 애정의 대상을 자유롭게 드러내고,
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
        이를 다시 재구성하고 재탄생시키는 과정을 통해<br />
        잊고 있었을지도 모르는 사랑과 존경의 대상을 다시 떠올려봅니다.
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
        이번 전시가 20명의 &apos;나&apos;에게는 지금의 &apos;나&apos;를 이루고 있는 것들을 찾아 스스로를 되돌아보는 기회가,
        <br /> 관객 여러분께도 당신이 사랑하고 존경했던 대상을 다시 떠올려 보는 순간이 되길 바랍니다.
      </span>

    </div>
    {/* 전시소개 end */}
      {/* 유튜브 */}
      {/* <Fullpage /> */}
      <div className="flex flex-col items-center justify-center h-screen w-full" >
        <h2 className='text-3xl mb-20'>Opening Film</h2>
  <iframe src={`https://www.youtube.com/embed/${videoId}`} className=' w-3/4 h-3/4 max-phone:h-1/3 max-phone:w-5/6 ' />
</div> 

  {/* 오프라인 정보 */}
  {/* <div className='h-screen text-center items-center justify-center flex flex-col w-3/4 m-auto '>
        <h2 className='text-3xl mb-20'>Offline Info</h2>
        <div className='flex flex-col md:flex-row w-full items-center justify-center md:justify-start'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
        <p>
          부산디자인진흥원
          <br />
          부산광역시 해운대구 센텀동로 57 부산디자인진흥원 1층
        </p>
        <p>DESIGN CENTER BUSAN 1F Exhibition Hall</p>
        <p>2023.11.10 - 2023.11.12</p>
      </div> */}
      {/* <div className='w-full md:w-1/2 p-5 flex justify-center md:justify-end items-center'> */}
        {/* 지도 */}
        {/* <img src='/cutty.jpeg' alt='전시장위치' /> */}
        <KakaoMap />
      {/* </div> */}
    {/* </div>
    </div> */}
{/* MadeBy */}
<ImageHover />
      {/* 교수님 소개 */}
      <Professors />
      {/* 푸터 */}
      <Footer className="relative" />
    </>
  );

  };

  function ImageHover() {
    const imagePaths = ['/groupPhoto1.jpg', '/groupPhoto2.jpg'];
    const [imageIndex, setImageIndex] = useState(0);
    const [imageVisible, setImageVisible] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImageVisible(false);
  
        setTimeout(() => {
          setImageIndex((imageIndex + 1) % imagePaths.length);
          setImageVisible(true);
        }, 1000); // 이미지가 교차하는 시간 (1초)
      }, 2000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, [imageIndex, imagePaths]);
  
    return (
      <div className='h-screen text-center items-center justify-center flex flex-col w-full m-auto   '>
        <div className='text-3xl mb-20'>
          Made By
        </div>
        <div className='flex flex-col justify-between w-3/4 md:flex-row'>
          <img
            src={imagePaths[imageIndex]}
            alt='단체사진'
            className={`w-1/2 md:w-1/2 cursor-pointer transition-opacity duration-1000 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
  
  <div className='w-full flex-col flex text-center items-center justify-center md:w-1/2 ml-5 mt-5 md:mt-0 '>
          <table className="w-full">
            <tbody>
              <tr>
                <th width="40%" height="50">위원장</th>
                <td className='text-left'>박찬유</td>
              </tr>
              <tr>
                <th>부위원장</th>
                <td className='text-left'>김나연</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full mt-5">
            <tbody>
              <tr>
                <th width="40%" height="40">웹</th>
                <td className='text-left'>이진희&nbsp;&nbsp;&nbsp;&nbsp;김유민&nbsp;&nbsp;&nbsp;&nbsp;김유진&nbsp;&nbsp;&nbsp;&nbsp;배유림&nbsp;&nbsp;&nbsp;&nbsp;엄채연</td>
              </tr>
              <tr>
                <th width="40%" height="40">도록</th>
                <td className='text-left'>문관영&nbsp;&nbsp;&nbsp;&nbsp;김도연&nbsp;&nbsp;&nbsp;&nbsp;박재현&nbsp;&nbsp;&nbsp;&nbsp;김민호&nbsp;&nbsp;&nbsp;&nbsp;전서연</td>
              </tr>
              <tr>
                <th width="40%" height="40">DP</th>
                <td className='text-left'>김현서&nbsp;&nbsp;&nbsp;&nbsp;박원영&nbsp;&nbsp;&nbsp;&nbsp;이세영&nbsp;&nbsp;&nbsp;&nbsp;전종규&nbsp;&nbsp;&nbsp;&nbsp;전혜성</td>
              </tr>
              <tr>
                <th width="40%" height="40">영상</th>
                <td className='text-left'>민재현&nbsp;&nbsp;&nbsp;&nbsp;이민영&nbsp;&nbsp;&nbsp;&nbsp;김나연&nbsp;&nbsp;&nbsp;&nbsp;박찬유</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }

  function Professors() {
    return (
      <div className='h-screen text-center items-center justify-center flex flex-col w-3/4 m-auto'>
        <div className='text-3xl mb-20'>
          Professors
        </div>
        <div className="flex flex-wrap items-center justify-between">
        <div className="text-center">
              <img src="/cutty.jpeg" alt="교수님1" className=' w-56 h-80' />
              <p className="mt-5 text-lg md:text-xl lg:text-2xl">김태완 교수님</p>
              <p className="mt-3 text-sm md:text-base lg:text-lg">DIGITAL CONTENT DESIGN</p>
          </div>
          <div className="text-center">
              <img src="/cutty.jpeg" alt="교수님1" className=' w-56 h-80' />
              <p className="mt-5 text-lg md:text-xl lg:text-2xl">김철기 교수님</p>
              <p className="mt-3 text-sm md:text-base lg:text-lg">UX / AI / 감성공학</p>
          </div>
            <div className="text-center">
              <img src="/cutty.jpeg" alt="교수님1" className=' w-56 h-80'  />
              <p className="mt-5 text-lg md:text-xl lg:text-2xl">이화세 교수님</p>
              <p className="mt-3 text-sm md:text-base lg:text-lg">HCI</p>
            </div>
          </div>
        </div>
    );
  }
