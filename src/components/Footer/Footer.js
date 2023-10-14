import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <footer className="bg-[#262626] w-full relative ">
                {/* <div className="w-full p-4 flex justify-center object-center bg-white ">
                        <p className="pr-2">FOLLOW US!</p>
                        <Link
                        href="https://www.instagram.com/pnu.dt.14/" 
                        target="_blank"
                        className='text-[#E8361E] underline decoration-accent decoration-solid underline-offset-4 '>
                             @pnu.dt.14
                        </Link>
                </div> */}
                <div className="mx-auto  text-white space-y-8 px-4 py-16 sm:px-6 lg:space-y-4 lg:px-8">
                    <div className="flex sm:items-center sm:justify-between">
                        <div className="w-full min-w-[50%] font-archivo text-xl mr-auto font-bold gray-900">
                            HOMMAGE
                        </div>
                        <Links></Links>
                    </div>
                   
                    <div className='flex'>
                        <div className='min-w-[50%]'>
                            <p className="text-base">오마주 : 우리는 우리가 사랑하는 것들의 총체</p>
                            <p className="text-sm font-light">부산대학교 디자인앤테크놀로지 전공 14회 졸업전시 </p>
                        </div>
                        
                    </div>

                    <div className='flex justify-between'>
                        <div className="font-archivo text-sm text-gray-400">
                            본 사이트는 2023 졸업논문을 대체합니다. <br></br>
                            &copy; Ⓒ2023 Pusan National University Design&Technology all rights reserved.
                        </div>
                        <img src="/pnuLogo_w.svg" className="h-12 w-12"
                                    fill="white"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true" alt="pnuLogo"></img>
                    </div>

                </div>

        </footer>
    </>
  )
}

const Links = () => {
    return (
        <>
            {/* LINKS */}
            <ul className="text-sm text-gray-400 flex flex-wrap underline justify-end gap-2 decoration-1 underline-offset-4 ">
            <li  className="min-w-fit">
                <Link
                    href="https://design.pusan.ac.kr"
                    rel="noreferrer"
                    target="_blank"
                    className="hover:opacity-75 min-w-[50%]"
                >
                    0FFICIAL INSTAGRAM
                </Link>
            </li>
            <li  className="min-w-fit"> 
                <Link
                    href="https://design.pusan.ac.kr"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75 min-w-[50%]"
                >
                    1NSTA T00N
                </Link>
            </li>
            <li  className="min-w-fit">
                <Link
                    href="https://design.pusan.ac.kr "
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 min-w-full"
                >
                    부산대학교 디자인학과 공식 홈페이지
                </Link>
            </li>
            </ul>
        </>
    );
}
