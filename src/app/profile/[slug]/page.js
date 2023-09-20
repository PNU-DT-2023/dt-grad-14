import { loadProfileItem, loadProfiles } from "@/api/notion";
import Image from "next/image";
import Link from "next/link";
import Router from "next/navigation";

export default async function Profile({params}) {
    const profileList = await loadProfiles();
    const data = await loadProfileItem((params.slug));
    return (
        <>
            <div className="w-full h-screen flex-column flex-col lg:overflow-hidden ">
                <ProfileHeader data = {data}></ProfileHeader>
                <ProjectList data = {data}></ProjectList>
            </div>

        </>
    )
}

function ProfileHeader(props) {
    const profile = props.data;

    return (
        <>
            {/* 사이니지: background-image */}
            <section className={`profile-section text-white  bg-black md:px-16 md:py-12 p-4 phone:py-12 max-phone:pb-24 bg-[url('/profilesImg/${profile.name}_signage.svg')]
            bg-no-repeat lg:bg-[length:400px_200px] bg-[length:200px_100px] bg-right-bottom`}>

                {/* 이름 */}
                <h1 className="name text-xl  w-screen">{profile.name}</h1>
                <div className="english-name text-gray-500">{profile.engName}</div>

                {/* 프로필 상세*/}
                <div className="flex flex-wrap pt-4 relative ">
                    {/* 프로필 이미지 */}
                    <ProfileImage imgSrc={`/${profile.name}_profile.png`}></ProfileImage>

                    {/* 프로필 정보 영역 */}
                    <div className="lg:w-1/2 justify-between flex flex-col leading-loose">
                        <div className="max-phone:w-full">{profile.introduction} </div>
                        <div>
                            <div className="CONTACT h-full">
                                <h5 className="font-sanserif text-gray-500">CONTACT</h5>
                                <ul>
                                    <li>{profile.email}</li>
                                    <li>{profile.contactURL}</li>
                                    <li>{profile.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

function ProfileImage(props) {
    const imgSrc = props.imgSrc;
    return (
        <>
            <div className="lg:w-[20%] w-1/2 max-phone:w-full pr-8 flex items-center justify-center">
                <Image
                    alt="profile-image"
                    className="object-cover h-full max-w-full "
                    src={imgSrc}
                    // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
                    width={1080}
                    height={1350}
                    placeholder="blur"
                    // 이미지 로딩 중 보여줄 이미지
                    blurDataURL="/loadingImage.png"
                />
            </div>
        </>
    )
}

// 프로젝트 목록
function ProjectList(props) {
    const projects = props.data.projects
    const name = props.data.name
    return (
        <>
                <h2 className="sectionTitle relative mx-2 ">PROJECT</h2>
                <section className="project-list max-h-[100%] grid md:grid-cols-3  w-full relative object-fit">
                 
                        <ProjectItem project = {projects[0]} imgSrc={`/projectsImg/${name}_cover.png`} tag="INDIVIDUAL" ></ProjectItem>
                        <ProjectItem project = {projects[1]} imgSrc={`/projectsImg/${props.team}_inter_cover.png`} tag="TEAMINTER" ></ProjectItem>
                        <ProjectItem project = {projects[2]} imgSrc={`/projectsImg/${props.team}_inter_cover.png`}  tag="TEAMFILM" ></ProjectItem>
           
                </section>
        </>
    )
}

// 프로젝트 목록 아이템
function ProjectItem(props) {
    const projectTitle = props.project
    const imgSrc = props.imgSrc
    const tag = props.tag
    return (
        
        <div className="group relative transition-scale relative border-white border  h-full w-full overflow-hidden ">
            <Link href={`/project/${projectTitle}`}>
                <Image
                    alt={projectTitle}
                    className="relative border border-white object-cover object-center min-h-30vh w-full  transition-transform hover:scale-110"
                    // 이미지 url 넣기
                    src={imgSrc}
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    // 이미지 로딩 중 보여줄 이미지
                    blurDataURL="/loadingImage.png"
                />
                <div className='flex items-end absolute bottom-0 left-0 right-0 h-2/5  text-white p-4 bg-gradient-to-b from-transparent to-black bg-transparent opacity-100 translate-y-1 group-hover:-translate-y-0 transition-transform '>
                    <div className="relative w-full flex align-bottom justify-items-stretch max-tablet:flex-wrap">
                        <h6 className="grow pr-2 self-end line-clamp-2 line-clamp-5">{projectTitle}</h6>
                        <div className="text-xs text-gray-300 leading-none text-right self-end">{tag}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}