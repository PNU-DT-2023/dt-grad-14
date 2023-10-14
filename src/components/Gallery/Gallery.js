import SmallFrame from './SmallFrame'
import LargeFrame from './LargeFrame'

export default function GalleryLayout(props) {
    // 리스트 데이터
    const data = props.dataList; 
    const category = props.category;
    const profileGallery = data?.map((e, index) => (
        category === "project" ? (
                                    e.tag === "TEAM" ?
                                            ( <LargeFrame 
                                                key={index} data={e} category={category}/>
                                               
                                                ) :
                                            ( <SmallFrame 
                                                key={index}
                                                data={e} category={category}/>)
                                ) :
                                (
                                    <>
                                     <SmallFrame key={index} data={e} category={category}/>
                                    </>
                                )
    ))

    return (
        <section>
            <div className="w-full">
                <div className="flex flex-wrap w-full border-1">
                    {profileGallery}
                </div>
            </div>
        </section>
    )
}