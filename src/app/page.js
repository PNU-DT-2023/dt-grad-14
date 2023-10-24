'use client'

import React, {useRef, useEffect, useState} from 'react'; // Add React import
import { useScrollFadeIn } from '@/components/Hooks/useScrollFadeIn';
import Footer from '@/components/Footer/Footer.js';
import Image from 'next/image'
import KakaoMap from '@/components/KakaoMap/KakaoMap.js';
import WebLineAnimation from '@/components/Svganimation/WebLineAnimation';

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
    
    <div className="w-full min-h-screen font-sans overflow-x-hidden flex flex-col justify-between max-phone:h-fit">
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
      <div className="overflow-hidden hidden max-phone:block ">
      <Image src="/hommage-home-mobile.svg" alt="hommage_home" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}/>
      </div>
      <div className="flex flex-wrap items-center justify-center max-phone:hidden flex-grow">
        {/* <img src="/hommage-home.svg" alt="hommage_home" className="w-screen scale-105" />*/}
        
        <WebLineAnimation />
        <img src="/ArrowIcon.png" alt="ArrowIcon" className="pb-20 cursor-pointer" onClick={onMoveBox} /> 
      </div>
    </div>

      {/* 전시소개 start*/}
      <div className='h-screen flex flex-col text-center items-center justify-center max-phone:mx-7 max-phone:h-fit' ref={element1}>
      <span className='text-3xl mb-0 max-phone:mt-32'>Intro</span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
      우리는 우리가 사랑하는 것들의 총체이다.
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
      누군가를 이해한다는 것은, 그가 사랑하는 것을 이해하는 것이다. <br/> 그렇다면 우리는 우리가 좋아하는 것을 오롯이 말할 수 있는가.<br />함께 하는 타인을 온전히 이해하는가.<br />그렇다면 그들이 사랑하는 것에 대해 적확하게 얘기할 수 있는가.
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
      우리는 이번 전시를 통해 각자의 삶에 투영된 사랑하는 존재에 충분한 애정을 전한다.<br />
      누구보다 존경하지만 존경을 표하지 못했던 대상과 사랑하지만 사랑한다고 말하지 못했던 것들에 부족하지 않은, 무궁한 경의를 표한다.
      </span>
      <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>
      우리에게 사랑하는 대상을 탐구하는 이 시간들은 우리의 뿌리를 모색하는 시간이었다.
        <br /> 여러분들에게도 본 전시가 사랑하는 존재에 대해 반추하고, 전하지 못한 존경을 표하며 ‘나’를 이해하는 시간이 되길 바라본다.
      </span>
   </div>
    {/* 전시소개 end */}
      {/* 유튜브 */}
      {/* <Fullpage /> */}
      <div className="flex flex-col items-center justify-center h-screen w-full max-phone:h-fit" >
        <h2 className='text-3xl mb-20 max-phone:mb-10'>Opening Film</h2>
  <iframe src={`https://www.youtube.com/embed/${videoId}`} className=' w-3/4 h-3/4 max-phone:w-5/6 max-phone:h-56 max-phone:mb-10' />
</div> 
      <KakaoMap />
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
      <div className='h-screen text-center items-center justify-center flex flex-col w-full m-auto max-phone:h-fit   '>
        <div className='text-3xl mb-20 max-phone:mb-10 max-phone:mt-10'>
          Made By
        </div>
        <div className='flex flex-row justify-between w-3/4 max-phone:flex-col'>
          <div className='w-1/2 max-phone:w-full max-phone:mb-10 '>
            <Image
              // src={imagePaths[imageIndex]}
              src="/groupPhoto1.jpg"
              alt='단체사진'
              width={1000}
              height={1000}
              // className={`transition-opacity duration-1000 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
        <div className='w-1/2 flex flex-col m-auto max-phone:w-full'>
          <div className='flex flex-row mb-5'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>위원장</p>
          <p className='w-3/4 text-left '>박찬유</p>
          </div>
          <div className='flex flex-row mb-5'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>부위원장</p>
          <p className='w-3/4 text-left'>김나연</p>
          </div>
          <div className='flex flex-row mb-5 max-phone:flex-col'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>웹</p>
          <div className='flex flex-wrap w-3/4 justify-between max-phone:w-full max-phone:mt-5'>
            <p className=''>이진희</p>
            <p>김유민</p>
            <p>김유진</p>
            <p>배유림</p>
            <p>엄채연</p>
          </div>
          </div>
          <div className='flex flex-row mb-5 max-phone:flex-col'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>도록</p>
          <div className='flex flex-wrap w-3/4 justify-between max-phone:w-full max-phone:mt-5'>
            <p className=''>김현서</p>
            <p>이세영</p>
            <p>박원영</p>
            <p>전종규</p>
            <p>전혜성</p>
          </div>
          </div>
          <div className='flex flex-row mb-5 max-phone:flex-col'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>DP</p>
          <div className='flex flex-wrap w-3/4 justify-between max-phone:w-full max-phone:mt-5 '>
            <p className=''>문관영</p>
            <p>김민호</p>
            <p>김도연</p>
            <p>박재현</p>
            <p>전서연</p>
          </div>
          </div>
          <div className='flex flex-row mb-5 max-phone:flex-col'>
          <p className='w-1/4 font-bold max-phone:w-full text-center'>영상</p>
          <div className='flex flex-wrap w-3/4 justify-between max-phone:w-full max-phone:mt-5'>
            <p className=''>민재현</p>
            <p>김나연</p>
            <p>박찬유</p>
            <p>이민영</p>
            <p>이민영</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  function Professors() {
    return (
      <div className='w-full h-screen text-center flex flex-col items-center justify-center max-phone:h-fit'>
        <div className='text-3xl mb-20 max-phone:mb-10 max-phone:mt-10'>Professors</div>
        <div className='w-3/4 flex flex-wrap justify-between max-phone:justify-center'>
          <div className='relative items-center flex flex-col'>
            <Image src="/profile-temp-image.png" alt="" width={250} height={350} />
            <p className='text-2xl mt-5 mb-5'>김태완 교수님</p>
            <p className='mt-0 mb-5'>DIGITAL CONTENT DESIGN</p>
          </div>
          <div className='relative items-center flex flex-col'>
            <Image src="/profile-temp-image.png" alt="" width={250} height={350} />
            <p className='text-2xl mt-5 mb-5'>김철기 교수님</p>
            <p className='mt-0 mb-5'>UX / AI / 감성공학</p>
          </div>
          <div className='relative items-center flex flex-col'>
            <Image src="/profile-temp-image.png" alt="" width={250} height={350} />
            <p className='text-2xl mt-5 mb-5'>이화세 교수님</p>
            <p className='mt-0 mb-5'>HCI</p>
          </div>
        </div>
      </div>
    );
  }
