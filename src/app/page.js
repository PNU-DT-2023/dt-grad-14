'use client'
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer/Footer.js'
export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  const element = useRef(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className='snap-y snap-mandatory w-full h-screen overflow-x-hidden '>
       <div className='snap-start w-full h-screen'>
          <h1 className="font-sans text-3xl md:text-6xl font-bold mt-10 ml-5 md:ml-10 -pt-6">HOMMAGE</h1>
          <div className="flex flex-col md:flex-row">
              <p className="font-sans ml-5 md:ml-10 mt-3 md:w-2/3">
                Pusan National Univ. Design & Technology
                <br />
                14th Graduation Exhibition
              </p>
              <p className="font-sans mt-3 md:mr-10 w-full md:w-1/3 md:flex md:justify-end max-phone:hidden">
                Design Center Pusan 1F Exhibition hall
                <br />
                11.10 - 11.12 10am-6pm
              </p>
          </div>
          {/* {모바일 이미지} */}
          <div className="relative overflow-hidden space-between md:pt-32 hidden max-phone:block">
            <img src="/hommage-home-mobile.svg" alt="hommage_home" className="scale-105" />
          </div>
          {/* 웹 이미지 */}
          <div className="h-2/3 items-center justify-center max-phone:hidden min-phone:block">
            <img src="/hommage-home.svg" alt="hommage_home" className="w-screen scale-105 mt-32" />
            <img 
            src="/ArrowIcon.png"
            alt="ArrowIcon"
            className='cursor-pointer mx-auto '
            onClick={onMoveBox}
          />
        </div>
      </div>
      {/* 유튜브 */}
      <div ref={element} className='snap-start h-screen '>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} className='w-full h-screen max-laptop:h-full max-phone:w-full max-phone:h-auto' />
      {/* 전시소개 */}
        <div className='flex snap-start max-phone:block'>
        <div className="bg-black h-auto w-1/2 text-white max-phone:w-full">
          <p className="font-sans mx-5 md:mx-10 pt-5 md:pt-10 font-bold">전시개요</p>
          <p className="font-sans mx-5 md:mx-10 pb-5 md:pb-10 leading-loose">
          &apos;나&apos;는 살아가며 사랑하는, 존경하는 것들로 &apos;나&apos;를 채워나가고, 그들에게 경의를 담아 진심어린 애정을 표하는 일을 반복합니다.
            그렇게 &apos;나&apos;는 내가 사랑하는 것들의 총체가 됩니다. 이번 전시에서 &apos;나&apos;는 애정의 대상을 자유롭게 드러내고, 이를 다시 재구성하고 재탄생시키는 과정을 통해
            잊고 있었을지도 모르는 사랑과 존경의 대상을 다시 떠올려본다.
            이번 전시가 20명의 &apos;나&apos;에게는 지금의 &apos;나&apos;를 이루고 있는 것들을 찾아 스스로를 되돌아보는 기회가, 관객 여러분께도 당신이 사랑하고 존경했던 대상을 다시 떠올려 보는 순간이 되길 바랍니다.
          </p>
        </div>
        <div className="bg-black h-auto w-1/2 text-white max-phone:w-full ">
          <p className="font-sans mx-5 md:mx-10 pt-5 md:pt-10 font-bold">전시기간</p>
          <p className="font-sans mx-5 md:mx-10 pb-5 md:pb-10 leading-loose">
            11.10(FRI) - 11.12<br />
            opening 11.10(FRI) 19:00
          </p>
          <p className="font-sans mx-5 md:mx-10 font-bold">전시장소</p>
          <p className="font-sans mx-5 md:mx-10 pb-5 md:pb-10 leading-loose">
            부산디자인진흥원 1F 제1전시실<br />
            (부산시 해운대구 센텀로 2039)
          </p>
        </div>
        </div>
        </div>
        </div>
        {/* 푸터 */}
        <Footer className="relative"></Footer>
        </>
  );

}
 