import Image from 'next/image'
import Link from 'next/link';

// 개인용 1/4 프레임
export default function SmallFrame(props) {
    const {category, imgSrc, title, id} = props;
    return (
        <>
        <div className="group relative transition-scale relative border-white border overflow-hidden min-h-vh50 w-full  md:w-1/4 sm:w-1/2">
            <Link href={`/profile/${id}`}>
            <Image
            alt="project-image"
            className="relative duration-300 hover:scale-110 block w-full h-full object-cover object-center"
            src={imgSrc}
            // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
            width={500}
            height={700}
            placeholder="blur"
            // 이미지 로딩 중 보여줄 이미지
            blurDataURL="/loadingImage.png"
            />
            {/* hover시 나타나는 제목 */}
            <div className='flex items-end absolute bottom-0 left-0 right-0 h-1/5  text-white p-4 bg-gradient-to-b from-transparent to-black bg-transparent opacity-0 transition-opacity transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 '>
                {title}
            </div>
            </Link>
        </div>
        </>
    )
}
