import Image from "next/image";

export default function Preview(props){
    const {imgSrc, isActive} = props;

return(
    <div className={`img-background absolute h-full left-96 right-0 bg-white z-30 ${isActive ? "flex" : "hidden"}`}>
        <Image
            alt="poster-teaser"
            className="h-3/4 w-auto m-auto blur"
            src={imgSrc}
            width={500}
            height={700}
            placeholder="blur"
            blurDataURL="/loadingImage.png"
        />

    </div>
)
}