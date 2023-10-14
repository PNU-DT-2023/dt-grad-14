import { loadProfiles } from '@/api/notion';
import Gallery from '@/components/Gallery/Gallery'
import { getProfileListData } from '@/data/profiles';

export default async function ProfileList() {
    // 더미 이미지 생성을 위한 임시 배열, 추후 데이터 가져와서 패치해서 넣을 것
    const data = getProfileListData();
    return (
        <>  
            <Gallery category="profile" dataList = {data}></Gallery>
        </>
    )
}