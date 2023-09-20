import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";
import Footer from '@/components/Footer/Footer.js'
import { cls } from "@/app/layout";
import { loadProjectItem, loadProjects } from "@/api/notion";
import { data } from "autoprefixer";

export default async function Project({params}) {
    // 작품명으로 data? 가져오기 (params.slug는 주소명)
    const projectList = await loadProjects();
    const data = await loadProjectItem((params.slug));
    // 이름_종류.png 이미지 네이밍 규칙
    const posterURL = `/projectsImg/${data?.name}_poster.png`;
    const detailURL = `/projectsImg/${data?.name}_detail.png`;
    // 임베드 형으로 변경
    const youtubeURL = data?.videoURL?.replace('watch?v=','embed/');

    // 팀 작업일 경우 멤버들 목록 가져와서 상단영역에 리스트 표시
    const memberLinks = () => {
        if(data?.tag === "TEAM"){
        teamMembers(data?.name).map((e,idx) => (
        <Link key={idx} href={`/profile/${e}`} className="pr-12">
            <div className={styles.namelink}>
                {e}
            </div>
        </Link>
    )) }}

    return (
        <>
            <TitleBar data={data}></TitleBar>
            <div className="content-area w-full h-full font-sanserif ">


                <div className="project-content">
                    {/* POSTER */}
                    <div className="poster-area flex w-full flex-wrap">

                        {/* 모바일 : 포스터ON */}
                        <div className="poster-container w-full hidden max-phone:block ">
                            <Poster imgSrc={posterURL}></Poster>
                        </div>

                        {/* 포스터 설명 텍스트 */}
                        <div className="poster-content w-[50%] l p-4 max-phone:w-full">
                            <Sectiontitle text="POSTER"></Sectiontitle>
                            <div className="poster-text">
                                {data?.posterComment}
                            </div>
                        </div>

                        {/* 데스크톱 : 포스터ON */}
                        <div className={`poster-container w-[50%] max-phone:hidden min-phone:block`}>
                            <Poster imgSrc={posterURL}></Poster>
                        </div>

                        {/* 인터 섹션 */}
                        <div className="p-4" ><Sectiontitle text="INSTALLATION"></Sectiontitle></div>

                        {/* 인터 시연 영상 유튜브 */}
                        <iframe src={youtubeURL} className='w-full h-screen max-laptop:h-full' />

                        {/* 인터 설명 상세 이미지 */}
                        <Poster className="detail-content w-full h-full" imgSrc={detailURL}></Poster>
                    </div>
                </div>
                {/* 이전, 다음 버튼 */}
                {/* <NavBtn></NavBtn> */}

                {/* 푸터 */}
                <Footer className="relative"></Footer>
            </div>
        </>
    )

    function TitleBar() {
        return (
            <div className="z-50 project-title-area w-full bg-black text-white flex justify-between flex-wrap p-4 sticky top-0 max-phone:relative   ">
                <div className="project-title text-xl min-w-[30%] m-30 p-4">
                    <p className="opacity-60 text-xs pb-2 ">TITLE</p>
                    <h1 className="font-bold">
                        {data?.title}
                        <div className="subtitle text-sm opacity-80  font-light">
                        {data?.subtitle}
                    </div>
                    </h1>
                    
                </div>

                {/* 프로젝트 요약 설명 */}
                <div className="project-description text-sm min-w-[30%] lg:max-w-[30%]  p-4">
                    <p className="opacity-60 text-xs pb-2 ">DESCRIPTION</p>
                    {data?.introduction}
                </div>
                {/* 디자이너 정보 */}
               { 
               data?.tag === "TEAM" ? 
               <TeamCredit></TeamCredit> :
               <IndiCredit></IndiCredit>
               }

            </div>
        )
    }
    
    function IndiCredit() {
        return (
            <div className="project-credit-area text-sm flex-column min-w-[30%] p-4">
            <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
            <div className="wrapper flex">
                <Link href={`/profile/${data?.name}`} className="pr-12">
                    <div className={styles.namelink}>
                        {data?.name}
                    </div>
                </Link>

                {/* CREDIT INFO */}
                <ul className="item-wrapper h-full content-between flex-column">
                    {
                        data?.email.length > 1 ? <li className="project-credit-item">
                           {data?.email}</li> : <></>
                    }
                    {
                        data?.phone.length > 1 ? <li className="project-credit-item">{data?.phone}</li> : <></>
                    }
                    {
                        data?.contactURL.length > 1 ? <li className="project-credit-item">{data?.contactURL}</li> : <></>
                    }
                        
                </ul>
            </div>
        </div>
        )
    }




    function TeamCredit() {
        return (
            <>
            <div className="project-credit-area text-sm flex-column min-w-[30%] p-4">
            <p className="opacity-60 text-xs pb-2 ">CREDIT</p>
            <div className="flex flex-wrap justify-start max-w-xs min-h-90%]">
                {memberLinks}
            </div>
        </div>
        </>
        )
    }


    function teamMembers(teamName) {
        switch(teamName) {
            case "웹" :
                return ['이진희','김유민','김유진','배유림','엄채연']
            case "도록" :
                return ['문관영','김도연','김민호','박재현','전서연']
            case "디피" :
                return ['김현서','박원영','이세영','전종규','전혜성']
            case "영상" :
                return ['민재현','이민영','김나연','박찬유']
        }
    }
    
}

// 포스터 이미지
function Poster(props) {
    return (
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

//POSTER, INSTALLATION 타이틀
function Sectiontitle(props) {
    const text = props.text;
    return (
        <div className={styles.subtitle}>
            <p className="relative bg-[url(/scribble.svg)] bg-contain bg-center bg-no-repeat p-2">{text}</p>
        </div>
    )
}


function NavBtn() {
    return (
        <div className="nav-btn-wrapper flex">
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

            <Link href={``} className="group/btn bg-white border border-black w-full p-4  content-center flex">
                <div className="w-full ">NEXT</div>
                <svg
                    className="h-4 relative group-hover/btn:rotate-6 transition"
                    fill="#E8361E"
                    viewBox="0 0 39.44 16.04"
                    aria-hidden="true"
                >
                    <path d="M19.82,.66c1.93,2.73,3.97,5.29,6.39,7.59s5.13,4.68,8.68,4.74c.49,0,1.07-.26,1.52-.23,.18,.01,.19-.33,.11,.06-.06,.28-.45-.37-.72-.5-1.43-.71-3.79,.53-5.13,1.04-1.98,.74-3.89,1.29-6.01,1.46-2.34,.19-4.7,.23-7.05,.19-5.39-.07-10.77-.33-16.16-.34-1.93,0-1.93-3,0-3,5.72,0,11.42,.32,17.13,.34,2.71,.01,5.63,.11,8.27-.55,2.28-.57,4.37-1.76,6.69-2.16,2.18-.37,4.42,.14,5.53,2.23,.98,1.84-.17,3.56-1.98,4.16-3.66,1.2-8.05-.92-10.77-3.25-3.53-3.02-6.43-6.49-9.1-10.27-1.12-1.58,1.48-3.08,2.59-1.51h0Z" ></path>
                </svg>
            </Link>

        </div>
    )
}
