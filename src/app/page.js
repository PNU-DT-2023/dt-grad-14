'use client'

import React, { useRef, useEffect, useState } from 'react';
import useScrollFadeIn from '@/components/hooks/useScrollFadeIn';
import Footer from '@/components/Footer/Footer.js';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap/KakaoMap.js';
import WebLineAnimation from '@/components/SVGAnimation/WebLineAnimation';
import MobileLineAnimation from '@/components/SVGAnimation/MobileLineAnimation';
import NameLink from '@/components/Page/NameLinks';
import useScrollClipPath from '@/components/hooks/useScrollClipPath';

export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  // 스크롤 애니메이션 start
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.6),
    5: useScrollFadeIn('down', 1, 0.2),
    6: useScrollFadeIn('right', 1, 0.4),
    7: useScrollFadeIn('right', 1, 0.4),
  };

  //스크롤 애니메이션 end

  // 버튼 클릭시 스크롤 start
  const element1 = useRef(null); // useRef에 타입을 지정하지 않습니다.
  const onMoveBox = () => {
    element1.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  // 스크롤 end
  //fadeIn animation start
 
  return (
    <>
    
    <div className="w-full min-h-screen font-sans overflow-x-hidden flex flex-col justify-between max-phone:h-fit">
      <h1 className="lg:text-5xl text-5xl font-bold ml-5 md:ml-10 -pt-6 mt-14 lg:mt-10"  {...animatedItem[5]}>
        HOMMAGE
      </h1>
      <div className="flex mt-5">

        <p className="font-sanserif ml-5 md:ml-10 mt-3 md:w-2/3" {...animatedItem[6]}>
          Dept. of Design, Design and Technology 
          <br />
          14th Graduation Exhibition
        </p>

        <p className="font-sanserif mt-3 md:mr-10 md:w-1/3 md:flex md:justify-end hidden lg:block" {...animatedItem[7]}>
          Design Center Pusan 1F Exhibition hall
          <br />
          11.10 - 11.12 10am-6pm
        </p>
      </div>
      {/* 모바일 이미지 */}
      {/* <div className="overflow-hidden block lg:hidden ">
      <Image src="/hommage-home-mobile.svg" alt="hommage_home" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}/>
      </div> */}
      <MobileLineAnimation />
      <p className="font-sanserif mr-5 mb-10 flex justify-end text-right block lg:hidden" {...animatedItem[7]}>
          Design Center Pusan 1F Exhibition hall
          <br />
          11.10 - 11.12 10am-6pm
        </p>
      <div className="flex flex-wrap items-center justify-center max-phone:hidden flex-grow">
        {/* <img src="/hommage-home.svg" alt="hommage_home" className="w-screen scale-105" />*/}
        
        <WebLineAnimation />
        <img src="/ArrowIcon.png" alt="ArrowIcon" className="pb-20 cursor-pointer hidden lg:block" onClick={onMoveBox} /> 
      </div>
    </div>

      {/* 전시소개 start*/}
      <div className='lg:h-screen lg:mx-0 flex flex-col text-center items-center justify-center mx-7 h-fit' ref={element1}>
      <span className='text-3xl mb-0 max-phone:mt-32 font-sanserif uppercase font-semibold'>Intro</span>
      {/* <span className={` mt-12 ${isVisible ? 'animate-fade-in' : ''}`}>

      우리는 우리가 사랑하는 것들의 총체이다.
      </span> */}
      <span className="mt-12"  {...animatedItem[2]}>
      누군가를 이해한다는 것은, 그가 사랑하는 것을 이해하는 것이다. <br/> 그렇다면 우리는 우리가 좋아하는 것을 오롯이 말할 수 있는가.<br />함께 하는 타인을 온전히 이해하는가.<br />그렇다면 그들이 사랑하는 것에 대해 적확하게 얘기할 수 있는가.
      </span>
      <span className="mt-12"  {...animatedItem[3]}>
      우리는 이번 전시를 통해 각자의 삶에 투영된 사랑하는 존재에 충분한 애정을 전한다.<br />
      누구보다 존경하지만 존경을 표하지 못했던 대상과 사랑하지만 사랑한다고 말하지 못했던 것들에 부족하지 않은, 무궁한 경의를 표한다.
      </span>
      <span className="mt-12"  {...animatedItem[4]}>
      우리에게 사랑하는 대상을 탐구하는 이 시간들은 우리의 뿌리를 모색하는 시간이었다.
        <br /> 여러분들에게도 본 전시가 사랑하는 존재에 대해 반추하고, 전하지 못한 존경을 표하며 ‘나’를 이해하는 시간이 되길 바라본다.
      </span>
   </div>
    {/* 전시소개 end */}
      {/* 유튜브 */}
      {/* <Fullpage /> */}
      <div className="flex flex-col items-center justify-center lg:h-screen w-full h-screen" >

        <h2 className='text-3xl mb-20 max-phone:mb-10 lg:mt-0 mt-10 font-sanserif uppercase font-semibold'  {...animatedItem[0]}>Opening Film</h2>
  <iframe src={`https://www.youtube.com/embed/${videoId}`} className=' lg:w-3/4 lg:h-2/3 lg:mb-0 h-1/3 w-5/6 max-phone:h-56 mb-10'  />
</div> 
      <KakaoMap  animatedItem={animatedItem}/>
      <ImageHover  animatedItem={animatedItem}/>
      {/* 교수님 소개 */}
      <Professors/>
      {/* 푸터 */}
      <Footer className="relative" />
    </>
  );
  };

  function ImageHover({ animatedItem }) {
    const animatedImage = useScrollClipPath();
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
      <div className='lg:h-screen text-center items-center justify-center flex flex-col flex-wrap lg:w-3/4 m-auto h-fit   '>
        <div className='text-3xl lg:mb-20 mb-10 mt-10 font-sanserif uppercase font-semibold' {...animatedItem[1]}>
          Made By
        </div>
      <div className='member-items flex justify-between flex-col lg:flex-row  px-12 gap-4 '>
          <div className='basis-1/2 mb-10 lg:mb-0 '>
            <Image
              // src={imagePaths[imageIndex]}
              src="/groupPhoto1.jpg"
              alt='단체사진'
              width={1000}
              height={1000}
              // className={`transition-opacity duration-1000 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
              {...animatedImage}
            />
        </div>
        <div className='lg:basis-1/2 flex flex-col m-auto w-full text-left'>
        <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
        <p class="lg:w-1/4 font-bold lg:text-center text-center">위원장</p>
          {/* <p className='w-3/4 text-left '>박찬유</p> */}
          <NameLink name="박찬유"></NameLink>
          </div>
          <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
          <p class="lg:w-1/4 font-bold lg:text-center text-center">부위원장</p>
          {/* <p className='w-3/4 text-left'>김나연</p> */}
          <NameLink name="김나연"></NameLink>
          </div>
          <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
          <p class="lg:w-1/4 font-bold lg:text-center text-center">웹</p>
          <div className='flex flex-wrap lg:w-3/4 justify-between w-full lg:mt-0 mt-5'>
            <NameLink name="이진희"></NameLink>
            
            <NameLink name="김유민"></NameLink>
            
            <NameLink name="김유진"></NameLink>
            
            <NameLink name="배유림"></NameLink>
            
            <NameLink name="엄채연"></NameLink>
          </div>
          </div>
          <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
          <p class="lg:w-1/4 font-bold lg:text-center text-center">도록</p>
          <div className='flex flex-wrap lg:w-3/4 justify-between w-full lg:mt-0 mt-5'>
          <NameLink name="김현서"></NameLink>
          <NameLink name="박원영"></NameLink>
          <NameLink name="이세영"></NameLink>
          <NameLink name="전종규"></NameLink>
          <NameLink name="전혜성"></NameLink>
          </div>
          </div>
          <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
          <p class="lg:w-1/4 font-bold lg:text-center text-center">DP</p>
          <div className='flex flex-wrap lg:w-3/4 justify-between w-full lg:mt-0 mt-5'>
          <NameLink name="문관영"></NameLink>
          <NameLink name="김도연"></NameLink>
          <NameLink name="김민호"></NameLink>
          <NameLink name="박재현"></NameLink>
          <NameLink name="전서연"></NameLink>
          </div>
          </div>
          <div className='flex lg:flex-row mb-5 flex-col text-center items-center '>
          <p class="lg:w-1/4 font-bold lg:text-center text-center">영상</p>
          <div className='flex flex-wrap lg:w-3/4 justify-between w-full lg:mt-0 mt-5'>
          <NameLink name="민재현"></NameLink>
          <NameLink name="김나연"></NameLink>
          <NameLink name="박찬유"></NameLink>
          <NameLink name="이민영"></NameLink>
          <p><span className="pr-11" /></p>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  function Professors() {
    const animatedItem = {
      0: useScrollFadeIn('up', 1, 0),
      1: useScrollFadeIn('up', 1, 0.2),
      2: useScrollFadeIn('up', 1, 0.4),
      3: useScrollFadeIn('up', 1, 0.6)
    };
    return (

      <div className='content-center w-full lg:h-screen text-center flex flex-col items-center justify-center h-fit'>
        <div className='text-3xl lg:mb-20 mb-10 mt-10  font-sanserif uppercase font-semibold'>Professors</div>
        <div className='w-3/4 flex flex-wrap justify-between lg:flex-row flex-col'>
          <div className='relative items-center flex flex-col' {...animatedItem[1]}>
            <Image src="/profilesImg/이화세교수님.webp" alt="" width={200} height={350} />
            <p className='text-2xl mt-5 mb-5'>이화세 교수님</p>
            <p className='mt-0 mb-5'>HCI</p>
          </div>
          <div className='relative items-center flex flex-col '{...animatedItem[2]}>
            <Image src="/profilesImg/김철기교수님.webp" alt="" width={200} height={350} />
            <p className='text-2xl mt-5 mb-5'>김철기 교수님</p>
            <p className='mt-0 mb-5'>UX / AI / 감성공학</p>
          </div>
          <div className='relative items-center flex flex-col'{...animatedItem[3]} >
            <Image src="/profilesImg/김태완교수님.webp" alt="" width={200} height={350} />
            <p className='text-2xl mt-5 mb-5'>김태완 교수님</p>
            <p className='mt-0 mb-5'>DIGITAL CONTENT DESIGN</p>
          </div>
          
          
        </div>
      </div>
    );
  }