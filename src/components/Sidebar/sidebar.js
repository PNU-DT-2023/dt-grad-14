"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Submenu from "./Submenu.js";
import { useState } from "react";

const mainMenuData = [
    { id: 'project', name: 'project', path: '/project' },
    { id: 'profile', name: 'profile', path: '/profile' },
    { id: 'guest', name: 'guest book', path: '/guestbook' }
]

const projectDataExample = Array.from({ length: 24 }, (_, idx) => ({
    id: idx,
    name: idx === 0 ? 'ALL' : `작품 ${idx}`,
    description: idx === 0 ? '전체보기' : `작품설명${idx}작품설명입니다작품`,
    path: idx == 0 ? '/project' : `/project/${idx}`
}));
const profileDataExample = Array.from({ length: 24 }, (_, idx) => ({
    id: idx,
    name: idx === 0 ? 'ALL' : `학생 ${idx}`,
    path: idx == 0 ? '/profile' : `/profile/${idx}`
}));
const dataExample = {
    project: projectDataExample,
    profile: profileDataExample
}

export default function Sidebar() {
    const pathname = usePathname();
    const [activeState, setActiveState] = useState("collapsed");
    const [expandCategory, setExpandCategory] = useState(null);
    const [hoverCategory, setHoverCategory] = useState(null);

    function collapseMenu() {
            setActiveState("collapsed"); setHoverCategory(null);
    }

    return (
        <nav className="Sidebar h-full flex font-sanserif z-50" aria-label="Sidebar">
            {/* pc */}
            <div className="h-full border-r border-black hidden md:block">
                <ul className="w-48 text-neutral-500">
                    <li key="main" onMouseEnter={() => { collapseMenu() }}>
                        <Link href='/'>
                            <div className={`py-10 border-b border-black bg-black hover:opacity-100
                                ${pathname === '/' ? "opacity-100" : "opacity-30"}`}>
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
                        onMouseEnter={() => { setActiveState("hover"); setHoverCategory("project") }}
                        onClick={() => {setExpandCategory("project")}}>
                        <Link className={`${pathname.startsWith("/project") ? "font-bold text-black" : ""} ${hoverCategory === "project" && "font-bold"} uppercase text-xl`}
                        href={"/project"}>project</Link>
                    </li>
                    <li key="profile" className="group p-6  border-b border-black"
                        onMouseEnter={() => { setActiveState("hover"); setHoverCategory("profile") }}
                        onClick={() => { setExpandCategory("profile") }}>
                        <Link className={`${pathname.startsWith("/profile") ? "font-bold text-black" : "group-hover:font-bold"} ${hoverCategory === "profile" && "font-bold"} uppercase text-xl`}
                        href={"/profile"}>profile</Link>
                    </li>
                    <li key="guest" className="group p-6  border-b border-black" onMouseEnter={() => { collapseMenu() }}>
                        <Link className={`${pathname.startsWith("/guestbook") ? "font-bold text-black" : "group-hover:font-bold"} uppercase text-xl`} href={"/guestbook"}>guest book</Link>
                    </li>

                </ul>
                <ul className="w-48 p-6 absolute bottom-0">
                    <li className="hover:opacity-50 pb-2">
                        <Link href="#" className="underline">history</Link>
                    </li>
                    <li className="hover:opacity-50">
                        <Link href="#">
                            <span className="sr-only">Instagram</span>
                            <svg
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div onMouseLeave={() => { collapseMenu() }}>
                <Submenu category={hoverCategory} state={activeState} dataList={hoverCategory === "project" ? dataExample.project : dataExample.profile}></Submenu>
                <Submenu category={expandCategory} state={(pathname.startsWith("/project") || pathname.startsWith("/profile")) ? "expanded" : "collapsed"} dataList={expandCategory === "project" ? dataExample.project : dataExample.profile}></Submenu>
            </div>

        </nav>
    );
};