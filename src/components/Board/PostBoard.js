import Post from "./Post";

export default function PostBoardLayout(props){
    const dataList = props.dataList;
    const onPostModified = () => {
        props.onPostModified();
    }

    return(
        <>
            <div className="post-board w-full h-full overflow-y-auto transition-all">
                <div className="flex flex-wrap md:border-l md:border-t md:border-black">
                    <>
                        {dataList.map((data) => (
                            <Post key={data.id} id={data.id} from={data.from} to={data.to} text={data.text} timestamp={data.timestamp} password={data.password}
                            collectionName={props.collectionName}
                            onModified={onPostModified}></Post>
                        ))}
                    </>
                </div>
                <div className="h-2/6 md:h-1/6"></div>
        </div>
        </>
    )
}