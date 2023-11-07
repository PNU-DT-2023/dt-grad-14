import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <footer className="bg-[#262626] w-full relative ">

                <div className="mx-auto  text-white space-y-8 px-4 py-16 sm:px-6 lg:space-y-4 lg:px-8">
                    <div className="flex max-tablet:flex-wrap">
                        <div className="basis-full font-sanserif text-xl font-bold gray-900 my-2">
                            <Image
                                alt = "Hommage"
                                src = "/sub-logo.svg"
                                width={300}
                                height = {60}
                            >  
                            </Image>
                        </div>
                    </div>
                   
                    <div className='flex'>
                        <div className='min-w-[50%]'>
                            <p className="text-base pb-4">오마주 : 우리는 우리가 사랑하는 것들의 총체</p>
                            <p className="text-sm font-light text-gray-300">부산대학교 디자인학과 디자인앤테크놀로지 전공 14회 졸업전시 </p>
                            <p className="text-sm font-light text-gray-300">Dept. of Design, Design and Technology   <br />
                            14th Graduation Show </p>
                        </div>
                        
                    </div>

                    <div className='flex justify-items-center justify-between max-tablet:flex-wrap'>
                        <div className="font-archivo text-sm text-gray-400 self-end">
                            본 사이트는 2023 졸업논문을 대체합니다. <br></br>
                            &copy;2023 Pusan National University Design&Technology all rights reserved.
                        </div>
                        <div className='flex flex-col max-tablet:flex-row gap-2 pt-4 content-end justify-end h-full'>
                            <img src="/pnuLogo_w.svg" className="h-14 w-14 fill-gray-400 self-end"
                                    fill ="white"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true" alt="pnuLogo"></img>
                            <Link
                                href="https://design.pusan.ac.kr "
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75 h-full self-center
                                text-xs text-gray-400 underline decoration-1 underline-offset-4 
                                "
                            >
                                부산대학교 디자인학과 공식 홈페이지
                </Link>     
                        </div>
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
            <ul className=" text-sm text-gray-400 flex flex-wrap underline gap-2 decoration-1 underline-offset-4 ">
            <li  className="tablet:text-end">
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
