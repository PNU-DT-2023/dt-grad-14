import Gallery from '@/components/Gallery/Gallery'
import { getProjectListData } from '@/data/project';


export default async function ProjectList() {
    const data = getProjectListData();
    // const temp = Array.from({length: 24}, (_, i) => i + 1);
    return (
        <>  
            <Gallery category="project" dataList = {data}></Gallery>
        </>
    )
}

