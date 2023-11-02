'use client'
import PostBoardLayout from '@/components/Board/PostBoard'
import Write from '@/components/Board/Write'

const boardDataExample = Array.from({ length: 8 }, (_, idx) => ({
    id: idx,
    from: `방문자 ${idx+1}`,
    to: "ALL",
    text: "더미텍스트입니다dummytexttextextext더미텍스트",
    date: "2023-11-10"
    
}));

export default function GuestBook() {
    return (
        <div className="guestbook h-full overflow-hidden flex-col">
            <div className="flex justify-between w-full pt-14 md:pt-0 flex-shrink-0">
                <h2 className="font-bold text-lg px-6 py-4 whitespace-nowrap md:text-2xl">제14회 졸업전시에 오신 여러분 감사합니다!</h2>
                <div className="search justify-between bg-black text-white text-xl px-4 m-2 mt-3 min-w-fit h-10 hidden md:flex">
                    <div className="inline-flex items-center space-x-2 w font-bold my-auto">
                        <svg width="16" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 11L18.5933 0.5H0.406734L9.5 11Z" fill="white" />
                        </svg>
                        <span>ALL</span>
                    </div>
                    <input className="h-full w-3/4 bg-transparent outline-none" type="text" placeholder="검색"></input>
                </div>
            </div>
            <div className="flex flex-col-reverse h-full bottom-0 md:flex-row">
                <div className="w-full h-fit bottom-0 absolute z-10 md:relative md:max-w-xs md:h-80">
                <Write></Write>
                </div>
                <PostBoardLayout dataList={boardDataExample}></PostBoardLayout>
            </div>
        </div>
    )
}