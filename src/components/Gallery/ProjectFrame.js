'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import placeholderURL from "@/components/PlaceHolder";

// 개인용 1/4 프레임
export default function ProjectFrame(props) {
    const category = props.category;

    const title = props.data?.title 
    const name = props.data?.name;
    const imgPath = `/projectsImg/${name}_cover.webp`;
    
    const defaultPath = `/teamloadingImage.png`;
    const [imgSrc, setimgSrc] = useState(imgPath);
    return (
        <>
        <div className="group relative transition-scale relative border-white border overflow-hidden basis-1/2 lg:basis-1/3 group-hover">
            <Link href={`/${category}/${props.data.name}`}>
            <Image
            alt={`/${title}`}
            className="relative duration-300 hover:scale-110 block w-full h-full object-cover object-center"
            src={imgSrc}
            // 아래 w,h는 필수 구성요소로 크게 영향은 없지만 빠지면 안됨
            width={720}
            height={480}
            onError = { () => {setimgSrc(defaultPath)}}
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
