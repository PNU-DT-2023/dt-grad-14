import SmallFrame from './SmallFrame'
import LargeFrame from './LargeFrame'

export default function GalleryLayout(props) {
    // 리스트 데이터
    const data = props.dataList; 
    // 리스트 카테고리(project or profile)
    const category = props.category;
    
    // 언스플래시에서 랜덤 이미지 불러오기
    const randomImg = "https://source.unsplash.com/random/"
    const profileGallery = data.map((e, idx) => (
        <SmallFrame imgSrc= {randomImg+props.category} title={idx+1} id={idx} key={idx} />
    ))

    let content;
    if (category === "project") {
        content = (
            <>
                <LargeFrame category={category} imgSrc="/tempTeam.png" title="웹팀인터" id="1" />
                <LargeFrame category={category} imgSrc={randomImg+"?artmuseum"} title="인터팀인터" id="2" />
                <LargeFrame category={category} imgSrc={randomImg+"?video"} title="영상팀인터" id="3" />
                <LargeFrame category={category} imgSrc={randomImg+"?poster"} title="도록팀인터" id="4" />
            </>
        );
    } 

    return (
        <section>
            <div className="w-full">
                <div className="flex flex-wrap w-full border-1">
                    {content}
                    {profileGallery}
                </div>
            </div>
        </section>
    )
}

