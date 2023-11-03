import Image from "next/image";
import placeholderURL from "../PlaceHolder";

export default function Preview(props){
    const {imgSrc, isActive} = props;

return(
    <div className={`img-background absolute h-full left-96 right-0 bg-white/50 backdrop-blur-sm z-30 ${isActive ? "flex" : "hidden"}`}>
        <Image
            alt="poster-teaser"
            className={`${props.tag === "TEAM" ? "h-auto w-2/3" : "h-auto w-1/3"} m-auto`}
            src={imgSrc}
            width={500}
            height={700}
            placeholder={placeholderURL}
        />

    </div>
)
}