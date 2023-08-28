import Gallery from '@/components/Gallery/Gallery'

export default function ProfileList() {
    // 더미 이미지 생성을 위한 임시 배열, 추후 데이터 가져와서 패치해서 넣을 것
    const temp = Array.from({length: 20}, (_, i) => i + 1);
    return (
        <>  
            <Gallery category="profile" dataList = {temp}></Gallery>
        </>
    )
}