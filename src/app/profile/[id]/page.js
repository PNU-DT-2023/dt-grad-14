import Image from "next/image";
import Link from "next/link";

export default function Profile(props) {
    return (
        <>
            <div className="w-full h-screen flex-column flex-col lg:overflow-hidden ">
                <ProfileHeader name="김유민" engName="YUMIN KIM" imgsrc="/cutty.jpeg "></ProfileHeader>
                <ProjectList></ProjectList>
            </div>

        </>
    )
}

function ProfileHeader(props) {
    const { name, engName, imgSrc } = props;

    return (
        <>
            {/* 사이니지: background-image */}
            <section className=" profile-section text-white  bg-black md:px-16 md:py-12 p-4 phone:py-12 max-phone:pb-24 bg-[url('/signage-temp.svg')]
            bg-no-repeat lg:bg-[length:400px_200px] bg-[length:200px_100px] bg-right-bottom ">
                {/* 이름 */}
                <h1 className="name text-xl  w-screen">{name}</h1>
                <div className="english-name text-gray-500">{engName}</div>

                {/* 프로필 상세*/}
                <div className="flex flex-wrap pt-4 relative ">
                    {/* 프로필 이미지 */}
                    <ProfileImage imgSrc={imgSrc}></ProfileImage>

                    {/* 프로필 정보 영역 */}
                    <div className="lg:w-1/2 justify-between flex flex-col leading-loose">
                        <div className="max-phone:w-full">국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. </div>
                        <div>
                            <div className="CONTACT h-full">
                                <h5 className="font-sanserif text-gray-500">CONTACT</h5>
                                <ul>
                                    <li>dbals757@pusan.ac.kr</li>
                                    <li>links.com</li>
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
                    src="/profile-temp-image.png"
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
function ProjectList() {
    const imgSrc = "/cutty.jpeg"
    return (
        <>
                <h2 className="sectionTitle relative mx-2 ">PROJECT</h2>
                <section className="project-list max-h-[100%] grid md:grid-cols-3  w-full relative object-fit">
                    <ProjectItem id="1" imgSrc="" title="저는제목이정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말깁니다.정말정말정말정말정말정말정말정말정말정말정말정말정말정말" tag="PERSONAL"></ProjectItem>
                    <ProjectItem id="2" imgSrc="" title="추추초" tag="TEAM INTERACTION"></ProjectItem>
                    <ProjectItem id="3" imgSrc="" title="추추초" tag="TEAM FILM"></ProjectItem>
                </section>
        </>
    )
}

// 프로젝트 목록 아이템
function ProjectItem(props) {
    const { id, imgSrc, title, tag } = props
    return (
        <div className="group relative transition-scale relative border-white border  h-full w-full overflow-hidden ">
            <Link href={`/project/${id}`}>
                <Image
                    alt="project-image"
                    className="relative border border-white object-cover object-center min-h-30vh w-full  transition-transform hover:scale-110"
                    // 이미지 url 넣기
                    src="/tempTeam.png"
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    // 이미지 로딩 중 보여줄 이미지
                    blurDataURL="/loadingImage.png"
                />
                <div className='flex items-end absolute bottom-0 left-0 right-0 h-2/5  text-white p-4 bg-gradient-to-b from-transparent to-black bg-transparent opacity-100 translate-y-1 group-hover:-translate-y-0 transition-transform '>
                    <div className="relative w-full flex align-bottom justify-items-stretch max-tablet:flex-wrap">
                        <h6 className="grow pr-2 self-end line-clamp-2 line-clamp-5">{title}</h6>
                        <div className="text-xs text-gray-300 leading-none text-right self-end">{tag}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}