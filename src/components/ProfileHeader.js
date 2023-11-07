'use client'
import placeholderURL from "@/components/PlaceHolder";
import Image from "next/image";
import Link from "next/link";

export function ProfileHeader(props) {
    
    const profile = props.data;
    return (
        <>
            {/* 사이니지: background-image */}

            <section className={` bg-black lg:basis-2/3 relative overflow-hidden profile-section text-white pt-16 md:pt-4 md:px-16 md:my-12 p-4 phone:mb-12 max-phone:mb-24`}>

                {/* 이름 */}
                <div className="flex  w-full justify-between">
                    <div>
                        <h1 className="name text-xl">{profile.name}</h1>
                        <div className="english-name text-gray-500">{profile.engName}</div>
                    </div>
                    <div className="english-name text-gray-400 p-4 outline outline-gray-600">{profile.team}</div>
                </div>
                {/* 프로필 상세*/}
                <div className="relative flex flex-wrap pt-4 gap-2">
                    {/* 프로필 이미지 */}
                    <ProfileImage name={profile.name}></ProfileImage>
                    
                    {/* 프로필 정보 영역 */}
                    <div className="flex flex-col leading-loose">
                        <div className=" h-auto w-2/3 pb-4 ">{profile.introduction} </div>
                        <div>
                            <div className="CONTACT h-full">
                                <h5 className="font-sanserif text-gray-500">CONTACT</h5>
                                <ul className="flex flex-col gap-1.5 opacity-[90]">
                                    <li>{profile.email && <a alt="이메일" href={`mailto:${profile.email}`}>{profile.email}</a>}</li>
                                    <li>{profile.phone && <a alt="전화번호" href={`telto:${profile.phone}`}>{profile.phone} </a>}</li>
                                    <li className="leading-normal px-2 bg-slate-700 rounded-full w-fit h-fit ">{profile.instagram && <a alt="인스타그램" href={`https://instagram.com/${profile.instagram}`}target="_blank">
                                        @{profile.instagram}</a>}</li>
                                    <li>{profile.url && <a href={`${profile.url}`} target="_blank">
                                        {profile.url.replace("https://www.","")}</a>}</li>
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
    const name = props.name
    const imgSrc = `/profilesImg/${name}_profile.webp`
    const remove = (e) => {
        e.target.classList.remove('opacity-0');
    }

    return (
        <>
            <div className="relative flex items-center justify-center lg:basis-1/3 basis-1/2  h-auto ">
                <Image
                    alt="profile-image"
                    className="sm:pr-2 md:pr-8 pb-12 md:pb-8 opacity-0 duration-200"
                    src={imgSrc}
                    quality={10}
                    width={1080}
                    height={1520}
                    onLoad = {remove}
                    placeholder = {placeholderURL}
                    loading = 'eager'
                />
                <div className="mix-blend-difference opacity-80 absolute flex  bottom-[0%] right-[-70%] lg:right-[-200%]  p-auto p-2 right-1  content-end object-contain h-[30%] lg:h-[50%] r-0" >
                        <img classname="h-fit" src={`/profilesImg/${name}_signage.svg`}></img>
                    </div>
            </div>
        </>
    )
}

