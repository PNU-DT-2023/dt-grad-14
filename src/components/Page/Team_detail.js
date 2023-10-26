'use client'

import Footer from '@/components/Footer/Footer.js'
import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";
import Poster from "@/components/Page/Poster.js"
import Sectiontitle from './Sectiontitle';
import ContactLinks from './Contacts';
import { getProjectById, getTeammembers } from '@/data/project';
import placeholderURL from "@/components/PlaceHolder";
import { Interaction } from './Interaction';

export function TeamDetailPage(props) {
    const data = props.data;
    // const youtubeURL = data?.videoURL?.replace('watch?v=','embed/');

    return (
        <>
            <TitleBar data={data}></TitleBar>
            <div className="content-area h-full flex flex-wrap justify-center font-sanserif ">
                <div className="project-content w-full ">

                    {/* TEAMFILM */}
                    <section id="film" className='py-12'>
                        <div className="text-center flex flex-wrap flex-col items-center justify-items-center justify-center place-content-center pb-12">
                            <div className={`p-2 ${styles.sectionTitle}`}>
                                TEAM FILM
                            </div>
                            <h2 className={styles.title}>{data?.filmTitle}</h2>
                            <div className={`${styles.sectionBody} max-w-lg mx-4`}>{
                                data?.filmBody.split('\n').map((line, idx )=> {
                                return (<span key={idx}>{line}<br /></span>)
                            })
                            }</div>
                        </div>
                        {
                            data?.interVideoURL !== "" &&
                            <div className="flex justify-center bg-black">
                                <iframe src={data?.interVideoURL} className='w-half min-h-vh30 max-laptop:w-full tablet:h-vh50 tablet:h-vh30' />
                            </div>
                        }
                    </section>
                    {/* INTERACTION */}
                    <Interaction data={data}></Interaction>
                </div>
            </div>
        </>
    )

    function TitleBar() {
        return (
            <div className="z-50 project-title-area w-full bg-black text-white flex justify-between flex-wrap p-4  max-phone:relative   ">
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
                            {data?.description.split('\n').map((line, idx) => {
                                        return (<span key={idx}>{line}<br /></span>)
                                    })}
                        </div>
                </div>

                <div className="project-credit-area basis-1/4 max-tablet:basis-full p-4 flex flex-col flex-wrap ">
                    <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
                    <div className="wrapper flex ">
                        <div className="wrapper flex flex content-center ">

                            {/* 이름 */}
                            <div className='mr-4 basis-1/2 lg:border-r h-full'>
                                {data?.name}
                            </div>

                            {/* CREDIT INFO */}
                            <TeamCredit team={data?.name}></TeamCredit>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function TeamCredit(props) {
        const teamName = props.team;
        const members = getProjectById(teamName)?.members.split(', ');
        const memberLinks = members?.map((member, index) => (
            <li key={index} className={`${styles.namelink}`}>
                <Link href={`/profile/${member}`}>{member}</Link>
            </li>
        ))
        return (
            <ul className='flex flex-wrap gap-4 basis-2/3'>
                {memberLinks}
            </ul>
        )
    }
}


export default TeamDetailPage;

