import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Picker = (props) => {
    const { items, onPickerClicked, indexInit } = props;
    const SCROLL_DEBOUNCE_TIME = 1000;
    const [selected, setSelected] = useState(indexInit);
    const [isMenuClicked, setMenuClicked] = useState(true);
    const [ismenuPicked, setMenuPicked] = useState(false);
    const ref = useRef(HTMLDivElement);
    const itemRefs = useRef(HTMLLIElement);
    const timerRef = useRef();
    const container = document.querySelector('.overflow-y-scroll');

    const itemHeight = 40;
    var index = selected;

    const handleLinkClick = () => {
        setMenuClicked(true);
        onPickerClicked(isMenuClicked);
    };

    const handleScroll = () => {
        if (ref.current && !ismenuPicked) {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;

            index = Math.floor(((scrollTop / scrollHeight)) * items.length);
            if (index >= items.length) { index = items.length - 1 }
            setSelected(index);
        }
    };

    const handleMenuPicked = (idx) => {
        clearTimeout(timerRef.current);
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
    }, [items]);




    return (
        <div className="relative w-full mx-auto">
            <div className="picker-container h-full overflow-y-scroll" ref={ref} onScroll={handleScroll}>
                <div className='h-1/2'></div>
                {items.map((item, index) => (
                    <div
                        ref={(el) => (itemRefs.current[index] = el)}
                        key={index}
                        className={`list-item px-4 py-0 h-10 leading-10 group ${selected === index ? 'font-bold text-black' : 'text-neutral-500'}`}
                        onClick={() => { handleMenuPicked(index); }}
                    >
                        {selected === index ? (
                            <Link href={item.path} onClick={handleLinkClick}>
                                {item.name}
                            </Link>
                        ) : (
                            item.name
                        )}
                    </div>
                ))}
                <div className='h-1/2'></div>
            </div>
        </div>
    );
};

export default Picker;
