import firestore from '../../../firebasedb';
import { collection, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';

export default function Post(props) {
    const { collectionName, id, from, to, text, timestamp, password } = props;
    const [modify, setModify] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [updateText, setUpdateText] = useState("");
    const passwordareaRef = useRef(null);
    const textareaRef = useRef(null);

    const collectionRef = collection(firestore, collectionName);

    const handleDelete = () => {
        if(inputPassword === password){
        deleteDoc(doc(collectionRef, id))
            .then(() => {
                props.onModified();
                setModify("");
                setInputPassword("");
                alert("삭제했습니다.");
            })
            .catch((error) => {
                console.error('문서 삭제 중 오류 발생:', error);
            });
        } else {
            setInputPassword("");
            passwordareaRef.current.value = "";
            alert("비밀번호가 다릅니다.");
        }
    }

    const handleUpdate = () => {
        const updateData = {
            text: updateText
        }
        if (inputPassword === password) {
            updateDoc(doc(collectionRef, id), updateData)
                .then(() => {
                    props.onModified();
                    setModify("");
                    setInputPassword("");
                    alert("수정했습니다.");
                })
                .catch((error) => {
                    console.error('문서 업데이트 중 오류 발생:', error);
                });
        } else {
            setInputPassword("");
            passwordareaRef.current.value = "";
            alert("비밀번호가 다릅니다.");
        }
    }

    const onDeleteClick = () => {
        setModify("delete");
    }

    const onUpdateClick = () => {
        textareaRef.current.value = text;
        setModify("update");
    }

    const handleModifyCancel = () => {
        setModify("");
        setInputPassword("");
    }

    return (
        <>
            <div className="flex-col justify-between overflow-hidden transition-scale m-4 my-2 border h-fit max-h-vh40 border-black p-6 w-full
                md:w-full lg:w-1/2 xl:w-1/3 md:m-0 md:border-r md:border-b md:border-l-0 md:border-t-0 md:text-xl md:max-h-80">
                <div className="flex flex-wrap justify-between w-full whitespace-nowrap font-bold h-11">
                    <span className='mr-2'>To. {to}</span>
                    <span>From. {from}</span>
                </div>
                <div className={`post-text w-full h-full pt-2 mb-2 overflow-y-scroll overflow-x-hidden md:my-4 md:pt-0 md:h-44 md:text-lg 
                ${modify === "update" ? "hidden" : ""}`}>
                    {text}
                </div>
                <textarea className={`update-textarea w-full h-full pt-2 mb-2 overflow-y-scroll overflow-x-hidden md:my-4 md:pt-0 md:h-44 md:text-lg
                resize-none outline-none ${modify === "update" ? "" : "hidden"}`} onChange={(e) => setUpdateText(e.target.value)} ref={textareaRef} maxLength={300}></textarea>
                <div className={`modifyDialog w-full -mt-2 ${modify !== "" ? "flex" : "hidden"}`}>
                    <div className={`password-input space-x-2 justify-between whitespace-nowrap w-full flex md:flex md:text-lg`}>
                        <input className="w-2/3 border-b border-b-black outline-none" type="password" placeholder="비밀번호를 입력하세요"
                            onChange={(e) => setInputPassword(e.target.value)} ref={passwordareaRef}></input>
                        <button className={`px-2 py-0 bg-black font-bold text-white ${modify === "delete" ? "" : "hidden"}`} type="submit" onClick={handleDelete}>삭제</button>
                        <button className={`px-2 py-0 bg-black font-bold text-white ${modify === "update" ? "" : "hidden"}`} type="submit" onClick={handleUpdate}>수정</button>
                        <button className="px-2 py-0 bg-black/30 text-white" type="submit" onClick={handleModifyCancel}>취소</button>
                    </div>
                </div>
                <div className={`${modify !== "" ? "hidden" : ""}`}>
                <div className="flex justify-between w-full text-sm text-neutral-500 md:my-2 ">
                    <span className="px-1">
                        {timestamp}
                    </span>
                    <div className="underline">
                        <button className="px-1" onClick={onUpdateClick}>수정</button>
                        <button className="px-1" onClick={onDeleteClick}>삭제</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}