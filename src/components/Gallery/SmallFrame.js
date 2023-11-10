'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import placeholderURL from "@/components/PlaceHolder";

// 개인용 1/4 프레임
export default function SmallFrame(props) {
    const category = props.category;

    const title = category==="project" ? props.data?.title : props.data?.name;
    const slugTitle = title?.replaceAll(' ',"");
    const tag = props.data?.tag;
    const name = props.data?.name;
    // const imgPath = category==="project" ? `/projectsImg/${name}_poster.webp` : `/profilesImg/${name}_profile.webp`;
    
    const defaultPath = `/projectsImg/default_cover.png`;
    const [imgSrc, setImgSrc] = useState(`/profilesImg/line/${name}.svg`);

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
        setImgSrc(`/profilesImg/${name}_profile.webp`); // 여기에서 다른 이미지로 바꿀 이미지 경로를 설정
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setImgSrc(`/profilesImg/line/${name}.svg`); // 마우스가 벗어날 때 기존 이미지로 돌아가도록 설정
    };


    return (
        <>
        <div
                className="group relative transition-scale relative border-white border overflow-hidden h-auto w-1/2 md:w-1/5 lg:w-1/5 group-hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            <Link href={`/${category}/${props.data.name}`}>
            <Image
            alt={`/${title}`}
            className="relative duration-300 block w-full h-full object-fit object-center tranisition-all"
            src={imgSrc}
            // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
            width={500}
            height={700}
            onError = { () => {setImgSrc(defaultPath)}}
            placeholder = {placeholderURL}
            />
            {/* hover시 보이는 정보들 (이름, tag) */}
            <div className='flex items-end absolute bottom-0 left-0 right-0 h-2/5  text-white p-4 bg-gradient-to-b from-transparent to-black bg-transparent translate-y-1 group-hover:-translate-y-0 transition-transform opacity-0  group-hover:opacity-100'>
                        <div className="relative w-full flex align-bottom justify-items-stretch max-tablet:flex-wrap op">
                            <h6 className="grow pr-2 self-end line-clamp-2 line-clamp-5">{title}</h6>
                            <div className={`${category=="project" ? "block" : "hidden" } text-xs text-gray-300 leading-none text-right self-end`}>{name}</div>
                        </div>
                    </div>
            </Link>
        </div>
        </>
    )
}

