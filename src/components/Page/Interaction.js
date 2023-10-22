'use-client'
import styles from './page.module.css';
import Image from 'next/image';
import placeholderURL from "@/components/PlaceHolder";
import { useState } from 'react';

export function Interaction(props) {
    const data = props.data;
    const detailURL = `/projectsImg/${data?.name}_detail.png`;
    const [mapImgSrc, setMapImgSrc] = useState(`/projectsImg/${data?.name}_map.png`);
    const [stepImg1Src, setImg1Src] = useState(`/projectsImg/${data?.name}_step1.png`);
    const [stepImg2Src, setImg2Src] = useState(`/projectsImg/${data?.name}_step2.png`);
    const [stepImg3Src, setImg3Src] = useState(`/projectsImg/${data?.name}_step3.png`);
    const mapErrorImg = `/projectsImg/웹팀_map.png`;
    const errorImg = `/projectsImg/웹팀_step1.png`;
    const steps = props.data.interMethod.split('||');

    return (
        <>
        <section id="inter" className='pt-12 px-2'>
            <div className="text-left flex flex-wrap pb-12 divide-y divide-black">
                <div className='line1 flex flex-wrap'>
                    <div className='text-left lg:basis-1/2  flex flex-col px-4'>
                        <div className={styles.sectionTitle}>
                            INTERACTION
                        </div>
                        <h2 className={styles.title}>{data?.interTitle}</h2>
                        <div className={`${styles.sectionBody} text-body mr-4`}>{
                            data?.interBody?.split('\n').map(line => {
                                return (<span>{line}<br /></span>)
                            })
                        }</div>
                        <div className={styles.sectionCaption}>{data?.interFormat}</div>
                    </div>
                    <div id='map' className='lg:basis-1/2  h-auto'>
                        <Image
                            alt="detail-image"
                            className=" object-fit object-center"
                            src={mapImgSrc}
                            width={1920}
                            height={1080}
                            placeholder={placeholderURL}
                            onError = { () => { setMapImgSrc(mapErrorImg)}}
                        />
                    </div>
                </div>

                <div id='methods' className='flex flex-wrap w-full lg:divide-x p-2'>
                    <div className='method-item  lg:basis-1/3'>
                        <Image
                            alt="detail-image-step1"
                            className="object-center"
                            // src={`/projectsImg/${data?.name}_step1.png`}
                            src = {stepImg1Src}
                            width={1200}
                            height={675}
                            placeholder={placeholderURL}
                            onError = { () => { setImg1Src(errorImg)}}
                        />
                        <p className={styles.methodItemCaption}>
                            {steps[0]}
                        </p>
                    </div>

                    <div className='method-item  lg:basis-1/3'>
                        <Image
                            alt="detail-image-step2"
                            className="object-center"
                            src = {stepImg2Src}
                            width={1200}
                            height={675}
                            placeholder={placeholderURL}
                            onError = { () => { setImg2Src(errorImg)}}
                        />
                        <p className={styles.methodItemCaption}>
                            {steps[1]}
                        </p>
                    </div>
                    <div className='method-item lg:basis-1/3'>
                        <Image
                            alt="detail-image-step3"
                            className="object-center"
                            src = {stepImg3Src}
                            width={1200}
                            height={675}
                            placeholder={placeholderURL}
                            onError = { () => { setImg3Src(errorImg)}}
                        />
                        <p className={styles.methodItemCaption}>
                            {steps[2]}
                        </p>
                    </div>
                </div>

                <div className='w-full'></div>
            </div>
            {/* 인터 시연 영상 유튜브 | 없으면 안띄움*/}
            {
                data?.interVideoURL !== "" &&
                <div className="flex justify-center bg-black">
                    <iframe src={data?.interVideoURL} className='w-half min-h-vh30 max-laptop:w-full tablet:h-vh50 tablet:h-vh30' />
                </div>
            }
        </section>
    </>
    )
}

export default Interaction;