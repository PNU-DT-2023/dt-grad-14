'use client'
import React, {useEffect} from 'react'; // Add React import

import Footer from '@/components/Footer/Footer.js';

export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  return (
    <>
    <div className="w-full h-full font-sans overflow-x-hidden flex flex-col justify-between">
        <h1 className="text-3xl md:text-6xl font-bold mt-14 ml-5 md:ml-10 -pt-6 md:mt-10">
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
        <img src="/ArrowIcon.png" alt="ArrowIcon" className="mb-10" />
      </div>
    </div>

      {/* 전시소개 start*/}
      <div className='h-screen flex flex-col text-center'>
      <h2>Intro</h2>
      <p className='mt-12'>
      &apos;나&apos;는 살아가며 사랑하는, 존경하는 것들로 &apos;나&apos;를 채워나가고, <br />그들에게 경의를 담아 진심어린 애정을 표하는 일을 반복합니다.
      </p>
      <p className='mt-12'>
        그렇게 &apos;나&apos;는 내가 사랑하는 것들의 총체가 됩니다. <br/> 이번 전시에서 &apos;나&apos;는 애정의 대상을 자유롭게 드러내고,
      </p>
      <p className='mt-12'>
        이를 다시 재구성하고 재탄생시키는 과정을 통해<br />
        잊고 있었을지도 모르는 사랑과 존경의 대상을 다시 떠올려본다.
      </p>
      <p className='mt-12'>
        이번 전시가 20명의 &apos;나&apos;에게는 지금의 &apos;나&apos;를 이루고 있는 것들을 찾아 스스로를 되돌아보는 기회가,
        <br /> 관객 여러분께도 당신이 사랑하고 존경했던 대상을 다시 떠올려 보는 순간이 되길 바랍니다.
      </p>

    </div>
    {/* 전시소개 end */}
      {/* 유튜브 */}
      {/* <Fullpage /> */}
      <div className="flex flex-col items-center justify-center h-screen ">
      <h2>Opening film</h2>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} className='w-3/4 h-3/4' />
      </div>
      {/* 전시소개 */}
      {/* <div className='flex snap-start max-phone:block'>
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
        </div> */}
        
        <div className='h-screen text-center'>
      <div>
        Made By
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <img src='/cutty.jpeg' alt='단체사진' className='w-1/3' />

        <div className='w-full md:w-1/3 mx-5 mt-5 md:mt-0'>
          <table className="w-full">
            <tbody>
              <tr>
                <th>위원장</th>
                <td>박찬유</td>
              </tr>
              <tr>
                <th>부위원장</th>
                <td>김나연</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full mt-5">
            <tbody>
              <tr>
                <th>웹</th>
                <td>이진희&nbsp;&nbsp;&nbsp;&nbsp;김유민&nbsp;&nbsp;&nbsp;&nbsp;김유진&nbsp;&nbsp;&nbsp;&nbsp;배유림&nbsp;&nbsp;&nbsp;&nbsp;엄채연</td>
              </tr>
              <tr>
                <th>도록</th>
                <td>문관영&nbsp;&nbsp;&nbsp;&nbsp;김도연&nbsp;&nbsp;&nbsp;&nbsp;박재현&nbsp;&nbsp;&nbsp;&nbsp;김민호&nbsp;&nbsp;&nbsp;&nbsp;전서연</td>
              </tr>
              <tr>
                <th>DP</th>
                <td>김현서&nbsp;&nbsp;&nbsp;&nbsp;박원영&nbsp;&nbsp;&nbsp;&nbsp;이세영&nbsp;&nbsp;&nbsp;&nbsp;전종규&nbsp;&nbsp;&nbsp;&nbsp;전혜성</td>
              </tr>
              <tr>
                <th>영상</th>
                <td>민재현&nbsp;&nbsp;&nbsp;&nbsp;이민영&nbsp;&nbsp;&nbsp;&nbsp;김나연&nbsp;&nbsp;&nbsp;&nbsp;박찬유</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        <div className='flex flex-col items-center justify-center'>
      <h2>교수님소개</h2>
      <div className='flex flex-wrap gap-20 justify-center md:justify-start'>
        <div className='text-center'>
          <img src='/cutty.jpeg' alt='교수님1' className='w-48 h-72 object-cover' />
          <p>김태완 교수님</p>
          <p>디자인앤테크놀로지 전공</p>
        </div>
        <div className='text-center'>
          <img src='/cutty.jpeg' alt='교수님1' className='w-48 h-72 object-cover' />
          <p>김철기 교수님</p>
          <p>디자인앤테크놀로지 전공</p>
        </div>
        <div className='text-center'>
          <img src='/cutty.jpeg' alt='교수님1' className='w-48 h-72 object-cover' />
          <p>이화세 교수님</p>
          <p>디자인앤테크놀로지 전공</p>
        </div>
      </div>
    </div>
    <div className='h-screen w-screen flex flex-col'>
      <div className='w-full md:w-1/2 text-center md:text-left p-5'>
        <p>
          부산디자인진흥원
          <br />
          부산광역시 해운대구 센텀동로 57 부산디자인진흥원 1층
        </p>
        <p>DESIGN CENTER BUSAN 1F Exhibition Hall</p>
        <p>2023.11.10 - 2023.11.12</p>
      </div>
      <div className='w-full md:w-1/2 p-5 flex justify-center md:justify-end items-center'>
        {/* 지도 */}
        <div style={{ background: 'url(/map-image.jpg) center center no-repeat', backgroundSize: 'cover', height: '300px' }}></div>
      </div>
    </div>
      {/* 푸터 */}
      <Footer className="relative" />
    </>
  );

  };