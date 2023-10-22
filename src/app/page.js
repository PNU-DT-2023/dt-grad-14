'use client'
import React, {useRef, useEffect, useState} from 'react'; // Add React import
import { useScrollFadeIn } from '@/components/Hooks/useScrollFadeIn';
import Footer from '@/components/Footer/Footer.js';
import Image from 'next/image'
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
        <img src="/hommage-home.svg" alt="hommage_home" className="w-screen scale-105" />
        <img src="/ArrowIcon.png" alt="ArrowIcon" className="mb-10 cursor-pointer" onClick={onMoveBox} />
      </div>
    </div>

      {/* 전시소개 start*/}
      <div className='h-screen flex flex-col text-center items-center justify-center max-phone:mx-7 max-phone:h-fit' ref={element1}>
      <span className='text-3xl mb-0 max-phone:mt-32'>Intro</span>
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
