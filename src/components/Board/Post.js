export default function Post(props) {
    const { id, from, to, text, date } = props;
    return (
        <>
            <div className="group relative transition-scale m-4 my-2 border h-fit max-h-vh40 border-black p-6 w-full 
                md:w-full lg:w-1/2 xl:w-1/3 md:m-0 md:border-r md:border-b md:border-l-0 md:border-t-0 md:text-xl">
                <div className="flex justify-between w-full whitespace-nowrap font-bold">
                    <div>
                        <span>#{id+1} {from}</span>
                    </div>
                    <div>
                        <span>to {to}</span>
                    </div>
                </div>
                <div className="w-full h-full pt-2 overflow-y-auto overflow-x-hidden md:pt-6 md:mb-6">
                    {text}
                </div>
            </div>
        </>
    )

}