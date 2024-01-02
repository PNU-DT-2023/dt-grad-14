'use-client'
import styles from './page.module.css';
import Image from 'next/image';
import placeholderURL from "@/components/PlaceHolder";
import { useState } from 'react';

export function Interaction(props) {
    const data = props.data;
    const name = data?.name;

    const [mapImgSrc, setMapImgSrc] = useState(`/projectsImg/${name}_map.webp`);

    const steps = data ? data.interMethod.split('||') : [];
    const [imageError, setImageError] = useState(false);

    const interVideoURL = data?.interVideoURL ? `https://www.youtube.com/embed/${data.interVideoURL}` : false;

    return (
        <>
        <section id="inter" className='pt-12 px-2 pb-12'>
            <div className="text-left flex flex-wrap ">
                <div className='line1 flex flex-wrap'>
                    <div className='text-left lg:basis-1/2  flex flex-col px-4'>
                        <div className={styles.sectionTitle}>
                            INTERACTION
                        </div>
                        <h2 className={styles.title}>{data?.interTitle}</h2>
                        <div className={`${styles.sectionBody} text-sm mr-4 mb-2`}>{
                            data?.interBody?.split('\n').map((line,idx) => {
                                return (<span key={idx}>{line}<br /></span>)
                            })
                        }</div>
                        <div className={`${styles.sectionCaption} mb-4 text-sm text-gray-600`}>{data?.interFormat}</div>
                    </div>
                    <div id='map' className='lg:basis-1/2  h-auto'>
                        <Image
                            alt="detail-image"
                            className=" object-fit object-center"
                            src={mapImgSrc}
                            width={1920}
                            height={1080}
                            placeholder={placeholderURL}
                        />
                    </div>
                </div>

                <div id='methods' className='flex flex-wrap w-full p-2 justify-around'>
                    {
                        // console.log(steps)
                        steps.map((step,idx) => (
                        
                            <div key={`method-step-${idx}`} className={`method-item lg:basis-1/4 place-self-center grid lg:grid-rows-2 `}>
                                <Image
                                    alt={`detail-image-step${idx+1}`}
                                    className="object-center h-full"
                                    src={imageError ? '/projectsImg/temp_step.png' : `/projectsImg/${name}_step${idx + 1}.webp`}
                                    width={1200}
                                    height={675}
                                    placeholder={placeholderURL}
                                />
                                <p className={`row-start-2 h-auto ${styles.methodItemCaption}`}>
                                    {step}
                                </p>
                        </div>
                        
                        ))
                    }
                </div>
            </div>
            {/* 인터 시연 영상 유튜브 | 없으면 안띄움*/}
            {
                interVideoURL ? 
                    <div className="flex justify-center bg-black">
                        <iframe src={interVideoURL} className='w-half min-h-vh30 max-laptop:w-full tablet:h-vh50 tablet:h-vh30' />
                    </div>
                 :

                                <div className='cover w-full top-50 flex justify-center lg:p-24'>
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={`/projectsImg/${name}_inter_cover.webp`}
                                        className='object-fit'
                                        placeholder={placeholderURL}
                                    >
                                    </Image>
                                    </div>
 
            }
        </section>
    </>
    )
}

export default Interaction;