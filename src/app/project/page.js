import Gallery from '@/components/Gallery/Gallery'

export default function ProjectList() {
    const temp = Array.from({length: 24}, (_, i) => i + 1);
    return (
        <>  
            <Gallery category="project" dataList = {temp}></Gallery>
        </>
    )
}