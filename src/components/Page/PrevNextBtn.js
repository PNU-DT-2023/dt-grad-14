import { projectData, getProjectByIndex } from "@/data/project";
import Link from "next/link";

export function navIndex(props) {
    const currentIndex = props;

    function  getPrevPageIndex() {
        const prev = currentIndex-1>=0 ? currentIndex-1 : -1;
        return prev; 
    }

    function getNextPageIndex() {
        const next = currentIndex+1<=projectData.length-1 ? currentIndex+1 : false;
        return next; 
    }

    return {
        getPrevPageIndex,
        getNextPageIndex
    };
}

export function NavBtn(props) {
    const currentIndex = props.data ? props.data.index : -111;
    const nav = navIndex(currentIndex)
    const prev =  nav.getPrevPageIndex();
    const next = nav.getNextPageIndex();
    return (
        <div lassName="nav-btn-wrapper flex flex-col py-2  ">
            <div className="nav-btn-wrapper flex divide-x">
                {    
                
                <Link href={`./${getProjectByIndex(prev)?.name}`} className={`group/btn bg-white  w-full p-4  content-center flex ${prev >=0 ? 'visible' : 'invisible' }`} >
                    <svg
                        className="h-4 relative group-hover/btn:-rotate-6 transition"
                        fill="#E8361E"
                        viewBox="0 0 39.44 16.04"
                        aria-hidden="true"
                    >
                        <path d="M19.62,.66c-1.93,2.73-3.97,5.29-6.39,7.59s-5.13,4.68-8.68,4.74c-.49,0-1.07-.26-1.52-.23-.18,.01-.19-.33-.11,.06,.06,.28,.45-.37,.72-.5,1.43-.71,3.79,.53,5.13,1.04,1.98,.74,3.89,1.29,6.01,1.46,2.34,.19,4.7,.23,7.05,.19,5.39-.07,10.77-.33,16.16-.34,1.93,0,1.93-3,0-3-5.72,0-11.42,.32-17.13,.34-2.71,.01-5.63,.11-8.27-.55-2.28-.57-4.37-1.76-6.69-2.16-2.18-.37-4.42,.14-5.53,2.23-.98,1.84,.17,3.56,1.98,4.16,3.66,1.2,8.05-.92,10.77-3.25,3.53-3.02,6.43-6.49,9.1-10.27,1.12-1.58-1.48-3.08-2.59-1.51h0Z"></path>
                    </svg>
                    <div className="w-full  px-2 font-sanserif ">PREV</div>
                </Link>
                }
                <Link href={`./`} className="group/btn bg-white text-center  justify-center flex w-full   ">
                <div className="py-4 mx-2 font-sanserif ">
                LIST
                </div>
                 </Link>
                {
                <Link href={`./${getProjectByIndex(next)?.name}`} className={`group/btn bg-white w-full p-4  content-center flex ${next ? 'visible' : 'invisible' }`}>
                    <div className="w-full text-right px-2 font-sanserif ">NEXT</div>
                    <svg
                        className="h-4 relative group-hover/btn:rotate-6 transition"
                        fill="#E8361E"
                        viewBox="0 0 39.44 16.04"
                        aria-hidden="true"
                    >
                        <path d="M19.82,.66c1.93,2.73,3.97,5.29,6.39,7.59s5.13,4.68,8.68,4.74c.49,0,1.07-.26,1.52-.23,.18,.01,.19-.33,.11,.06-.06,.28-.45-.37-.72-.5-1.43-.71-3.79,.53-5.13,1.04-1.98,.74-3.89,1.29-6.01,1.46-2.34,.19-4.7,.23-7.05,.19-5.39-.07-10.77-.33-16.16-.34-1.93,0-1.93-3,0-3,5.72,0,11.42,.32,17.13,.34,2.71,.01,5.63,.11,8.27-.55,2.28-.57,4.37-1.76,6.69-2.16,2.18-.37,4.42,.14,5.53,2.23,.98,1.84-.17,3.56-1.98,4.16-3.66,1.2-8.05-.92-10.77-3.25-3.53-3.02-6.43-6.49-9.1-10.27-1.12-1.58,1.48-3.08,2.59-1.51h0Z" ></path>
                    </svg>
                </Link>
                }
            </div>
            <div>
            
            </div>
     </div>
    )
}

export default NavBtn;