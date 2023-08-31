"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Submenu(props) {
    const dataList = props.dataList;
    const category = props.category;
    const pathname = usePathname();

    return (
        <nav className="h-full border-r border-black" aria-label="Sidebar">
            <div className="rounded h-full">
                <ul className="w-48 h-full px-6 py-8 bg-white">
                    {dataList.map((data) => (
                        <li key={data.id} className="group pb-3 hover:font-bold overflow-visible">
                            <Link href={data.path} className={`${pathname.startsWith(data.path) ? "font-bold" : ""}`}>{pathname === data.path && "> "}{data.name}</Link>
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
    )
}