import Footer from "@/components/Footer/Footer";
import NavBtn from "@/components/Page/PrevNextBtn";
import { getProfileByName } from "@/data/profiles";
import { getProjectById } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

import { ProfileHeader } from "@/components/ProfileHeader";

export default  function Profile({params}) {
    const data =  getProfileByName(params.slug)
    return (
        <>
        <div className="lg:h-screen flex flex-col bg-black">
            <div className="flex flex flex-wrap ">
                <ProfileHeader data = {data}></ProfileHeader>
                <ProjectList data = {data}></ProjectList>
            </div>
            <Footer className="h-1/3 relative"></Footer>
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
  


// 프로젝트 목록
function ProjectList(props) {
    const profile = props.data
    const name = profile?.name
    const team = profile?.team

    const projects = [
        getProjectById(name)?.title,
        getProjectById(team)?.filmTitle,
        getProjectById(team)?.interTitle,
    ]
    return (
        <>
        <div className=" lg:basis-1/3 h-full p-4 bg-[#EDBC81] w-full ">
                <h2 className="sectionTitle relative mx-2 ">PROJECT</h2>
                {/* <div className="relative project-list flex flex-row flex-wrap relative h-full content-start"> */}
                <div className="relative project-list grid grid-cols-auto content-start">
                        <ProjectItem className="col-span-2 p-5" project = {projects[0]} url={`/project/${name}`} imgSrc={`/projectsImg/${name}_cover.webp`} tag="INDIVIDUAL" ></ProjectItem>
                        <ProjectItem project = {projects[1]} url={`/project/${team}#film`} imgSrc={`/projectsImg/${team}_film_cover.webp`} tag="TEAMFILM" ></ProjectItem>
                        <ProjectItem project = {projects[2]} url={`/project/${team}#inter`} imgSrc={`/projectsImg/${team}_inter_cover.webp`}  tag="TEAMINTER" ></ProjectItem>
           
                </div>
                </div>
        </>
    )

    // 프로젝트 목록 아이템
    function ProjectItem(props) {
        const projectTitle = props.project
        const imgSrc = props.imgSrc
        const tag = props.tag
        const url = props.url
       
        return (
            
            // <div className="group relative transition-scale border-white border  overflow-hidden min-w-min w-fit h-1/3  min-h-[10%]">
            <div className="group relative transition-scale border-black border  overflow-hidden w-full h-fit  min-h-[10%]">
                <Link href={url}>
                    <Image
                        alt={projectTitle}
                        className="relative object-cover object-center h-full w-full  transition-transform hover:scale-110"
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

