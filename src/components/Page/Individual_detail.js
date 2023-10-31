'use client'

import Footer from '@/components/Footer/Footer.js'
import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";
import Poster from "@/components/Page/Poster.js"
import Sectiontitle from './Sectiontitle';
import ContactLinks from './Contacts';
import Interaction from './Interaction';

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
                        <div className="poster-content basis-full laptop:basis-1/2  p-6 ">
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
                    <Interaction data={data}></Interaction>
                </div>
            </div>
        </>
    )


    function TitleBar() {
        return (
            <div className="pt-12 z-50 project-title-area w-full bg-black text-white flex justify-between flex-wrap p-4  max-phone:relative   ">
                <div className="project-title text-xl basis-1/4  max-tablet:basis-full m-30 p-4">
                    <p className="opacity-60 text-xs pb-2 ">TITLE</p>
                    <h1 className="font-bold">
                        {data?.title}
                        <div className="subtitle text-sm opacity-80  font-light">
                            {data?.subtitle}
                        </div>
                    </h1>

                </div>

                {/* 프로젝트 요약 설명 */}
                <div className="project-description basis-2/4  max-tablet:basis-full p-4">
                    <p className="opacity-60 text-xs pb-2 ">DESCRIPTION</p>
                    <div className={`${styles.description}`}>
                        {data?.description?.split('\n').map((line,idx) => {
                            return (<span key={idx}>{line}<br /></span>)
                        })}
                    </div>
                </div>

                <div className="project-credit-area basis-1/4 max-tablet:basis-full p-4 flex flex-col flex-wrap ">
                    <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
                    <div className="wrapper flex ">
                        <div className="wrapper flex content-center max-phone:flex-wrap ">
                            {/* 이름 */}
                            <Link href={`/profile/${data?.name}`} className="pr-12 pb-12 min-w-max">
                                <div className={styles.namelink}>
                                    {data?.name}
                                </div>
                            </Link>
                            <ContactLinks data={data}></ContactLinks>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default IndividaulDetailPage;

