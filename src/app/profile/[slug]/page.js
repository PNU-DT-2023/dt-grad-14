import Footer from "@/components/Footer/Footer";
import NavBtn from "@/components/Page/PrevNextBtn";
import { getProfileByName } from "@/data/profiles";
import { getProjectById } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import Router from "next/navigation";

export default async function Profile({params}) {
    const data = await getProfileByName(params.slug)
    return (
        <>
            <div className=" h-screen flex-column flex-col ">
                <ProfileHeader data = {data}></ProfileHeader>
                <ProjectList data = {data}></ProjectList>
                <Footer></Footer>
            </div>

        </>
    )
}

export async function generateMetadata({ params }) {
    const profileData = getProfileByName(params.slug)
  
    return {
      title: profileData?.name
    }
}
  

function ProfileHeader(props) {
    const profile = props.data;
    return (
        <>
            {/* 사이니지: background-image */}

            <section className={`overflow-x-hidden profile-section text-white  bg-black md:px-16 md:py-12 p-4 phone:py-12 max-phone:pb-24 bg-[url(/profilesImg/${profile.name}_signage.svg)]
            bg-no-repeat lg:bg-[length:400px_200px] bg-[length:200px_100px] bg-right-bottom`}>

                {/* 이름 */}
                <h1 className="name text-xl  w-screen">{profile.name}</h1>
                <div className="english-name text-gray-500">{profile.engName}</div>

                {/* 프로필 상세*/}
                <div className="flex flex-wrap pt-4 relative ">
                    {/* 프로필 이미지 */}
                    <ProfileImage imgSrc={`/profilesImg/${profile.name}_profile.jpeg`}></ProfileImage>

                    {/* 프로필 정보 영역 */}
                    <div className="lg:w-1/2 flex flex-col leading-loose">
                        <div className="max-phone:w-full  min-h-[50%] ">{profile.introduction} </div>
                        <div>
                            <div className="CONTACT h-full">
                                <h5 className="font-sanserif text-gray-500">CONTACT</h5>
                                <ul className="flex flex-col gap-1.5">
                                    <li>{profile.email && <a alt="이메일" href={`mailto:${profile.email}`}>{profile.email}</a>}</li>
                                    <li>{profile.phone && <a alt="전화번호" href={`telto:${profile.phone}`}>{profile.phone} </a>}</li>
                                    <li className="leading-normal px-2 bg-slate-700 rounded-full w-fit h-fit ">{profile.instagram && <a alt="인스타그램" href={`https://instagram.com/${profile.instagram}`}target="_blank">
                                        @{profile.instagram}</a>}</li>
                                    <li>{profile.url && <a href={`${profile.url}`} target="_blank">
                                        {profile.url.replace("https://www.","")}</a>}</li>
                                </ul>
                            </div>
                        </div>
                        <img className="absolute  right-1 bottom-1 object-contain h-[30%] r-0" src={`/profilesImg/${profile.name}_signage.svg`}></img>
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
            <div className="relative w-fit pr-8 flex items-center justify-center">
                <Image
                    alt="profile-image"
                    className="w-[18rem] object-contain "
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
    const profile = props.data
    const name = profile?.name
    const team = profile?.team

    const projects = [
        getProjectById(name)?.title,
        getProjectById(team)?.title,
        getProjectById(team)?.title,
    ]
    return (
        <>
                <h2 className="sectionTitle relative mx-2 ">PROJECT</h2>
                <section className="relative pb-9 project-list  grid md:grid-cols-3  w-full h-fit relative object-fit">
                 
                        <ProjectItem project = {projects[0]} url={`/project/${name}`} imgSrc={`/projectsImg/${name}_cover.png`} tag="INDIVIDUAL" ></ProjectItem>
                        <ProjectItem project = {projects[1]} url={`/project/${team}#film`} imgSrc={`/projectsImg/${team}_film_cover.png`} tag="TEAMINTER" ></ProjectItem>
                        <ProjectItem project = {projects[2]} url={`/project/${team}#inter`} imgSrc={`/projectsImg/${team}_inter_cover.png`}  tag="TEAMFILM" ></ProjectItem>
           
                </section>
        </>
    )

    // 프로젝트 목록 아이템
    function ProjectItem(props) {
        const projectTitle = props.project
        const imgSrc = props.imgSrc
        const tag = props.tag
        const url = props.url
       
        return (
            
            <div className="group relative transition-scale relative border-white border  h-full w-full overflow-hidden ">
                <Link href={url}>
                    <Image
                        alt={projectTitle}
                        className="relative border border-white object-cover object-center h-full w-full  transition-transform hover:scale-110"
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
}

