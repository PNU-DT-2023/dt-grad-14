import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import Preview from "./Preview.js";
import Picker from "./Picker.js"; 
import { getProjectByIndex } from "@/data/project.js";


export default function Submenu(props) {

    const { mobile, state, category, dataList, onChildStateChange, isCollapsed } = props;
    const pathname = usePathname();

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
            top: rect.top - (32 - rect.height)/2 ,
            left: 16 + rect.width,

        }
        setSubtitlePosition(newPosition);
        if (dataId >= 0) {
            setActive(true);
            setActiveId(dataId);
            setActivePath(decodeURI(`/${category}/${dataList[dataId].name}`))
        } else{
            setActive(false);
        };
    };

    const handleMouseLeave = () => {
        // setActive(false);
        // setActiveId(null);
    };

    useEffect(()=>{
        setIsMouseOut(state);
        setActive(false);
        setActiveId(null);
        console.log("mouse out");
    },[state, category])


    return (
        <>

            {mobile ? (
                <nav className={`mobile-submenu h-full grow relative border-l border-black overflow-auto ${category === null ? "hidden" : "flex"}`}>
                    <Picker dataList={dataList} onPickerClicked={handlePickerChange} category={category} isCollapsed={isCollapsed}></Picker>
                </nav>
            ) : (
                <nav className={`submenu h-full border-r border-black z-40 ${isMouseOut === "hover" ? "absolute left-48 border-l" : "hidden"}`} aria-label="Sidebar">
                    <div className="h-full">
                            <ul className="submenu-scroll-container w-48 h-full px-6 py-8 bg-white overflow-y-auto">
                                {dataList.map((data, idx) => {
                                    const isAll = data.name === "ALL";
                                    const isProjectCategory = category === "project";
                                    const isPathnameMatch = isAll ? (decodeURI(pathname) === decodeURI(`/${category}`)) : (decodeURI(pathname) === decodeURI(`/${category}/${data.name}`));
                                    const isActive = !isAll && activeId === data.id;
                                    const title = isProjectCategory ? data.title : data.name;
                                    return (
                                        <>
                                            <li
                                                key={data.id} className="submenu-list w-full inline-block group pb-4 hover:font-bold relative leading-4"
                                                onMouseEnter={() => handleMouseEnter(idx, data.id)} onMouseLeave={handleMouseLeave}>
                                                <Link ref={(el) => (submenuListRefs.current[idx] = el)} href={isAll ? (`/${category}`) : (`/${category}/${data.name}`)} className={`${isPathnameMatch ? "font-bold" : ""}`}>
                                                    {isPathnameMatch && "> "}{title}
                                                </Link>
                                            </li>
                                            {isProjectCategory && isActive && active && (
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
                        <Preview isActive={category === "project" && pathname !== `/project/${activeId}` && active && isMouseOut == "hover"} imgSrc={`/projectsImg/${getProjectByIndex(activeId)?.name}_poster.webp`} />
                </div>
            )}
        </>
    );
}

