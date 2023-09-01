export default function Write() {
    return (
        <>
            <div className="flex-col justify-between w-1/3 h-96 border-red-500 border-2 mx-6 p-6 overflow-hidden text-xl">
                <div className="inline-flex items-center mb-4">
                    <span className="font-bold">TO</span>
                    <div className="px-4 mx-2 bg-black text-white font-bold">
                    ALL
                    </div>
                </div>
                <hr></hr>
                <div className=" w-full h-3/4 flex-1 mx-auto py-4">
                    <textarea className="w-full h-full p-2 resize-none overflow-auto outline-none" name="body" placeholder="내용을 입력하세요"></textarea>
                </div>
                <div className="flex justify-between whitespace-nowrap w-full">
                    <div className="">
                        <span className="font-bold">FROM</span>
                        <input className="w-1/2 flex-1 ml-2 border-b border-b-black outline-none" type="text" placeholder="이름"></input>
                    </div>
                    {/* <div>
                        <span>비밀번호</span>
                        <input className="w-1/2 flex-1 ml-2 border-b border-b-black outline-none" type="password"></input>
                    </div> */}
                    <input className="px-2 bg-black text-white" type="submit" value="등록"></input>
                </div>
            </div>            
        </>
     )         
}