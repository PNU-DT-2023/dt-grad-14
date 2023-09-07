export default function Post(props) {
    const { id, from, to, text, date } = props;
    return (
        <>
            <div className="group relative transition-scale border-black border-r border-b p-6 overflow-hidden text-xl w-full max-h-vh40 min-h-vh40 md:w-1/3" >
                <div className="flex justify-between w-full whitespace-nowrap font-bold">
                    <div>
                        <span>#{id+1} {from}</span>
                    </div>
                    <div>
                        <span>to {to}</span>
                    </div>
                </div>
                <div className="w-full h-full p-4 text-ellipsis">
                    {text}
                </div>
            </div>
        </>
    )

}