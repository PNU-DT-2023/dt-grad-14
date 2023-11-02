export default function Post(props) {
    const { num, from, to, text, timestamp } = props;
    return (
        <>
            <div className="group flex-col justify-between overflow-hidden transition-scale m-4 my-2 border h-fit max-h-vh40 border-black p-6 w-full
                md:w-full lg:w-1/2 xl:w-1/3 md:m-0 md:border-r md:border-b md:border-l-0 md:border-t-0 md:text-xl md:h-80 md:max-h-80">
                <div className="flex justify-between w-full whitespace-nowrap font-bold">
                    <div>
                        <span>#{num} {from}</span>
                    </div>
                    <div>
                        <span>to {to}</span>
                    </div>
                </div>
                <div className="post-text w-full h-full pt-2 mb-2 overflow-y-scroll overflow-x-hidden md:my-4 md:pt-0 md:h-48 md:text-lg">
                    {text}
                </div>
                <div className="flex justify-between w-full text-sm text-neutral-500 md:my-2 ">
                    <span className="px-1">
                        {timestamp}
                    </span>
                    <div className="underline">
                        <button className="px-1">수정</button>
                        <button className="px-1">삭제</button>
                    </div>
                </div>
            </div>
        </>
    )
}