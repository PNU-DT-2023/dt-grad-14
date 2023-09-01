"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Submenu(props) {
    const dataList = props.dataList;
    const category = props.category;
    const pathname = usePathname();

    return (
        <>
            <nav className="submenu h-full border-r border-black" aria-label="Sidebar">
                <div className="rounded h-full">
                    <ul className="w-48 h-full px-6 py-8 bg-white">
                        {dataList.map((data) => (
                            <li key={data.id} className="group pb-3 hover:font-bold overflow-visible"
                                onMouseEnter={(e) => console.log('id', e)}
                            // 추후 기능추가..,...,......,,.........
                            >
                                <Link href={data.path} className={`${pathname === data.path ? "font-bold" : ""}`}>{pathname === data.path && "> "}{data.name}</Link>
                                {category === "project" && (
                                    <div className="absolute hidden bg-black ml-4 px-4 py-1 text-white group-hover:inline-block z-50">
                                        {data.description}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* 호버 미리보기 기능 추가예정 */}
        </>
    )
}