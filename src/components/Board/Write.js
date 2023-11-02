import firestore from '../../../firebasedb';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect, useRef } from 'react';

export default function Write(props) {
    const profileListData = props.profileList;
    const textareaRef = useRef(null);
    const nameareaRef = useRef(null);
    const passwordareaRef = useRef(null);
    const containerRef = useRef(null);
    const [isWriting, setIsWriting] = useState(false);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [reciever, setReciever] = useState("ALL");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Click event handler for the document
        const handleDocumentClick = (e) => {
            if (!containerRef.current.contains(e.target) && e.target !== textareaRef.current) {
                handleTextareaBlur();
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener('click', handleDocumentClick);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const onClickPostButton = async () => {
        console.log("추가 준비", firestore)
        if (text.trim() === "" || name.trim() === "" || password.trim() === "") {
        } else{
        try {
            const docRef = await addDoc(collection(firestore, "test"), {
                to : reciever,
                from : name,
                text : text,
                timestamp: serverTimestamp(),
                password: password,
            });
            console.log("추가 완료 ", docRef.id);
            setReciever("ALL");
            textareaRef.current.value = "";
            setText("");
            nameareaRef.current.value = "";
            setName("");
            passwordareaRef.current.value = "";
            setPassword("");
            props.onPostButtonClick();
        } catch (error) {
            console.error("데이터 추가 중 오류 발생:", error);
        }
        setIsWriting(false);
    }
    }

    const handleTextareaFocus = () => {
        setIsWriting(true);
    }
    const handleTextareaBlur = () => {
        setIsWriting(false);
    }

    const handleDropdown = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="flex flex-col justify-between h-full bg-white border-red-500 border-t-2 mx-0 p-4 overflow-hidden text-lg md:mx-6 md:p-6 md:border-2" ref={containerRef}>
                <div className={`items-center justify-between mb-2 ${isWriting ? "inline-flex" : "hidden"} md:inline-flex`}>
                    <div className='inline-flex w-64'>
                        <span className="font-bold my-auto">TO.</span>
                        <div className="absolute text-center left-10 px-2 py-0 mx-3 w-24 bg-black text-white font-bold md:left-20 md:px-4 md:mx-2 md:w-28 cursor-pointer"
                            onClick={handleDropdown}>
                            <div className='inline-flex items-center space-x-2 my-auto'>
                                <span>{reciever}</span>
                            <svg width="16" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 11L18.5933 0.5H0.406734L9.5 11Z" fill="white" />
                            </svg>
                        </div> 
                            <ul className={`dropdown-content mt-0 mb-4 font-normal overflow-y-scroll max-h-64 ${isMenuOpen ? "block" : "hidden"}`}>
                                {profileListData.map((data) => {
                                    return (
                                        <>
                                            <li className="hover:font-bold my-1"
                                                key={data.id} onClick={() => setReciever(data.name)}>
                                                {data.name}
                                            </li>
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <button className="px-4 md:hidden" onClick={handleTextareaBlur}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_825_374)">
                                <path d="M0.0878448 15.9099L7.99869 7.99902" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M15.9096 0.0878906L7.99876 7.99874" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M7.99869 7.99874L0.0878448 0.0878906" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M7.99876 7.99902L15.9096 15.9099" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_825_374">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className={`name-area whitespace-nowrap mt-2 mb-2 ${isWriting ? "flex" : "hidden"} md:flex md:mt-0` }>
                    <span className="font-bold my-auto">FROM.</span>
                    <input className="flex-1 w-1/2 mx-2 border-b border-b-black outline-none" type="text" placeholder="이름" maxLength={10} spellCheck="false"
                        onChange={(e) => setName(e.target.value)} ref={nameareaRef}></input>
                </div>
                <div className={`w-full mx-auto ${isWriting ? "py-4" : "pt-2"} md:h-3/4 md:flex-1 md:py-2`}>
                    <textarea className={`textarea w-full resize-none outline-none border-b ${isWriting ? "h-40" : "h-8 min-h-fit"} md:h-full md:overflow-auto`} name="body"
                        placeholder="응원의 한마디를 남겨주세요." maxLength={300} spellCheck="false" onFocus={handleTextareaFocus} ref={textareaRef}
                        onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className={`submit-button justify-end whitespace-nowrap mt-0 w-full ${isWriting ? "flex" : "hidden"} md:flex md:mt-1`}>
                        <input className="w-1/2 mx-2 border-b border-b-black outline-none" type="password" placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)} ref={passwordareaRef}></input>
                    <button className="px-5 py-1 bg-black font-bold text-white" type="submit" onClick={onClickPostButton}>작성</button>
                </div>
            </div>
        
        </>
    )
}