'use client'
import placeholderURL from "@/components/PlaceHolder";
import Image from "next/image";
import Link from "next/link";

export function ProfileHeader(props) {
    
    const profile = props.data;
    return (
        <>
            {/* 사이니지: background-image */}

            <section className={` relative overflow-hidden profile-section text-white  bg-black md:px-16 md:my-12 p-4 phone:mb-12 max-phone:mb-24`}>

                {/* 이름 */}
                <h1 className="name text-xl  w-screen">{profile.name}</h1>
                <div className="english-name text-gray-500">{profile.engName}</div>

                {/* 프로필 상세*/}
                <div className="relative flex flex-wrap pt-4 ">
                    {/* 프로필 이미지 */}
                    <ProfileImage imgSrc={`/profilesImg/${profile.name}_profile.webp`}></ProfileImage>

                    {/* 프로필 정보 영역 */}
                    <div className="flex flex-col leading-loose">
                        <div className=" sm:min-h-[50%] h-auto ">{profile.introduction} </div>
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
                        <div className="absolute phone:max-w-[40%] flex p-auto p-2 right-1 bottom-0 content-end object-contain h-[30%] r-0" >
                        <img classname="h-fit" src={`/profilesImg/${profile.name}_signage.svg`}></img>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}


function ProfileImage(props) {
    const imgSrc = props.imgSrc;
    const remove = (e) => {
        e.target.classList.remove('opacity-0');
    }

    return (
        <>
            <div className="relative flex items-center justify-center sm:basis-1/4 basis-full  h-auto ">
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
            </div>
        </>
    )
}