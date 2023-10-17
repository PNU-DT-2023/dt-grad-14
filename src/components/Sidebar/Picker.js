import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import "./scrollbar.css";
import { usePathname } from 'next/navigation';

const Picker = (props) => {
    const { items, category, onPickerClicked, isCollapsed } = props;
    const pathname = usePathname();
    const currentIdx = items.findIndex(item => item.path === pathname);
    const SCROLL_DEBOUNCE_TIME = 200;
    const [selected, setSelected] = useState(0);
    const [isMenuClicked, setMenuClicked] = useState(true);
    const [ismenuPicked, setMenuPicked] = useState(false);
    const ref = useRef();
    const itemRefs = useRef([]);
    const timerRef = useRef(null);

    const itemHeight = 40;
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
            index = Math.floor(((scrollTop / scrollHeight)) * items.length);
            if (index >= items.length) { index = items.length - 1 }
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
    }, [isCollapsed]);

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
