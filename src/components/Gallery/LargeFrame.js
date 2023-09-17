import Image from 'next/image'
import Link from 'next/link';

// 단체용 1/2 프레임
export default function LargeFrame(props) {
    // 프로젝트인지 프로필인지
    const category = props.category;

    const title = props.data?.title;
    const slugTitle = title?.replaceAll(' ',"");
    const tag = props.data?.tag;
    const name = props.data?.name;

    console.log(title);
    return (
        <>
            <div className="group relative transition-scale relative border-white border overflow-hidden min-h-vh70 w-full  max-h-vh md:w-1/2 md:max-h-vh30 md:min-h-vh40" >
                <Link href={`/${category}/${slugTitle}`}>
                    <Image
                        alt="project-image"
                        className="relative duration-300 hover:scale-110 block w-full h-full object-cover object-center"
                        src={`/projectsImg/${name}_cover.png`}  
                        // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
                        width={500}
                        height={700}
                        placeholder="blur"
                        // 이미지 로딩 중 보여줄 이미지
                        blurDataURL="/teamloadingImage.png"
                    />

                    {/* hover시 보이는 정보들 (이름, tag) */}
                    <div className='flex items-end absolute bottom-0 left-0 right-0 h-2/5  text-white p-4 bg-gradient-to-b from-transparent to-black bg-transparent translate-y-1 group-hover:-translate-y-0 transition-transform opacity-0  group-hover:opacity-100'>
                        <div className="relative w-full flex align-bottom justify-items-stretch max-tablet:flex-wrap op">
                            <h6 className="grow pr-2 self-end line-clamp-2 line-clamp-5">{title}</h6>
                            <div className="text-xs text-gray-300 leading-none text-right self-end">{name}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

LargeFrame.defaultProps = {
    category: "project",
    data: {
        title: "작품명",
        tag: "TEAM",
        name: "김철수"
    }
}