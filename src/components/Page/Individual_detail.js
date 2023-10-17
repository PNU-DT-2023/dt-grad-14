'use client'

import Footer from '@/components/Footer/Footer.js'
import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";
import Poster from "@/components/Page/Poster.js"
import Sectiontitle from './Sectiontitle';
import ContactLinks from './Contacts';

export function IndividaulDetailPage(props) {
    const data = props.data;
    const posterURL = `/projectsImg/${data?.name}_poster.png`;
    const detailURL = `/projectsImg/${data?.name}_detail.png`;
    // const youtubeURL = data?.videoURL?.replace('watch?v=','embed/');

    return (
        <>
            <TitleBar data={data}></TitleBar>
            <div className="content-area h-full flex flex-wrap justify-center font-sanserif ">
                <div className="project-content w-full ">

                    {/* POSTER */}
                    <section id="poster" className="poster-area w-full flex flex-wrap">
                        {/* 포스터 설명 텍스트 */}
                        <div className="poster-content basis-full laptop:basis-1/2  p-4 ">
                            <div className={`${styles.sectionTitle} px-4`}>
                                POSTER  
                            </div>
                            <h2 className={styles.title}>{data?.posterTitle}</h2>
                            <div className={styles.sectionBody}>{data?.posterBody}</div>
                        </div>
                        {/* 데스크톱 : 포스터ON */}
                        <div className="bg-black basis-full laptop:basis-1/2 flex justify-center">
                            <Poster className=" phone:w-full " imgSrc={posterURL}></Poster>
                        </div>
                    </section>

                    {/* INTERACTION */}
                    <section id="inter" className='py-12'>
                        <div className="text-center flex flex-wrap flex-col items-center justify-items-center justify-center place-content-center pb-12">
                            <div className={styles.sectionTitle}>
                                INTERACTION
                            </div>
                            <h2 className={styles.title}>{data?.interTitle}</h2>
                            <div className={`${styles.sectionBody} max-w-lg mx-4`}>{data?.interBody}</div>
                            <div className={styles.sectionCaption}>{data?.interFormat}</div>
                        </div>
                        {/* 인터 설명 상세 이미지 */}
                        <Image
                            alt="detail-image"
                            className="object-fit object-center"
                            src={detailURL}
                            // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
                            width={1920}
                            height={1920}
                            placeholder="blur"
                            // 이미지 로딩 중 보여줄 이미지
                            blurDataURL="/loadingImage.png"
                        />
                        {/* 인터 시연 영상 유튜브 | 없으면 안띄움*/}
                        {
                            data?.interVideoURL!=="" && 
                                <div className= "flex justify-center bg-black">
                                    <iframe src={data?.interVideoURL} className='w-half min-h-vh30 max-laptop:w-full tablet:h-vh50 tablet:h-vh30' />
                                </div>
                        }
                    </section>


                </div>
            </div>
        </>
    )

    function TitleBar() {
        return (
            <div className="z-50 project-title-area w-full bg-black text-white flex justify-between flex-wrap p-4  max-phone:relative   ">
                <div className="project-title text-xl basis-1/5 max-tablet:basis-full m-30 p-4">
                    <p className="opacity-60 text-xs pb-2 ">TITLE</p>
                    <h1 className="font-bold">
                        {data?.title}
                        <div className="subtitle text-sm opacity-80  font-light">
                        {data?.subtitle}
                    </div>
                    </h1>
                    
                </div>

                {/* 프로젝트 요약 설명 */}
                <div className="project-description text-sm basis-2/5  max-tablet:basis-full p-4">
                    <p className="opacity-60 text-xs pb-2 ">DESCRIPTION</p>
                    {data?.introduction}
                </div>

                <div className="project-credit-area text-sm basis-2/5 max-tablet:basis-full p-4 flex flex-col flex-wrap ">
                <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
                <div className="wrapper flex ">
                    {/* 이름 */}
                    <Link href={`/profile/${data?.name}`} className="pr-12 ">
                        <div className={styles.namelink}>
                            {data?.name}
                        </div>
                    </Link>
                    <ContactLinks data={data}></ContactLinks>
                </div>
                </div>
            </div>
        )
    }
}


export default  IndividaulDetailPage;

