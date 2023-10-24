import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import Preview from "./Preview.js";
import Picker from "./Picker.js"; 
import { getProjectByIndex } from "@/data/project.js";
import "./scrollbar.css";


export default function Submenu(props) {

    const { mobile, state, category, dataList, onChildStateChange, isCollapsed } = props;
    const pathname = usePathname();
    //랜덤이미지 (임시용)
    const randomImg = "https://source.unsplash.com/random/"

    const [active, setActive] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [activePath, setActivePath] = useState(null);
    const [isPicked, setPicked] = useState(true);
    const [subtitlePosition, setSubtitlePosition] = useState({});
    const [isMouseOut, setIsMouseOut] = useState(state);

    const submenuListRefs = useRef([]);

    const handlePickerChange = (newState) => {
        setPicked(newState);
        onChildStateChange(isPicked);
        console.log("picked " + isPicked);
    };

    const handleMouseEnter = (idx, dataId) => {
        const submenuList = submenuListRefs.current[idx];
        const rect = submenuList.getBoundingClientRect();
        const newPosition = {
            top: rect.top - (rect.height/2),
            left: 16 + rect.width,

        }
        setSubtitlePosition(newPosition);
        if (idx !== 0) {
            setActive(true);
            setActiveId(dataId);
            setActivePath(decodeURI(`/${category}/${dataList[dataId].name}`))
        }
    };

    const handleMouseLeave = () => {
        // setActive(false);
        // setActiveId(null);
    };

    useEffect(()=>{
        setIsMouseOut(state);
    },[state])


    return (
        <>

            {mobile ? (
                <nav className={`mobile-submenu h-full grow relative border-l border-black overflow-auto ${category === null ? "hidden" : "flex"}`}>
                    <Picker items={dataList} onPickerClicked={handlePickerChange} category={category} isCollapsed={isCollapsed}></Picker>
                </nav>
            ) : (
                <nav className={`submenu h-full border-r border-black z-40 ${isMouseOut === "hover" ? "absolute left-48 border-l" : "hidden"}`} aria-label="Sidebar">
                    <div className="h-full">
                            <ul className="submenu-scroll-container w-48 h-full px-6 py-8 bg-white overflow-y-auto">
                                {dataList.map((data, idx) => {
                                    const isProjectCategory = category === "project";
                                    const isPathnameMatch = decodeURI(pathname) === decodeURI(`/${category}/${data.name}`);
                                    const isActive = idx !== 0 && activeId === data.id;
                                    const title = isProjectCategory ? data.title : data.name;
                                    return (
                                        <>
                                            <li
                                                key={data.id} className="submenu-list w-full inline-block group pb-3 hover:font-bold relative"
                                                onMouseEnter={() => handleMouseEnter(idx, data.id)} onMouseLeave={handleMouseLeave}>
                                                <Link ref={(el) => (submenuListRefs.current[idx] = el)} href={`/${category}/${data.name}`} className={`${isPathnameMatch ? "font-bold" : ""}`}>
                                                    {isPathnameMatch && "> "}{title}
                                                </Link>
                                            </li>
                                            {isProjectCategory && isActive && (
                                                <div className="description absolute bg-black  ml-4 px-4 py-1 text-white font-bold whitespace-nowrap inline-block"
                                                    style={{
                                                        position: "absolute",
                                                        top: subtitlePosition ? subtitlePosition.top : 0,
                                                        left: subtitlePosition ? subtitlePosition.left : 0,
                                                    }}
                                                >
                                                    {`${data?.subtitle} by.${data?.name}`}
                                                </div>
                                            )}
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                </nav>
            )}
            {
            category === "project" && (
                    <div onMouseEnter={() => { setIsMouseOut("collapsed"); console.log("mouse enter") }}>
                <Preview isActive={decodeURI(pathname) !== activePath && active && isMouseOut =="hover"} imgSrc={randomImg + activeId} />
                {/* <Preview isActive={category === "project" && pathname !== `/project/${activeId}` && active} imgSrc={`/projectsImg/${getProjectByIndex(activeId)?.name}`} /> */}
                </div>
            )}
        </>
    );
}

