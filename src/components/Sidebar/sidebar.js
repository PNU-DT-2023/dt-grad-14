"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Submenu from "./submenu.js";
import "./animation.css";
import { getProjectListData } from "@/data/project.js";
import { getProfileListData } from "@/data/profiles.js";

const toAllData = {
    id: -1,
    name: "ALL",
    title: "ALL"
}

const instagram = "https://instagram.com/pnu.dt.14";
const webtoon = "https://instagram.com/dt.14_toon";

export default function Sidebar(props) {
    const { isHeaderShow } = props;
    const pathname = usePathname();
    const [activeState, setActiveState] = useState("collapsed");
    const [hoverCategory, setHoverCategory] = useState(null);
    const [mobileSidebar, setMobileSidebar] = useState(false);
    const [mobileCategory, setMobileCategory] = useState(null);
    const [isHeaderOpen, setHeaderOpen] = useState(isHeaderShow);

    const handleMenuPicked = (newState) => {
        setMobileSidebar(!newState);
    };

    const projectListData = getProjectListData();
    const profileListData = getProfileListData();
    projectListData.unshift(toAllData);
    profileListData.unshift(toAllData);

    function collapseMenu() {
        setActiveState("collapsed"); setHoverCategory(null);
    }

    function HamburgerClick() {
        setMobileSidebar(!mobileSidebar);
            if (pathname.startsWith("/project")) { setMobileCategory("project") }
            else if (pathname.startsWith("/profile")) { setMobileCategory("profile") } else {setMobileCategory(null)}
    }

    function CategoryName() {
        return `${pathname.startsWith('/profile') ? "profile" : pathname.startsWith('/project') ? "project" : pathname.startsWith('/guestbook') ? "guest book" : ""}`
    }

    useEffect(() => {
        setHeaderOpen(isHeaderShow)
    }, [isHeaderShow]);

    return (
        <>
        <nav className="Sidebar h-full hidden font-sanserif z-50 md:flex" aria-label="Sidebar">
            {/* pc */}
            <div className="h-full border-r border-black">
                <ul className="w-48 text-neutral-500">
                    <li key="main" onMouseEnter={() => { collapseMenu() }}>
                        <Link href='/'>
                            <div className={`py-10 border-b border-black bg-black hover:opacity-30
                                ${pathname === '/' ? "opacity-100" : "opacity-100"}`}>
                                <span className="sr-only">Main</span>
                                <Image
                                    alt="project-image"
                                    className="relative block h-full w-full object-none object-center"
                                    src="/mainLogo.svg"
                                    width={300} height={300}
                                />
                            </div>
                        </Link>
                    </li>
                    <li key="project" className="group p-6  border-b border-black"
                        onMouseEnter={() => { setActiveState("hover"); setHoverCategory("project") }}>
                        <Link className={`${pathname.startsWith("/project") ? "font-bold text-black" : ""} ${hoverCategory === "project" && "font-bold"} uppercase text-xl`}
                        href={"/project"}>project</Link>
                    </li>
                    <li key="profile" className="group p-6  border-b border-black"
                        onMouseEnter={() => { setActiveState("hover"); setHoverCategory("profile") }}>
                        <Link className={`${pathname.startsWith("/profile") ? "font-bold text-black" : "group-hover:font-bold"} ${hoverCategory === "profile" && "font-bold"} uppercase text-xl`}
                        href={"/profile"}>profile</Link>
                    </li>
                    <li key="guest" className="group p-6  border-b border-black" onMouseEnter={() => { collapseMenu() }}>
                        <Link className={`${pathname.startsWith("/guestbook") ? "font-bold text-black" : "group-hover:font-bold"} uppercase text-xl`} href={"/guestbook"}>guest book</Link>
                    </li>

                </ul>
                <ul className="w-48 p-6 absolute bottom-0">
                    <li className="hover:opacity-50 pb-2">
                        <Link href={webtoon} target="_blank" className="underline">webtoon</Link>
                    </li>
                    <li className="hover:opacity-50">
                            <Link href={instagram} target="_blank">
                            <span className="sr-only">Instagram</span>
                            <svg
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div onMouseLeave={() => { collapseMenu() }}>
                <Submenu mobile={false} category={hoverCategory} state={activeState} dataList={hoverCategory === "project" ? projectListData : profileListData }></Submenu>
            </div>
        </nav>

            {/* mobile */}
            <nav className={`Mobile-sidebar-wrap top-0 left-0 fixed flex font-sanserif z-40 md:hidden
            ${mobileSidebar ? 'h-full w-screen mix-blend-normal' : 'h-auto w-auto mix-blend-difference'}`} aria-label="Mobile-sidebar">
                <div className={`hamburger-wrap ${isHeaderOpen ? '' : 'closed' } fixed flex justify-between p-6 z-50 w-full`}>
                    <button className={`hamburger my-auto ${mobileSidebar ? 'active' : ''}`} onClick={()=>{HamburgerClick()}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={`uppercase font-bold text-xl text-white ${mobileSidebar ? 'hidden' : 'inline-block'}`}>
                        {CategoryName()}
                        </div>
                    <div className="w-7"></div>
                </div>
                <div className={`Mobile-sidebar ${mobileSidebar ? 'active' : 'collapsed'} h-full w-full backdrop-blur transition-all`}>
                    <div className={`h-full w-1/3 min-w-fit  px-6 ${mobileSidebar ? 'flex' : 'hidden'}`}>
                        <ul className="Main-menu uppercase whitespace-nowrap text-l self-center">
                            <li key="main">
                                <Link href='/' onClick={() => { setMobileSidebar(false); setMobileCategory(null); }}>home</Link>
                            </li>
                            <li key="project" className={`${mobileCategory === "project" ? "font-bold" : ""}`} 
                            onClick={() => {setMobileCategory("project")}}>
                                project
                            </li>
                            <li key="profile" className={`${mobileCategory === "profile" ? "font-bold" : ""}`} 
                            onClick={() => {setMobileCategory("profile")}}>
                                profile
                            </li>
                            <li key="guest" className="">
                                <Link href={"/guestbook"} onClick={() => { setMobileSidebar(false); setMobileCategory(null); }}>guest book</Link>
                            </li>
                        </ul>
                        <ul className="links absolute bottom-6">
                            <li className="pb-2">
                                <Link href={webtoon} target="_blank" className="underline">webtoon</Link>
                            </li>
                            <li className="">
                                <Link href={instagram} target="_blank">
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Submenu onChildStateChange={handleMenuPicked} isCollapsed={!mobileSidebar} mobile={true} category={mobileCategory} dataList={mobileCategory === "project" ? projectListData : profileListData}></Submenu>

                </div>
                
            </nav>
        </>
    );
};
