import Gallery from '@/components/Gallery/Gallery'
import { loadProjects } from '@/api/notion';

export default async function ProjectList() {
    const data = await loadProjects();
    // const temp = Array.from({length: 24}, (_, i) => i + 1);
    return (
        <>  
            <Gallery category="project" dataList = {data}></Gallery>
        </>
    )
}

