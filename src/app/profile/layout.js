import Footer from "@/components/Footer/Footer";
import Submenu from "@/components/Sidebar/submenu"

const profileDataExample = Array.from({ length: 24 }, (_, idx) => ({
    id: idx,
    name: idx === 0 ? 'ALL' : `학생 ${idx}`,
    path: idx == 0 ? '/profile' : `/profile/${idx}`
}));

function ProjectLayout({ children }) {
    return (
        <div className="absolute flex items-center h-full overflow-hidden">
            <Submenu category="profile" dataList={profileDataExample}></Submenu>
            <div className='overflow-scroll w-full h-full'>
                {children}
                {/* 푸터 관련 추후수정 */}
            </div>
        </div>
    );
}

export default ProjectLayout;