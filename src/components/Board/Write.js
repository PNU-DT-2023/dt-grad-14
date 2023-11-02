import { useState } from 'react';
export default function Write() {
    const [isWriting, setIsWriting] = useState(false);

    const handleTextareaFocus = () => {
        setIsWriting(true);
    }
    const handleTextareaBlur = () => {
        setIsWriting(false);
    }

    return (
        <>
        {/* pc */}
            <div className="flex flex-col justify-between h-full bg-white border-red-500 border-t-2 mx-0 p-4 overflow-hidden text-lg md:mx-6 md:p-6 md:border-2">
                <div className={`items-center mb-2 ${isWriting ? "inline-flex" : "hidden"} md:inline-flex`}>
                    <span className="font-bold">TO</span>
                    <div className="px-4 mx-2 bg-black text-white font-bold">ALL</div>
                </div>
                <div className={`w-full mx-auto ${isWriting ? "py-4" : "pt-2"} md:h-3/4 md:flex-1`}>
                    <textarea className={`w-full resize-none outline-none break-keep border-b ${isWriting ? "h-40" : "h-8 min-h-fit"} md:h-full md:overflow-auto`} name="body"
                        placeholder="응원의 한마디를 남겨주세요." onFocus={handleTextareaFocus} onBlur={handleTextareaBlur}></textarea>
                </div>
                <div className={`submit-button justify-between whitespace-nowrap mt-4 w-full ${isWriting ? "flex" : "hidden"} md:flex`}>
                        <span className="font-bold">FROM</span>
                        <input className="w-1/2 flex-1 mx-2 border-b border-b-black outline-none" type="text" placeholder="이름"></input>
                    <input className="px-2 bg-black font-bold text-white" type="submit" value="POST"></input>
                </div>
            </div>
        
        </>
    )
}