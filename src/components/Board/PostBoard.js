import Post from "./Post";

export default function PostBoardLayout(props){
    const dataList = props.dataList;

    return(
        <>
        <div className="w-full">
                <div className="flex flex-wrap border-l border-t border-black">
                    <>
                        {dataList.map((data) => (
                            <Post id={data.id} key={data.id} from={data.from} to={data.to} text={data.text}></Post>
                        ))}
                    </>
                </div>
        </div>
        </>
    )
}