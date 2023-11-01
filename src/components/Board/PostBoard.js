import Post from "./Post";

export default function PostBoardLayout(props){
    const dataList = props.dataList;

    return(
        <>
            <div className="post-board w-full h-full overflow-y-auto transition-all">
                <div className="flex flex-wrap md:border-l md:border-t md:border-black">
                    <>
                        {dataList.map((data) => (
                            <Post key={data.id} num={data.num} from={data.from} to={data.to} text={data.text} timestamp={data.timestamp}></Post>
                        ))}
                    </>
                </div>
                <div className="h-2/6 md:h-1/6"></div>
        </div>
        </>
    )
}