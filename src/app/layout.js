import './globals.css';
import Link from 'next/link';
import { Archivo, Noto_Sans_KR, Philosopher } from 'next/font/google';
import Footer from '@/components/Footer/Footer.js';
import Loading from '@/components/Loading/useLoading ';
import { loadingImage } from '@/components/Loading/loadingImage';
// 한글 기본 폰트 : notoSans
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
        {loadingVisible? (
        <div className="h-full w-full">
        <img src="/loading.svg" alt="hommage_loading" />
    </div>
       ):(
          <div className="absolute flex items-center h-full w-full ">
            {/* 네비게이션 */}
            <aside className="h-full border-r border-black" aria-label="Sidebar">
              <div className="overflow-y-auto rounded h-full">
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
            <div className='w-full h-full'>
              {children}
              {/* 푸터 */}
              <Footer></Footer>
            </div>
            
          </div>
          )}
      </body>
    </html>
  );
}
