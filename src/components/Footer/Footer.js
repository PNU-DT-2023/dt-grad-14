import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <footer className="bg-[#262626] w-full relative ">

                <div className="mx-auto  text-white space-y-8 px-4 py-16 sm:px-6 lg:space-y-4 lg:px-8">
                    <div className="flex max-tablet:flex-wrap ">
                        <div className=" w-full font-sanserif text-xl font-bold gray-900 my-2 flex justify-between  max-tablet:flex-wrap">
                            <Image
                                alt = "Hommage"
                                src = "/sub-logo.svg"
                                className='max-tablet:pb-4'
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
                        <div className="font-archivo text-sm text-gray-400 self-end pb-4">
                            본 사이트는 2023 졸업논문을 대체합니다. <br></br>
                            &copy;2023 Pusan National University Design&Technology all rights reserved.
                        </div>
                        

                        <div className='flex  gap-4 content-start items-center'>

                            <div className='flex max-tablet:flex-row  content-end gap-2'>
                                <img src="/pnuLogo_w.svg" 
                                        fill ="white"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true" alt="pnuLogo"></img>
                                <Link
                                    href="https://design.pusan.ac.kr "
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-50 self-center
                                    text-xs opacity-75 underline decoration-1 underline-offset-4 
                                    "
                                >
                                    부산대학교 디자인학과 공식 홈페이지
                                </Link>     

                            </div>

                            <Link
                            href= "https://github.com/PNU-DT-2023/dt-grad-14"
                            target="_blank"
                            className='h-fit opacity-75'
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </Link>

                            </div>
                    </div>

                </div>

        </footer>
    </>
  )
}
