import Link from "next/link"
import styles from './page.module.css';
import Image from "next/image";

// 포스터 이미지
function Poster(props) {
    return (
        <div className="bg-[#EDF2F7] w-full flex justify-center bg-gray">
            <Image
                alt="poster-image"
                className="object-fit object-center"
                src={props.imgSrc}
                // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
                width={420}
                height={594}
                placeholder="blur"
                // 이미지 로딩 중 보여줄 이미지
                blurDataURL="/loadingImage.png"
            />

        </div>
    )
}

export default Poster;