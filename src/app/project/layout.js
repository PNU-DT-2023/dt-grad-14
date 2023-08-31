import Footer from "@/components/Footer/Footer";
import Submenu from "@/components/Sidebar/Submenu"

const projectDataExample = Array.from({ length: 24 }, (_, idx) => ({
    id: idx,
    name: idx === 0 ? 'ALL' : `작품 ${idx}`,
    description: idx === 0 ? '전체보기' : `작품설명${idx}작품설명입니다작품`,
    path: idx == 0 ? '/project' : `/project/${idx}`
}));

function ProjectLayout({ children }) {
    return (
        <div className="absolute flex items-center h-full overflow-hidden">
            <Submenu category="project" dataList={projectDataExample}></Submenu>
            <div className='overflow-scroll w-full h-full'>
                {children}
                {/* 푸터 관련 추후수정 */}
            </div>
        </div>
    );
}

export default ProjectLayout;