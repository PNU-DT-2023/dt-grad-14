"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preview from "./Preview.js";
import Picker from "./Picker.js";


export default function Submenu(props) {
    const { mobile, state, category, dataList, onChildStateChange, isCollapsed } = props;
    const pathname = usePathname();
    //랜덤이미지 (임시용)
    const randomImg = "https://source.unsplash.com/random/"

    const [active, setActive] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [isPicked, setPicked] = useState(true);

    const handlePickerChange = (newState) => {
        setPicked(newState);
        onChildStateChange(isPicked);
        console.log("picked " + isPicked);
    };

    if (mobile) {
        return (
            <>
                <nav className={`mobile-submenu h-full grow relative border-l border-black overflow-auto ${category===null ? "hidden" : "flex"}`}>
                    <Picker items={dataList} onPickerClicked={handlePickerChange} category={category} isCollapsed={isCollapsed}></Picker>
                </nav>
            </>
        );
    }
    else { 
        //pc
        return (
            <>
                <nav className={`submenu h-full border-r border-black z-40 ${state === "hover" ? "absolute left-48 border-l" : "hidden"}`} aria-label="Sidebar">
                    <div className="h-full">
                        <ul className="w-48 h-full px-6 py-8 bg-white overflow-x-visible">
                            {dataList.map((data, idx) => (
                                <li key={data.id} className="submenu-list w-full inline-block group pb-3 hover:font-bold relative"
                                    onMouseEnter={() => { if (idx !== 0) { setActive(true); setActiveId(data.id) } }} onMouseLeave={() => { setActive(false); setActiveId(null) }}>
                                    <Link href={data.path} className={`${pathname === data.path ? "font-bold" : ""}`}>{pathname === data.path && "> "}{data.name}</Link>
                                    {category === "project" && (
                                        <div className="description absolute hidden bg-black  ml-4 px-4 py-1 text-white whitespace-nowrap group-hover:inline-block">
                                            {data.description}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <Preview isActive={category === "project" && pathname !== "/project/" + activeId && active} imgSrc={randomImg + activeId}></Preview>
            </>
        )
    }
}