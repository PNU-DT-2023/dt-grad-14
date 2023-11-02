'use client'
import firestore from '../../../firebasedb';
import PostBoardLayout from '@/components/Board/PostBoard'
import Write from '@/components/Board/Write'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getProfileListData } from "@/data/profiles.js";

const toAllData = {
    id: -1,
    name: "ALL",
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000); // Firestore 타임스탬프를 JavaScript Date 객체로 변환
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(query(collection(firestore, 'test'), orderBy('timestamp', 'desc')));
    const dataList = [];

    querySnapshot.forEach((doc, index) => {
        dataList.push({
            id: doc.id,
            num: index,
            from: doc.data().from,
            to: doc.data().to,
            text: doc.data().text,
            timestamp: formatTimestamp(doc.data().timestamp),
        });
    });
    return dataList;
}

export default function GuestBook() {
    const profileListData = getProfileListData();
    profileListData.unshift(toAllData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [reciever, setReciever] = useState("ALL");
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchDataFromFirestore();
                const filteredData = reciever === "ALL" ? data : data.filter(item => item.to === reciever);;
                setDataList(filteredData);
            } catch (error) {
                console.error('Firestore 데이터 가져오기 오류:', error);
            }
        }

        fetchData();
    }, [reciever]);

    const handleDropdown = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onPostButtonClick = () => {
        setReciever("ALL");
        fetchData();
    }

    return (
        <div className="guestbook h-full overflow-hidden flex-col">
            <div className="flex justify-between w-full pt-14 md:pt-0 flex-shrink-0">
                <div className="font-bold text-lg w-2/3 px-6 py-4 md:w-auto whitespace-nowrap md:text-2xl md:px-6">
                    <span className='block md:inline'>제 14회 졸업전시에 오신 </span><span className='block md:inline'>여러분 감사합니다!</span></div>
                <button className='search z-10 inline-flex self-end bg-black text-white text-md m-3 mr-4 mt-3 min-w-max h-10 md:text-xl md:mr-0' onClick={handleDropdown}>
                    <div className="py-1 my-auto bg-black text-white font-bold">
                        <div className='inline-flex items-center space-x-2 my-auto px-1 mx-2 md:px-2 md:mx-4'>
                            <span className="font-bold my-auto hidden md:block">TO: </span>
                            <span>{reciever}</span>
                            <svg className="" width="16" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 11L18.5933 0.5H0.406734L9.5 11Z" fill="white" />
                            </svg>
                        </div>
                        <ul className={`dropdown-content mt-2 mb-4 font-normal text-center overflow-y-scroll max-h-64 ${isMenuOpen ? "block" : "hidden"}`}>
                            {profileListData.map((data) => {
                                return (
                                    <>
                                        <li className="hover:font-bold"
                                            key={data.id} onClick={() => setReciever(data.name)}>
                                            {data.name}
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                </button>
            </div>
            <div className="flex flex-col-reverse h-full bottom-0 md:flex-row">
                <div className="w-full h-fit bottom-0 absolute z-10 md:relative md:max-w-xs lg:max-w-sm md:h-80">
                <Write profileList={profileListData} onPostButtonClick={onPostButtonClick}></Write>
                </div>
                <PostBoardLayout dataList={dataList}></PostBoardLayout>
            </div>
        </div>
    )
}