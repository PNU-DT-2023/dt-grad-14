import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";
import Footer from '@/components/Footer/Footer.js'
import { cls } from "@/app/layout";

export default function Project(props) {
    const imgSrc = "https://source.unsplash.com/random/";
    const videoId = 'CvRreCQ5H-w';
    return (
        <>
           <div className="content-area w-full h-full font-sanserif ">
                <div className="project-title-area w-full bg-black text-white flex justify-between flex-wrap p-4">
                    <div className="project-title text-xl  font-bold  min-w-[30%] m-30 p-4">
                        프로젝트 제목임
                        <div className="subtitle text-sm opacity-80  font-light">project name</div>
                    </div>
                    <div className="project-description text-sm min-w-[30%] lg:max-w-[30%]  p-4">
                        오마주는 주체가 대상을 만난 시점과 주체가 만난 오마주 대상의 시점 두 가지에 따라 완전히 다른 결과물이 될 수 있다. 오마주는 특정한 순간의 우연한 마찰이다.
                    </div>
                    <div className="project-credit-area text-sm flex-column min-w-[30%] p-4">
                        <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
                        <div className="wrapper flex">
                            <Link href={`/profile/1`} className="pr-12">
                                <div className={styles.namelink}>김철수</div>
                            </Link>
                            <div className="item-wrapper">
                                <div className="project-credit-item">abc@gmail.com</div>
                                <div className="project-credit-item">/link.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-content">
                    {/* POSTER */}
                    <div className="poster-area flex w-full flex-wrap">
                        
                        <div className="poster-container w-full hidden max-phone:block ">
                            <Poster imgSrc={imgSrc}></Poster>
                        </div>
                        
                        
                        <div className="poster-content w-[50%] l p-4 max-phone:w-full">
                            
                            <Subtitle text="POSTER"></Subtitle>
                            <div className="poster-text">
                                오마주는 주체가 대상을 만난 시점과 주체가 만난 오마주 대상의 시점 두 가지에 따라 완전히 다른 결과물이 될 수 있다. 오마주는 특정한 순간의 우연한 마찰이다.
                            </div>
                        </div>

                        <div className="poster-container w-[50%] max-phone:hidden min-phone:block">
                            <Poster imgSrc={imgSrc}></Poster>
                        </div>

                        
                        <div className="p-4" ><Subtitle text="INSTALLATION"></Subtitle></div>
                        <iframe src={`https://www.youtube.com/embed/${videoId}`} className='w-full h-screen max-laptop:h-full' />
                        <Poster className="detail-content w-full h-full" imgSrc={imgSrc}></Poster>
                    </div>
                    <div className="nav-btn-wrapper flex">
                    <NavBtn></NavBtn>


                    </div>
                    <div className="w-full p-4 flex justify-center object-center ">
                        <p className="pr-2">FOLLOW US!</p>
                        <Link href="https://www.instagram.com/pnu.dt.14/" className={cls(styles.namelink, 'text-[#E8361E]')}>  @pnu.dt.14</Link>
                    </div>
                </div>

                {/* 푸터 */}
                <Footer className="relative"></Footer>
           </div>
        </>
    )
}


function Poster(props) {
    return(
        <>

                        <Image
                            alt="poster-image"
                            className="w-full h-full object-cover object-center"
                            src={props.imgSrc}
                            // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
                            width={1080}
                            height={1920}
                            placeholder="blur"
                            // 이미지 로딩 중 보여줄 이미지
                            blurDataURL="/loadingImage.png"
                            />

        </>
    )
}
function Subtitle(props) {
    const text = props.text;
    return(
    <div className={styles.subtitle}>
                            <p className="relative bg-[url(/scribble.svg)] bg-contain bg-center bg-no-repeat p-2">{text}</p>
                        </div>
    )
}

function NavBtn(props) {
    const dir = props.dir;

    return(
        <>
        <button href="" className="group/btn bg-white border border-black w-full p-4  content-center flex">
                <svg
                                        className="h-4 relative group-hover/btn:-rotate-6 transition"
                                        fill="#E8361E"
                                        viewBox="0 0 39.44 16.04"
                                        aria-hidden="true"
                                        >
                                        <path d="M19.62,.66c-1.93,2.73-3.97,5.29-6.39,7.59s-5.13,4.68-8.68,4.74c-.49,0-1.07-.26-1.52-.23-.18,.01-.19-.33-.11,.06,.06,.28,.45-.37,.72-.5,1.43-.71,3.79,.53,5.13,1.04,1.98,.74,3.89,1.29,6.01,1.46,2.34,.19,4.7,.23,7.05,.19,5.39-.07,10.77-.33,16.16-.34,1.93,0,1.93-3,0-3-5.72,0-11.42,.32-17.13,.34-2.71,.01-5.63,.11-8.27-.55-2.28-.57-4.37-1.76-6.69-2.16-2.18-.37-4.42,.14-5.53,2.23-.98,1.84,.17,3.56,1.98,4.16,3.66,1.2,8.05-.92,10.77-3.25,3.53-3.02,6.43-6.49,9.1-10.27,1.12-1.58-1.48-3.08-2.59-1.51h0Z"></path>
                </svg>
                <div className="w-full">PREV</div>
        </button>

        <button href="" className="group/btn bg-white border border-black w-full p-4  content-center flex">
        <div className="w-full ">NEXT</div>
                <svg
                                        className="h-4 relative group-hover/btn:rotate-6 transition"
                                        fill="#E8361E"
                                        viewBox="0 0 39.44 16.04"
                                        aria-hidden="true"
                                        >
                                        <path d="M19.82,.66c1.93,2.73,3.97,5.29,6.39,7.59s5.13,4.68,8.68,4.74c.49,0,1.07-.26,1.52-.23,.18,.01,.19-.33,.11,.06-.06,.28-.45-.37-.72-.5-1.43-.71-3.79,.53-5.13,1.04-1.98,.74-3.89,1.29-6.01,1.46-2.34,.19-4.7,.23-7.05,.19-5.39-.07-10.77-.33-16.16-.34-1.93,0-1.93-3,0-3,5.72,0,11.42,.32,17.13,.34,2.71,.01,5.63,.11,8.27-.55,2.28-.57,4.37-1.76,6.69-2.16,2.18-.37,4.42,.14,5.53,2.23,.98,1.84-.17,3.56-1.98,4.16-3.66,1.2-8.05-.92-10.77-3.25-3.53-3.02-6.43-6.49-9.1-10.27-1.12-1.58,1.48-3.08,2.59-1.51h0Z" ></path>
                </svg>
        </button>
        
        </>
    )
}