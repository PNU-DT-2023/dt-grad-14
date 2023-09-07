'use client'
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';

export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  const sectionRefs = useRef([]);
  const currentSection = useRef(0);
  const [videoHeight, setVideoHeight] = useState('100vh');

  useEffect(() => {
    // Ensure there are enough sectionRefs
    sectionRefs.current = Array(3).fill(null).map((_, i) => sectionRefs.current[i] || null);

    const handleScroll = (event) => {
      const deltaY = event.deltaY;
      event.preventDefault();

      // Only prevent default when screen size is smaller than a certain threshold
      if (window.innerWidth <= 768) {
        event.preventDefault();
      }

      if (deltaY > 50 && currentSection.current < sectionRefs.current.length - 1) {
        currentSection.current += 1;
      } else if (deltaY < -50 && currentSection.current > 0) {
        currentSection.current -= 1;
      }
      scrollToSection(currentSection.current);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef) {
      console.log({sectionRef});
      scroller.scrollTo(sectionRef.getAttribute('name'), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleVideoScroll = (event) => {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      setVideoHeight('50vh');
    } else {
      setVideoHeight('100vh');
    }
  };

  return (
    <>

       <div ref={(el) => (sectionRefs.current[0] = el)} className="h-screen" name="section1">
        <h1 className="font-sans text-3xl md:text-6xl font-bold mt-0 ml-5 md:ml-10">HOMMAGE</h1>
        <div className="flex flex-col md:flex-row">
          <p className="font-sans ml-5 md:ml-10 mt-3 md:w-2/3">
            Pusan National Univ. Design & Technology
            <br />
            14th Graduation Exhibition
          </p>
          <p className="font-sans mt-3 md:mr-10 w-full md:w-1/3 md:flex md:justify-end">
            Design Center Pusan 1F Exhibition hall
            <br />
            11.10 - 11.12 10am-6pm
          </p>
        </div>
        {/* {모바일 이미지} */}
        <div className="relative overflow-hidden space-between pt-20 md:pt-32 hidden max-phone:block">
          <img src="/hommage-home-mobile.svg" alt="hommage_home" className="scale-105 -left-5 md:-left-8 h-60 md:h-96" />
        </div>
        <div className="relative overflow-hidden space-between pt-20 md:pt-32 max-phone:hidden">
          <img src="/hommage-home.svg" alt="hommage_home" className="scale-105 -left-5 md:-left-8 h-60 md:h-96" />
        </div>
        <div className="flex items-center justify-center mb-5 md:mb-10">
        <img
          src="/ArrowIcon.png"
          alt="ArrowIcon"
          className='cursor-pointer'
          onClick={() => scrollToSection(currentSection.current + 1)} // Scroll to the next section when clicked
        />
      </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        name="section2"
        onWheel={handleVideoScroll}
        style={{ height: videoHeight }}
      >
        <iframe src={`https://www.youtube.com/embed/${videoId}`} className='w-full h-screen' />
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el)} className="h-screen" name="section3">
        <div className='flex'>
        <div className="bg-black h-auto w-1/2 text-white">
          <p className="font-sans mx-5 md:mx-10 pt-5 md:pt-10 font-bold">전시개요</p>
          <p className="font-sans mx-5 md:mx-10 pb-5 md:pb-10 leading-loose">
          &apos;나&apos;는 살아가며 사랑하는, 존경하는 것들로 &apos;나&apos;를 채워나가고, 그들에게 경의를 담아 진심어린 애정을 표하는 일을 반복합니다.
            그렇게 &apos;나&apos;는 내가 사랑하는 것들의 총체가 됩니다. 이번 전시에서 &apos;나&apos;는 애정의 대상을 자유롭게 드러내고, 이를 다시 재구성하고 재탄생시키는 과정을 통해
            잊고 있었을지도 모르는 사랑과 존경의 대상을 다시 떠올려본다.
            이번 전시가 20명의 &apos;나&apos;에게는 지금의 &apos;나&apos;를 이루고 있는 것들을 찾아 스스로를 되돌아보는 기회가, 관객 여러분께도 당신이 사랑하고 존경했던 대상을 다시 떠올려 보는 순간이 되길 바랍니다.
          </p>
        </div>
        <div className="bg-black h-auto w-1/2 text-white">
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
        </>
  );

}
 