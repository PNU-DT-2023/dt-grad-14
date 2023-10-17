import './globals.css'
import { Archivo, Noto_Sans_KR, Philosopher } from 'next/font/google' //구글폰트에 있는 폰트들 추가 가능
import Footer from '@/components/Footer/Footer.js'
import MarqueeText from '@/components/Marquee/MarqueeText.js';
import Sidebar from '@/components/Sidebar/sidebar.js';

//한글 기본 폰트 : notoSans

const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ["100", "400", "700", "900"]
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

export const metadata = {
  title: 'HOMMAGE',
  description: 'Design&Technology 14th Graduation Online',
};

export default function RootLayout({ children,loadingVisible }) {
  return (

    <html lang="kr">
    <body className={cls(notoSansKr.className, archivo.variable, philosopher.variable)}>
      {/* 컨테이너 */}
      <div className="absolute flex items-center h-full w-full overflow-hidden ">
        {/* 네비게이션 */}
        {/* <Sidebar></Sidebar> */}

          {/* 페이지표시 */}
            <div className='w-full h-full overflow-scroll'>
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
              {children}
            </div>
          </div>
        </body>
    </html>
  );
}

