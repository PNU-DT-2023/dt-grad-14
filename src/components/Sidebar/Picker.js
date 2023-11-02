import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const Picker = (props) => {
    const { dataList, category, onPickerClicked, isCollapsed } = props;
    const pathname = usePathname();
    const currentIdx = dataList.findIndex(data => decodeURI(pathname) === decodeURI(`/${category}/${data.name}`));
    const SCROLL_DEBOUNCE_TIME = 200;
    const [selected, setSelected] = useState(0);
    const [isMenuClicked, setMenuClicked] = useState(true);
    const [ismenuPicked, setMenuPicked] = useState(false);
    const ref = useRef();
    const itemRefs = useRef([]);
    const timerRef = useRef(null);

    var index = selected;

    const handleLinkClick = () => {
        setMenuClicked(true);
        onPickerClicked(isMenuClicked);
    };

    const handleScroll = () => {
        if (ref.current && !ismenuPicked) {
            if (timerRef.current) { clearTimeout(timerRef.current); }
            const scrollTop = ref.current.scrollTop;
            const scrollHeight = ref.current.scrollHeight - ref.current.clientHeight;
            index = Math.floor(((scrollTop / scrollHeight)) * dataList.length);
            if (index >= dataList.length) { index = dataList.length - 1 }
            timerRef.current = setTimeout(() => {
                itemRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });

            }, 100);
            setSelected(index);
        }
    };

    const handleMenuPicked = (idx) => {
        if (timerRef.current) { clearTimeout(timerRef.current); }
        setSelected(idx);
        setMenuPicked(true);
        itemRefs.current[idx]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        timerRef.current = setTimeout(() => {
            setMenuPicked(false);
        }, SCROLL_DEBOUNCE_TIME);
    }

    useEffect(() => {
        setSelected(0);
        handleMenuPicked(0);
        console.log("category changed")
    }, [category]);

    useEffect(() => {
        if (currentIdx >= 0) { index = currentIdx } else { index = 0 }
        setSelected(index);
        itemRefs.current[index]?.scrollIntoView({
            behavior: "auto",
            block: "center",
        });
        console.log(dataList[index].name);
    }, [isCollapsed]);

    return (
        <div className="relative w-full mx-auto">
            <div className="picker-container h-full overflow-y-scroll overflow-x-clip" ref={ref} onScroll={handleScroll}>
                <div className='h-1/2'></div>
                {dataList.map((data, idx) => {
                    const isProjectCategory = category === "project";
                    const title = isProjectCategory ? data.title : data.name;
                    const isAll = data.name === "ALL";
                    return (
                        <div
                            ref={(el) => (itemRefs.current[idx] = el)}
                            key={data.id}
                            className={`list-item relative w-full px-4 pr-12 py-0 h-10 leading-10 truncate group ${selected === idx ? 'font-bold text-black' : 'text-neutral-500'}`}
                            onClick={() => { handleMenuPicked(idx); }}
                        >
                            <Link href={`/${category}/${data.name}`} onClick={handleLinkClick}
                                className={`absolute h-full inline-block duration-200 ${selected === idx ? "right-4" : "-right-12"}`}>
                                <span className="sr-only">화살표</span>
                                <svg width="21" height="39" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7844 10L11.5344 3.75L10.6532 4.63125L15.3907 9.375L2.78442 9.375L2.78442 10.625L15.3907 10.625L10.6532 15.3687L11.5344 16.25L17.7844 10Z" fill="black" />
                                </svg>
                                </Link>
                            {selected === idx ? (
                                <Link href={isAll ? (`/${category}`) : (`/${category}/${data.name}`)} onClick={handleLinkClick}>
                                    {isProjectCategory && !isAll ? `${data?.subtitle} by.${data?.name}` : title}
                                </Link>
                            ) : (
                                title
                            )}
                        </div>    
                    );
                })}
                <div className='h-1/2'></div>
            </div>
        </div>
    );
};

export default Picker;
