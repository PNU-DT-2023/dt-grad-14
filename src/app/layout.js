'use client'
import './globals.css'
import { Archivo, Noto_Sans_KR, Philosopher } from 'next/font/google' //구글폰트에 있는 폰트들 추가 가능
import Footer from '@/components/Footer/Footer.js'
import MarqueeText from '@/components/Marquee/MarqueeText.js';
import Sidebar from '@/components/Sidebar/sidebar.js';
import TimerPage from '@/components/Page/TimerPage';
import useThrottle from '@/components/hooks/useThrottle.js';
import useDebounce from '@/components/hooks/useDebounce.js';
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';

//한글 기본 폰트 : notoSans

const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ["100", "400", "700", "900"],
  variable: "--noto"
});

// 영문 기본 폰트 : Archivo (임시)
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--archivo",
});

// 임시 세리프 폰트 : Philosopher
const philosopher = Philosopher({
  subsets: ["latin"],
  variable: "--philosopher",
  weight: ["400", "700"]
});

export const cls = (...classnames) => {
  return classnames.join(" ");
};

// export const metadata = {
//   title: 'HOMMAGE',
//   description: 'Design&Technology 14th Graduation Online',
// };

export default function RootLayout({ children, loadingVisible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isclicked, setClicked] = useState(false);
  const [prevY, setPrevY] = useState();
  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const scrollRef = useRef();
  useEffect(() => {
    const calculateIsOpen = () => {
      const currentTime = new Date().getTime();
      const openTime = new Date('2023-11-10T18:00:00').getTime();
      setIsOpen(currentTime >= openTime);
    };


    if(!isclicked){
      calculateIsOpen();
    }
    const interval = setInterval(calculateIsOpen, 10000); // Recalculate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDebugClick = () => {
    // 클릭 시 isOpen 상태를 true로 변경
    setClicked(true);
    setIsOpen(!isOpen);
  };

  // 스크롤이 내려가고 올라오는지 확인해주는 핸들러
  const handleScroll = useCallback(
    (e) => {
      // 현재위치와 이전 위치의 차를 계산한다.
      const diff = e.target.scrollTop - prevY
      if(e.target.scrollTop <= 0) {
        setIsHeaderShow(true)
      } else if (diff > 0) {
        setIsHeaderShow(false)
      } else if (diff < 0) {
        setIsHeaderShow(true)
      }
      setPrevY(e.target.scrollTop)
    },
    [prevY]
  )

  const stopScroll = useCallback((e) => {
    console.log('🥎🥎🥎멈춤', e.target.scrollTop)
    if (e.target.scrollTop === 0) {
      setIsHeaderShow(true)
    } else {
      setIsHeaderShow(false)
    }
  }, [])

  const throttleScroll = useThrottle(handleScroll, 300)
  const debounceScroll = useDebounce(stopScroll, 1500)

  const scrollDetectHandler = useCallback(
    (...e) => {
      throttleScroll(...e)
      debounceScroll(...e)
    },
    [prevY]
  )
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', scrollDetectHandler)
    }
    return () => {
      if (!scrollRef.current) return
      scrollRef.current.removeEventListener('scroll', scrollDetectHandler)
    }
  }, [prevY])


  return (
    <html lang="kr"> 
      <body className={cls(notoSansKr.className, archivo.variable, philosopher.variable, 'overflow-hidden')}>
        <div className="absolute flex items-center h-full w-full overflow-hidden bg-white">
            {/* 네비게이션 */}
          <Sidebar isHeaderShow={isHeaderShow}></Sidebar>
            {/* 페이지표시 */}
          <div className='w-full h-full overflow-scroll' ref={scrollRef}>

            <div className='marquee-wrap hidden md:block'>
              <MarqueeText>
              <span className='font-bold'>• HOMMAGE • </span>
              <span className='uppercase'>We are the sum of the things we love</span>
              <span className='font-bold'>• HOMMAGE • </span>
              <span className='uppercase'>We are the sum of the things we love</span>
              <span className='font-bold'>• HOMMAGE • </span>
              <span className='uppercase'>We are the sum of the things we love</span>
              <span className='font-bold'>• HOMMAGE • </span>
              <span className='uppercase'>We are the sum of the things we love</span>
              <span className='font-bold'>• HOMMAGE • </span>
              <span className='uppercase'>We are the sum of the things we love</span>
           </MarqueeText>
           </div>
              {children}
            </div>
          </div>
        {/* 비밀버튼 */}
        <div className='w-16 h-16'
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            cursor: 'pointer',
            zIndex: '9999'
          }}
          onClick={handleDebugClick}
        >
             
        </div>
      </body>
    </html>
  );
}


