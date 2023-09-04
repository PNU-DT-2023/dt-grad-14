import './globals.css'
import Link from 'next/link';
import { Archivo, Noto_Sans_KR, Philosopher } from 'next/font/google' //구글폰트에 있는 폰트들 추가 가능
import Footer from '@/components/Footer/Footer.js'
import MarqueeText from '@/components/Marquee/MarqueeText.js';
//한글 기본 폰트 : notoSans
const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ["100", "400", "700", "900"] //variable 폰트가 아닐 경우 사용할 굵기 지정해주기
});

//영문 기본 폰트 : Archivo (임시)
const archivo = Archivo({
  subsets: ["latin"], //미리 로딩해 둘 언어, 아쉽게도 한국어는 지원을 안해서 영문폰트만 할 수 있음
  variable: "--archivo", // CSS 스타일 변수 이름 지정
});

// 임시 세리프 폰트 : Philosopher
const philosopher = Philosopher ({
  subsets: ["latin"],
  variable: "--philosopher",
  weight: ["400", "700"]
})

export const cls = (...classnames) => {
  return classnames.join(" ");
};

export const metadata = {
  title: 'HOMMAGE',
  description: 'Design&Technology 14th Graduation Online',
}

export default function RootLayout({ children }) {
  return (
      <html lang="kr">
        <body className={cls(notoSansKr.className, archivo.variable, philosopher.variable)}>
          {/* 컨테이너 */}
          <div className="absolute flex items-center h-full w-full overflow-hidden ">
          
            {/* 네비게이션 */}
              <aside className="max-phone:hidden h-full border-r border-black" aria-label="Sidebar">
                <div className="rounded h-full">
                      <ul className="w-48 h-full">
                        {/* 확인용 예시 구조 삭제 및 변형 바람! */}

                        {/* Logo */}
                        <div className='py-10 text-lg font-bold border-b border-black'><Link href='/'>Main Logo</Link></div>

                        {/* Project */}
                        <li className="py-2 hover:font-bold  border-b border-black"><Link href='/project'>Project</Link>
                          <ol className="sub-menu">
                            {/* 나중에 삭제, 동적으로 태그 생성 가능하도록 할 예정! */}
                            <li className='text-gray-400'><Link href='/project/1'>존경is..마찰</Link></li> 
                          </ol>
                        </li>

                        {/* Profile */}
                        <li className='py-2 hover:font-bold  border-b border-black '><Link href='/profile'>Profile</Link>
                          <ol className="sub-menu">
                            {/* 나중에 삭제, 동적으로 태그 생성 가능하도록 할 예정! */}
                            <li className='text-gray-400'><Link href='/profile/1'>킹채연</Link></li> 
                          </ol>
                        </li>

                        {/* GuestBook */}
                        <li className='py-2 hover:font-bold  border-b border-black'> <Link href='/guestbook'>Guest Book</Link></li>
                        
                      </ul>
                  </div>
              </aside>

            {/* 페이지표시 */}
              <div className='overflow-scroll w-100 h-full'>
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
  )
}
